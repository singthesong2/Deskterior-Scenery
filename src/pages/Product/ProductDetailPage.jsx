import { useCallback, useEffect, useState } from "react";
import { mockProduct } from "../../constants/mockProduct";
import ProductBreadcrumb from "../../components/product/ProductBreadcrumb";
import ProductImageGallery from "../../components/product/ProductImageGallery";
import ProductInfo from "../../components/product/ProductInfo";
import PurchaseBox from "../../components/product/PurchaseBox";
import ProductDetailContent from "../../components/product/ProductDetailContent";
import ReviewSection from "../../components/review/ReviewSection";
import ScrollTopButton from "../../components/common/ScrollTopButton";
import {
  showSuccessToast,
  showFailToast,
} from "../../components/common/ShowToast";
import { getProduct } from "../../api/productsApi";
import {
  getReviews,
  createReview,
  updateReview,
  deleteReview,
} from "../../api/reviewsApi";
import * as S from "../../styles/ProductDetail/ProductDetailPage.styles";

//라우트에 :id 생기면 useParams 로 상품 번호 받기 (지금은 1 고정)
const PRODUCT_ID = 1;

const ProductDetailPage = ({ isLoggedIn = false }) => {
  const [quantity, setQuantity] = useState(1);
  const [isWished, setIsWished] = useState(false);

  // 상품: 처음엔 목 데이터, 서버 응답 오면 교체 (실패 시 목 유지)
  const [product, setProduct] = useState(mockProduct);

  useEffect(() => {
    let alive = true;
    getProduct(PRODUCT_ID)
      .then((data) => alive && setProduct(data))
      .catch((err) => console.error("상품 로딩 실패:", err));
    return () => {
      alive = false;
    };
  }, []);

  const [reviews, setReviews] = useState([]);

  const loadReviews = useCallback(
    () =>
      getReviews(PRODUCT_ID)
        .then((data) => setReviews(data.reviews))
        .catch((err) => console.error("리뷰 로딩 실패:", err)),
    [],
  );

  useEffect(() => {
    loadReviews();
  }, [loadReviews]);

  // 진입 시 스크롤 최상단
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  /* 별점·리뷰 수는 리뷰 목록에서 계산 */
  const reviewCount = reviews.length;
  const averageRating =
    reviewCount === 0
      ? 0
      : reviews.reduce((sum, review) => sum + (review.rating ?? 0), 0) /
        reviewCount;

  const handleAddToCart = () => {
    console.log("장바구니 담기", {
      productId: product.id,
      quantity,
      price: product.price,
    });
    showSuccessToast("장바구니에 담겼습니다");
  };

  const handleToggleWish = () => {
    setIsWished((prev) => !prev);
    console.log("찜 토글", { productId: product.id });
  };

  const handleCheckout = () => {
    console.log("결제하기", {
      productId: product.id,
      quantity,
      price: product.price,
    });
  };

  /* 리뷰 CRUD — 서버 연동. 작성/수정은 실패 시 throw 하여 폼이 에러 표시 */
  const handleCreateReview = async (payload) => {
    await createReview(PRODUCT_ID, payload);
    await loadReviews();
    showSuccessToast("리뷰가 등록되었습니다");
  };

  const handleUpdateReview = async (reviewId, payload) => {
    await updateReview(reviewId, payload);
    await loadReviews();
    showSuccessToast("리뷰가 수정되었습니다");
  };

  const handleDeleteReview = async (reviewId) => {
    try {
      await deleteReview(reviewId);
      await loadReviews();
      showSuccessToast("리뷰가 삭제되었습니다");
    } catch (err) {
      showFailToast(err.message || "리뷰 삭제에 실패했습니다");
    }
  };

  return (
    <S.Wrapper>
      <S.Page>
        <ProductBreadcrumb
          category={product.category}
          productName={product.name}
        />

        <S.TopSection>
          <S.GalleryColumn>
            <ProductImageGallery
              key={PRODUCT_ID}
              images={product.images}
              alt={product.name}
              soldOut={product.soldOut}
            />
          </S.GalleryColumn>

          <S.InfoColumn>
            <ProductInfo
              name={product.name}
              category={product.category}
              rating={averageRating}
              reviewCount={reviewCount}
              price={product.price}
              description={product.description}
            />
            <PurchaseBox
              quantity={quantity}
              onQuantityChange={setQuantity}
              onAddToCart={handleAddToCart}
              onCheckout={handleCheckout}
              isWished={isWished}
              onToggleWish={handleToggleWish}
              soldOut={product.soldOut}
            />
          </S.InfoColumn>
        </S.TopSection>

        <ProductDetailContent sections={product.detailSections} />

        <ReviewSection
          reviews={reviews}
          isLoggedIn={isLoggedIn}
          onCreate={handleCreateReview}
          onUpdate={handleUpdateReview}
          onDelete={handleDeleteReview}
        />

        <ScrollTopButton />
      </S.Page>
    </S.Wrapper>
  );
};

export default ProductDetailPage;
