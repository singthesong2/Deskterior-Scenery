const CartItem = ({
  item,
  isChecked,
  onToggleCheck,
  onIncrease,
  onDecrease,
  onDelete,
}) => {
  return (
    <div>
      {/* 1. 개별 체크박스 */}
      <input
        type="checkbox"
        checked={isChecked}
        onChange={() => onToggleCheck(item.id)}
      />

      {/* 2. 이미지 */}
      <img src={item.imageUrl} alt={item.name} width="100" height="100" />

      {/* 3. 상품 정보 */}
      <div>
        <h4>{item.name}</h4>
        <p>{item.price.toLocaleString()}원</p>
      </div>

      {/* 4. 수량 조절 버튼 */}
      <div>
        <button onClick={() => onDecrease(item.id)}>-</button>
        <span>{item.quantity}</span>
        <button onClick={() => onIncrease(item.id)}>+</button>
      </div>

      {/* 5. 합계 금액 (단가 * 수량) */}
      <div>
        <strong>{(item.price * item.quantity).toLocaleString()}원</strong>
      </div>

      {/* 6. 삭제 버튼 */}
      <button onClick={() => onDelete(item.id)}>삭제</button>
    </div>
  );
};

export default CartItem;
