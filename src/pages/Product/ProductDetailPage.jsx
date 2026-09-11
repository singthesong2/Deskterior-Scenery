import { useEffect, useState } from "react";
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
import useCartStore from "../../store/cartStore";
import { isBestProduct, isNewProduct } from "../../data/products";
import {
  getReviews,
  createReview,
  updateReview,
  deleteReview,
} from "../../api/reviewsApi";
import * as S from "../../styles/ProductDetail/ProductDetailPage.styles";

const ProductDetailPage = ({ isLoggedIn = false }) => {
  const { id } = useParams();
  const { hash } = useLocation();

  const [quantity, setQuantity] = useState(1);
  const [isWished, setIsWished] = useState(false);

  const addToCart = useCartStore((s) => s.addToCart);

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

  const isCurrentProduct = product != null && String(product.id) === id;

  const [reviews, setReviews] = useState([]);

  // 상품(id)이 바뀌면 리뷰 목록 새로 조회
  useEffect(() => {
    let alive = true;
    getReviews(id)
      .then((data) => {
        if (alive) setReviews(data.reviews);
      })
      .catch((err) => console.error("리뷰 로딩 실패:", err));
    return () => {
      alive = false;
    };
  }, [id]);

  const reloadReviews = () =>
    getReviews(id)
      .then((data) => setReviews(data.reviews))
      .catch((err) => console.error("리뷰 로딩 실패:", err));

  // 상품이 바뀔 때마다 스크롤 최상단
  useEffect(() => {
    if (hash) return;
    window.scrollTo(0, 0);
  }, [id, hash]);

  useEffect(() => {
    if (!hash || !isCurrentProduct) return;
    document
      .querySelector(hash)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [hash, isCurrentProduct]);

  //별점·리뷰 수는 리뷰 목록에서 계산
  const reviewCount = reviews.length;
  const averageRating =
    reviewCount === 0
      ? 0
      : reviews.reduce((sum, review) => sum + (review.rating ?? 0), 0) /
        reviewCount;

  const handleAddToCart = async () => {
    if (!product) return;

    // 상세페이지 상품(id/images/soldOut) → 장바구니가 쓰는 모양(productId/imageUrl/isSoldOut)
    try {
      await addToCart(
        {
          productId: product.id,
          name: product.name,
          price: product.discountPrice || product.price,
          imageUrl: product.images?.[0],
          isSoldOut: product.soldOut,
        },
        quantity,
      );
      showSuccessToast("장바구니에 담겼습니다");
    } catch (err) {
      console.error("장바구니 담기 실패:", err);
      showFailToast("장바구니 담기에 실패했습니다");
    }
  };

  const handleToggleWish = () => {
    setIsWished((prev) => !prev);
    console.log("찜 토글", { productId: id });
  };

  const handleCheckout = () => {
    console.log("결제하기", { productId: id, quantity });
  };

  //리뷰 CRUD — 서버 연동. 작성/수정은 실패 시 throw 하여 폼이 에러 표시
  const handleCreateReview = async (payload) => {
    await createReview(id, payload);
    await reloadReviews();
    showSuccessToast("리뷰가 등록되었습니다");
  };

  const handleUpdateReview = async (reviewId, payload) => {
    await updateReview(reviewId, payload);
    await reloadReviews();
    showSuccessToast("리뷰가 수정되었습니다");
  };

  const handleDeleteReview = async (reviewId) => {
    try {
      await deleteReview(reviewId);
      await reloadReviews();
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
