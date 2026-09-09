import { useCallback, useEffect, useState } from "react";
import { useLocation, useParams } from "react-router";
import ProductBreadcrumb from "../../components/product/ProductBreadcrumb";
import ProductImageGallery from "../../components/product/ProductImageGallery";
import ProductInfo from "../../components/product/ProductInfo";
import PurchaseBox from "../../components/product/PurchaseBox";
import ProductDetailContent from "../../components/product/ProductDetailContent";
import ReviewSection from "../../components/review/ReviewSection";
import ScrollTopButton from "../../components/common/ScrollTopButton";
import Loading from "../../components/common/Loading";
import {
  showSuccessToast,
  showFailToast,
} from "../../components/common/ShowToast";
import { getProduct } from "../../api/productsApi";
import { isBestProduct, isNewProduct } from "../../data/products";
import {
  getReviews,
  createReview,
  updateReview,
  deleteReview,
} from "../../api/reviewsApi";
import * as S from "../../styles/ProductDetail/ProductDetailPage.styles";

const ProductDetailPage = ({ isLoggedIn = false }) => {
  const { id } = useParams(); // /products/:id → "1", "14" ...
  const { hash } = useLocation();

  const [quantity, setQuantity] = useState(1);
  const [isWished, setIsWished] = useState(false);

  // 상품
  const [product, setProduct] = useState(null);
  const [productError, setProductError] = useState(false);

  useEffect(() => {
    let alive = true;
    getProduct(id)
      .then((data) => {
        if (!alive) return;
        setProduct(data);
        setProductError(false);
      })
      .catch((err) => {
        console.error("상품 로딩 실패:", err);
        if (alive) setProductError(true);
      });
    return () => {
      alive = false;
    };
  }, [id]);

  // 아직 이번 URL 의 상품이 아니면(이전 상품이 남아있으면) 로딩 취급
  const isCurrentProduct = product != null && String(product.id) === id;

  // 리뷰
  const [reviews, setReviews] = useState([]);

  const loadReviews = useCallback(
    () =>
      getReviews(id)
        .then((data) => setReviews(data.reviews))
        .catch((err) => console.error("리뷰 로딩 실패:", err)),
    [id],
  );

  useEffect(() => {
    loadReviews();
  }, [loadReviews]);

  // 상품이 바뀔 때마다 스크롤 최상단 (특정 섹션으로 이동하는 경우는 제외)
  useEffect(() => {
    if (hash) return;
    window.scrollTo(0, 0);
  }, [id, hash]);

  // #review 등 해시로 들어오면 콘텐츠가 로드된 후 해당 섹션으로 스크롤
  useEffect(() => {
    if (!hash || !isCurrentProduct) return;
    document
      .querySelector(hash)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [hash, isCurrentProduct]);

  /* 별점·리뷰 수는 리뷰 목록에서 계산 */
  const reviewCount = reviews.length;
  const averageRating =
    reviewCount === 0
      ? 0
      : reviews.reduce((sum, review) => sum + (review.rating ?? 0), 0) /
        reviewCount;

  const handleAddToCart = () => {
    console.log("장바구니 담기", { productId: id, quantity });
    showSuccessToast("장바구니에 담겼습니다");
  };

  const handleToggleWish = () => {
    setIsWished((prev) => !prev);
    console.log("찜 토글", { productId: id });
  };

  const handleCheckout = () => {
    console.log("결제하기", { productId: id, quantity });
  };

  /* 리뷰 CRUD — 서버 연동. 작성/수정은 실패 시 throw 하여 폼이 에러 표시 */
  const handleCreateReview = async (payload) => {
    await createReview(id, payload);
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

  if (productError) {
    return (
      <S.Wrapper>
        <S.Page>
          <p>상품을 불러올 수 없어요.</p>
        </S.Page>
      </S.Wrapper>
    );
  }

  if (!isCurrentProduct) return <Loading />;

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
              key={id}
              images={product.images}
              alt={product.name}
              soldOut={product.soldOut}
              isBest={isBestProduct(product.id)}
              isNew={isNewProduct(product.id)}
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
          key={id}
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
