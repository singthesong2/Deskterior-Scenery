import { useState } from "react";
import { BasketIcon, HeartIcon } from "../icons/Icons";

const ProductCard = ({ product, onAddToCart, onToggleLike }) => {
  const [liked, setLiked] = useState(!!product.liked);

  const safeRating = Math.min(5, Math.max(0, Number(product.rating) || 0));
  const safeCount = Number(product.reviewCount) || 0;
  const safePrice = Number(product.price) || 0;

  const handleToggleLike = () => {
    setLiked((prev) => !prev);
    onToggleLike?.(product.id);
  };

  return (
    <div style={{ textAlign: "left" }}>
      <div
        style={{
          width: "100%",
          aspectRatio: "1 / 1",
          background: "#e9e5db",
          overflow: "hidden",
        }}
      >
        {product.imageUrl && (
          <img
            src={product.imageUrl}
            alt={product.name}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        )}
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          marginTop: 12,
        }}
      >
        <strong style={{ fontSize: 15 }}>{product.name}</strong>
        <div style={{ display: "flex", gap: 10, color: "#0d0c0a" }}>
          <BasketIcon
            style={{ cursor: "pointer" }}
            onClick={() => onAddToCart?.(product.id)}
          />
          <HeartIcon
            filled={liked}
            style={{ cursor: "pointer" }}
            onClick={handleToggleLike}
          />
        </div>
      </div>

      <p style={{ fontSize: 14, color: "#4a463f", margin: "4px 0" }}>
        ₩ {safePrice.toLocaleString("ko-KR")}
      </p>

      <p style={{ fontSize: 13, color: "#a19d92" }}>
        <span style={{ color: "#e08a3c" }}>★</span> {safeRating.toFixed(1)}(
        {safeCount})
      </p>
    </div>
  );
};

export default ProductCard;
