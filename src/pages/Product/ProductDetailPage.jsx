import { useEffect, useState } from "react";
import { mockProduct } from "../../constants/mockProduct";
import ProductBreadcrumb from "../../components/product/ProductBreadcrumb";
import ProductImageGallery from "../../components/product/ProductImageGallery";
import ProductInfo from "../../components/product/ProductInfo";
import PurchaseBox from "../../components/product/PurchaseBox";
import ProductDetailContent from "../../components/product/ProductDetailContent";
import ReviewSection from "../../components/review/ReviewSection";
import ScrollTopButton from "../../components/common/ScrollTopButton";
import * as S from "../../styles/ProductDetail/ProductDetailPage.styles";

// 내가 작성한 리뷰를 새로고침 후에도 유지 (API 연결 전 임시 저장소)
const myReviewsKey = (productId) => `deskterior:my-reviews:${productId}`;

const readMyReviews = (productId) => {
  try {
    const parsed = JSON.parse(localStorage.getItem(myReviewsKey(productId)));
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

const ProductDetailPage = ({
  product = mockProduct,
  isLoggedIn = false,
  currentUserId = null,
  currentUserName = "",
}) => {
  const [quantity, setQuantity] = useState(1);
  const [isWished, setIsWished] = useState(false);

  // 내가 작성한 리뷰(로컬 저장)
  const [myReviews, setMyReviews] = useState(() => readMyReviews(product.id));
  const reviews = [...myReviews, ...(product.reviews ?? [])];

  // TODO(임시): 로그인 상태 리뷰 CSS 작업용. API 연결 시 이 블록 삭제
  const forceLoggedIn = true;
  const reviewIsLoggedIn = forceLoggedIn || isLoggedIn;
  const reviewUserId = forceLoggedIn ? "me" : currentUserId;

  /* 상품이 바뀌면(라우터로 다른 상세페이지 이동 등) 상품별 state 초기화 */
  const [shownProductId, setShownProductId] = useState(product.id);
  if (product.id !== shownProductId) {
    setShownProductId(product.id);
    setMyReviews(readMyReviews(product.id));
    setQuantity(1);
    setIsWished(false);
  }

  // 내 리뷰 변경 시 localStorage 동기화
  useEffect(() => {
    try {
      localStorage.setItem(myReviewsKey(product.id), JSON.stringify(myReviews));
    } catch {
      // 저장 실패(프라이빗 모드·용량 초과)는 무시
    }
  }, [product.id, myReviews]);

  // 목록 등에서 넘어올 때 스크롤이 내려가 있던 위치를 이어받지 않도록 최상단으로
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product.id]);

  /* 별점·리뷰 수는 리뷰 목록에서 실시간 계산 (단일 소스) */
  const reviewCount = reviews.length;
  const averageRating =
    reviewCount === 0
      ? 0
      : reviews.reduce((sum, review) => sum + (review.rating ?? 0), 0) /
        reviewCount;

  /* localStorage("cartItems")에 병합하도록 채울 예정 */
  const handleAddToCart = () => {
    console.log("장바구니 담기", {
      productId: product.id,
      quantity,
      price: product.price,
    });
  };

  /* 나중에 localStorage("wishlist") 또는 API 로 교체 */
  const handleToggleWish = () => {
    setIsWished((prev) => !prev);
    console.log("찜 토글", { productId: product.id });
  };

  /* 나중에 결제 페이지로 이동하도록 교체 */
  const handleCheckout = () => {
    console.log("결제하기", {
      productId: product.id,
      quantity,
      price: product.price,
    });
  };

  /* 리뷰 CRUD — 나중에 reviewsApi 로 교체. 내가 쓴 리뷰만 로컬에서 관리 */
  const handleCreateReview = ({ rating, content }) => {
    setMyReviews((prev) => [
      {
        id: crypto.randomUUID(),
        authorId: reviewUserId, // TODO(임시): API 연결 시 currentUserId 로 원복
        author: currentUserName || "익명",
        rating,
        content,
        date: new Date().toISOString(),
      },
      ...prev,
    ]);
  };

  const handleUpdateReview = (id, { rating, content }) => {
    setMyReviews((prev) =>
      prev.map((review) =>
        review.id === id ? { ...review, rating, content } : review,
      ),
    );
  };

  const handleDeleteReview = (id) => {
    setMyReviews((prev) => prev.filter((review) => review.id !== id));
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
              key={product.id}
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
          key={product.id}
          reviews={reviews}
          isLoggedIn={reviewIsLoggedIn}
          currentUserId={reviewUserId}
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
