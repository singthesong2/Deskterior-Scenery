const CartItem = ({ item, onIncrease, onDecrease, onDelete }) => {
  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        borderBottom: "1px solid #ccc",
        padding: "10px 0",
        alignItems: "center",
      }}
    >
      {/* 이미지 */}
      <img src={item.imageUrl} alt={item.name} width="80" height="80" />

      {/* 정보 */}
      <div style={{ flex: 1 }}>
        <h4>{item.name}</h4>
        <p>{item.price.toLocaleString()}원</p>
      </div>

      {/* 수량 버튼 */}
      <div>
        <button onClick={() => onDecrease(item.id)}>-</button>
        <span style={{ margin: "0 10px" }}>{item.quantity}</span>
        <button onClick={() => onIncrease(item.id)}>+</button>
      </div>

      {/* 금액 (가격 * 수량) */}
      <div>
        <strong>{(item.price * item.quantity).toLocaleString()}원</strong>
      </div>

      {/* 삭제 버튼 */}
      <button onClick={() => onDelete(item.id)}>삭제</button>
    </div>
  );
};

export default CartItem;
