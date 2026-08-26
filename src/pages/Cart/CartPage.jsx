import React, { useState, useEffect, useCallback, useMemo } from "react";
import { MockCartData } from "../../constants/mockCart";
import CartItem from "../../components/cart/CartItem";
import CartSummary from "../../components/cart/CartSummary";
import EmptyCart from "../../components/cart/EmptyCart";

const CartPage = () => {
  /* 로컬 스토리지 */
  const [cartItems, setCartItems] = useState(() => {
    try {
      const savedCart = localStorage.getItem("cartItems");
      return savedCart ? JSON.parse(savedCart) : MockCartData;
    } catch {
      return MockCartData;
    }
  });

  /* 로컬 동기화 */
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const handleIncrease = useCallback((id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  }, []);

  /* 1 유지 */
  const handleDecrease = useCallback((id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item,
      ),
    );
  }, []);

  /* 개별 삭제 */
  const handleDelete = useCallback((id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  }, []);

  /* 전체 삭제 */
  const handleClearAll = useCallback(() => {
    setCartItems([]);
  }, []);

  /* 총 금액 */
  const totalPrice = useMemo(() => {
    return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }, [cartItems]);
  /* 화면 */
  return (
    <div>
      <h1>🛒 장바구니</h1>

      {cartItems.length > 0 && (
        <button onClick={handleClearAll}>전체 삭제</button>
      )}

      {cartItems.length === 0 ? (
        <EmptyCart />
      ) : (
        <div>
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onIncrease={handleIncrease}
              onDecrease={handleDecrease}
              onDelete={handleDelete}
            />
          ))}
          <CartSummary totalPrice={totalPrice} />
        </div>
      )}
    </div>
  );
};

export default CartPage;
