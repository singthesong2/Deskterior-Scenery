import { useState } from "react";
import { mockProduct } from "../../constants/mockProduct";
import ProductBreadcrumb from "../../components/product/ProductBreadcrumb";
import ProductImageGallery from "../../components/product/ProductImageGallery";
import ProductInfo from "../../components/product/ProductInfo";
import PurchaseBox from "../../components/product/PurchaseBox";
import ProductDetailContent from "../../components/product/ProductDetailContent";
import ReviewSection from "../../components/review/ReviewSection";

const ProductDetailPage = ({
  product = mockProduct,
  isLoggedIn = false,
  currentUserId = null,
  currentUserName = "",
}) => {
  const [quantity, setQuantity] = useState(1);
  const [isWished, setIsWished] = useState(false);
  const [reviews, setReviews] = useState(product.reviews ?? []);

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

  /* 리뷰 CRUD — 나중에 reviewsApi 로 교체 */
  const handleCreateReview = ({ rating, content }) => {
    setReviews((prev) => [
      {
        id: crypto.randomUUID(),
        authorId: currentUserId,
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
    <div
      style={{
        maxWidth: 1080,
        margin: "0 auto",
        padding: 24,
        textAlign: "left",
      }}
    >
      <ProductBreadcrumb
        category={product.category}
        productName={product.name}
      />

      <div style={{ display: "flex", gap: 40, flexWrap: "wrap" }}>
        <div style={{ flex: "1 1 360px" }}>
          <ProductImageGallery
            key={product.id}
            images={product.images}
            alt={product.name}
          />
        </div>

        <div
          style={{
            flex: "1 1 360px",
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          <ProductInfo
            name={product.name}
            category={product.category}
            soldOut={product.soldOut}
            rating={averageRating}
            reviewCount={reviewCount}
            price={product.price}
            description={product.description}
            details={product.details}
          />
          <PurchaseBox
            quantity={quantity}
            onQuantityChange={setQuantity}
            onAddToCart={handleAddToCart}
            isWished={isWished}
            onToggleWish={handleToggleWish}
          />
        </div>
      </div>

      <ProductDetailContent sections={product.detailSections} />

      <ReviewSection
        key={product.id}
        reviews={reviews}
        isLoggedIn={isLoggedIn}
        currentUserId={currentUserId}
        onCreate={handleCreateReview}
        onUpdate={handleUpdateReview}
        onDelete={handleDeleteReview}
      />
    </div>
  );
};

export default ProductDetailPage;
