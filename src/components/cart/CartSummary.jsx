const CartSummary = ({ subtotal, deliveryFee, total }) => {
  return (
    <div>
      {/* Subtotal */}
      <div>
        <span>Subtotal</span>
        <span>₩ {subtotal.toLocaleString()}</span>
      </div>

      {/* Delivery fee */}
      <div>
        <span>
          Delivery Fee
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9 2.625C5.47891 2.625 2.625 5.47891 2.625 9C2.625 12.5204 5.47895 15.375 9 15.375C12.5203 15.375 15.375 12.5203 15.375 9C15.375 5.47895 12.5204 2.625 9 2.625ZM1.5 9C1.5 4.85759 4.85759 1.5 9 1.5C13.1416 1.5 16.5 4.85755 16.5 9C16.5 13.1417 13.1417 16.5 9 16.5C4.85755 16.5 1.5 13.1416 1.5 9Z"
              fill="#74766F"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.55884 5.59058V10.0298H8.43384V5.59058H9.55884Z"
              fill="#74766F"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.43378 11.2844H9.56628V12.4094H8.43378V11.2844Z"
              fill="#74766F"
            />
          </svg>
        </span>
        <span>₩ {deliveryFee.toLocaleString()}</span>
      </div>

      {/* Total */}
      <div>
        <strong>Total</strong>
        <strong>₩ {total.toLocaleString()}</strong>
      </div>

      {/* Checkout */}
      <div>
        <button>Checkout</button>
      </div>
    </div>
  );
};

export default CartSummary;
