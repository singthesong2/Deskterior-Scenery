const PurchaseBox = ({
  quantity = 1,
  onQuantityChange,
  totalPrice = 0,
  onAddToCart,
  onBuyNow,
  maxQuantity = 99,
  isSubmitting = false,
}) => {
  const safeQty = Math.min(
    maxQuantity,
    Math.max(1, Math.floor(Number(quantity) || 1)),
  );
  const safeTotal = Number(totalPrice) || 0;

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
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 12,
        }}
      >
        <span style={{ fontWeight: "bold" }}>수량</span>
        <div>
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
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 16,
        }}
      >
        <span>총 상품 금액</span>
        <strong style={{ fontSize: 20 }}>
          {safeTotal.toLocaleString("ko-KR")}원
        </strong>
      </div>

      <div style={{ display: "flex", gap: 8 }}>
        <button
          type="button"
          onClick={onAddToCart}
          disabled={isSubmitting}
          style={{ flex: 1, padding: "12px 0" }}
        >
          장바구니
        </button>
        <button
          type="button"
          onClick={onBuyNow}
          disabled={isSubmitting}
          style={{ flex: 1, padding: "12px 0" }}
        >
          바로 구매
        </button>
      </div>
    </div>
  );
};

export default PurchaseBox;
