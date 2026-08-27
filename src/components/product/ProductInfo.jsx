const ProductInfo = ({
  name,
  rating = 0,
  reviewCount = 0,
  price = 0,
  description = "",
}) => {
  const safeRating = Math.min(5, Math.max(0, Number(rating) || 0));
  const safePrice = Number(price) || 0;
  const safeCount = Number(reviewCount) || 0;

  const filled = Math.round(safeRating);
  const stars = "★".repeat(filled) + "☆".repeat(5 - filled);

  return (
    <div style={{ borderBottom: "1px solid #eee", paddingBottom: 16 }}>
      <h1 style={{ fontSize: 26, margin: "0 0 8px" }}>{name}</h1>

      <p style={{ color: "#888", fontSize: 14, marginBottom: 12 }}>
        <span aria-label={`5점 만점에 ${safeRating.toFixed(1)}점`}>
          {stars}
        </span>{" "}
        {safeRating.toFixed(1)} · 리뷰 {safeCount.toLocaleString("ko-KR")}개
      </p>

      <strong style={{ fontSize: 24 }}>
        {safePrice.toLocaleString("ko-KR")}원
      </strong>

      <p style={{ marginTop: 12, lineHeight: 1.7, whiteSpace: "pre-line" }}>
        {description}
      </p>
    </div>
  );
};

export default ProductInfo;
