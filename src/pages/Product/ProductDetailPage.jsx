import { useState } from "react";
import { mockProduct } from "../../constants/mockProduct";
import ProductBreadcrumb from "../../components/product/ProductBreadcrumb";
import ProductImageGallery from "../../components/product/ProductImageGallery";
import ProductInfo from "../../components/product/ProductInfo";
import PurchaseBox from "../../components/product/PurchaseBox";
import ProductDetailContent from "../../components/product/ProductDetailContent";
import ReviewSection from "../../components/review/ReviewSection";
import ScrollTopButton from "../../components/common/ScrollTopButton";
import * as S from "../../styles/ProductDetail/ProductDetailPage.styles";

const ProductDetailPage = ({
  product = mockProduct,
  isLoggedIn = false,
  currentUserId = null,
  currentUserName = "",
}) => {
  const [quantity, setQuantity] = useState(1);
  const [isWished, setIsWished] = useState(false);
  const [reviews, setReviews] = useState(product.reviews ?? []);

  // TODO(임시): 로그인 상태 리뷰 CSS 작업용. API 연결 시 이 블록 삭제
  const forceLoggedIn = true;
  const reviewIsLoggedIn = forceLoggedIn || isLoggedIn;
  const reviewUserId = forceLoggedIn ? "me" : currentUserId;

  /* 상품이 바뀌면(라우터로 다른 상세페이지 이동 등) 상품별 state 초기화 */
  const [shownProductId, setShownProductId] = useState(product.id);
  if (product.id !== shownProductId) {
    setShownProductId(product.id);
    setReviews(product.reviews ?? []);
    setQuantity(1);
    setIsWished(false);
  }

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

  /* 리뷰 CRUD — 나중에 reviewsApi 로 교체 */
  const handleCreateReview = ({ rating, content }) => {
    setReviews((prev) => [
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
    setReviews((prev) =>
      prev.map((review) =>
        review.id === id ? { ...review, rating, content } : review,
      ),
    );
  };

  const handleDeleteReview = (id) => {
    setReviews((prev) => prev.filter((review) => review.id !== id));
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
