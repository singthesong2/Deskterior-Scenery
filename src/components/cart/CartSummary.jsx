const CartSummary = ({ totalPrice }) => {
  return (
    <div
      style={{
        marginTop: "20px",
        borderTop: "2px solid black",
        paddingTop: "10px",
      }}
    >
      <strong>총 결제 예정 금액: </strong>
      <span>{totalPrice.toLocaleString()}원</span>
      <div style={{ marginTop: "10px" }}>
        <button>결제하기</button>
      </div>
    </div>
  );
};

export default CartSummary;
