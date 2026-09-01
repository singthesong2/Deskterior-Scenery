import Badge from "../common/Badge";

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
      {/* 개별 체크박스 */}
      <input
        type="checkbox"
        checked={isChecked}
        onChange={() => onToggleCheck(item.id)}
        disabled={item.isSoldOut}
      />

      {/* 이미지 뺏찌*/}
      <div>
        {item.isSoldOut && <Badge text="Sold out" top="8px" left="8px" />}
        <img src={item.imageUrl} alt={item.name} width="132" height="132" />
      </div>

      {/* 상품 */}
      <div>
        <h4>{item.name}</h4>
        <p>{item.price.toLocaleString()}원</p>
      </div>

      {/* 수량 */}
      <div>
        <button onClick={() => onDecrease(item.id)} disabled={item.isSoldOut}>
          -
        </button>
        <span>{item.quantity}</span>
        <button onClick={() => onIncrease(item.id)} disabled={item.isSoldOut}>
          +
        </button>
      </div>

      {/* 합계 */}
      <div>
        <strong>{(item.price * item.quantity).toLocaleString()}원</strong>
      </div>

      {/* 삭제 */}
      <button onClick={() => onDelete(item.id)}>삭제</button>
    </div>
  );
};

export default CartItem;
