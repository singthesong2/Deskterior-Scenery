import { HeartIcon } from "../icons/Icons";

const PurchaseBox = ({
  quantity = 1,
  onQuantityChange,
  onAddToCart,
  onCheckout,
  isWished = false,
  onToggleWish,
  maxQuantity = 99,
  isSubmitting = false,
}) => {
  const safeQty = Math.min(
    maxQuantity,
    Math.max(1, Math.floor(Number(quantity) || 1)),
  );

  const decrease = () => onQuantityChange(Math.max(1, safeQty - 1));
  const increase = () => onQuantityChange(Math.min(maxQuantity, safeQty + 1));

  const stepperBtn = {
    width: 32,
    height: 32,
    fontSize: 16,
    cursor: "pointer",
  };

  return (
    <div style={{ borderTop: "1px solid #eee", paddingTop: 16 }}>
      <div style={{ marginBottom: 16 }}>
        <button
          type="button"
          onClick={decrease}
          disabled={safeQty <= 1}
          aria-label="수량 감소"
          style={stepperBtn}
        >
          -
        </button>
        <span style={{ margin: "0 12px" }} aria-live="polite">
          {safeQty}
        </span>
        <button
          type="button"
          onClick={increase}
          disabled={safeQty >= maxQuantity}
          aria-label="수량 증가"
          style={stepperBtn}
        >
          +
        </button>
      </div>

      <div style={{ display: "flex", gap: 8 }}>
        <button
          type="button"
          onClick={onAddToCart}
          disabled={isSubmitting}
          style={{ flex: 1, padding: "12px 0" }}
        >
          Add to Cart
        </button>
        <button
          type="button"
          onClick={onToggleWish}
          aria-label={isWished ? "찜 해제" : "찜하기"}
          aria-pressed={isWished}
          style={{ padding: "12px 16px", cursor: "pointer" }}
        >
          <HeartIcon filled={isWished} width={24} height={24} />
        </button>
      </div>

      <button
        type="button"
        onClick={onCheckout}
        disabled={isSubmitting}
        style={{ width: "100%", marginTop: 8, padding: "12px 0", cursor: "pointer" }}
      >
        CheckOut
      </button>
    </div>
  );
};

export default PurchaseBox;
