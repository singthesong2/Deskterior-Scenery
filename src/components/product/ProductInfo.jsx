import StarRating from "../common/StarRating";

const ProductInfo = ({
  name,
  category = "",
  rating = 0,
  reviewCount = 0,
  price = 0,
  description = "",
  details = [],
}) => {
  const safeRating = Math.min(5, Math.max(0, Number(rating) || 0));
  const safePrice = Number(price) || 0;
  const safeCount = Number(reviewCount) || 0;

  return (
    <div style={{ borderBottom: "1px solid #eee", paddingBottom: 16 }}>
      {category && <p>{category}</p>}

      <h1 style={{ fontSize: 26, margin: "0 0 8px" }}>{name}</h1>

      <p style={{ color: "#888", fontSize: 14, marginBottom: 12 }}>
        <StarRating value={safeRating} />{" "}
        {safeRating.toFixed(1)} · 리뷰 {safeCount.toLocaleString("ko-KR")}개
      </p>

      <strong style={{ fontSize: 24 }}>
        ₩ {safePrice.toLocaleString("ko-KR")}
      </strong>

      {description && (
        <p style={{ marginTop: 12, lineHeight: 1.7, whiteSpace: "pre-line" }}>
          {description}
        </p>
      )}

      {details.length > 0 && (
        <ul style={{ marginTop: 12, lineHeight: 1.8, paddingLeft: 20 }}>
          {details.map((line, index) => (
            <li key={index}>{line}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductInfo;
