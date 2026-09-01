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

  // 체크박스(체크로시작)
  const [checkedItems, setCheckedItems] = useState(() => {
    return cartItems.map((item) => item.id);
  });

  //  개별 체크박스
  const handleToggleCheck = useCallback((id) => {
    setCheckedItems((prevChecked) => {
      if (prevChecked.includes(id)) {
        return prevChecked.filter((itemId) => itemId !== id);
      } else {
        return [...prevChecked, id];
      }
    });
  }, []);

  // 전체 선택 계산
  const isAllChecked = useMemo(() => {
    if (cartItems.length === 0) return false;
    return cartItems.length === checkedItems.length;
  }, [cartItems, checkedItems]);

  // 전체 선택 체크박스
  const handleToggleAllCheck = useCallback(() => {
    if (isAllChecked) {
      // 다 켜져 있으면 전체 해제
      setCheckedItems([]);
    } else {
      // 전체 선택
      const availableItemIds = cartItems
        .filter((item) => !item.isSoldOut)
        .map((item) => item.id);
      setCheckedItems(availableItemIds);
    }
  }, [isAllChecked, cartItems]);

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

  // 개별 삭제 (체크 돼도 삭제)
  const handleDelete = useCallback((id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    setCheckedItems((prevChecked) =>
      prevChecked.filter((itemId) => itemId !== id),
    );
  }, []);

  // 전체 삭제 (체크 돼도 삭제)
  const handleClearAll = useCallback(() => {
    setCartItems([]);
    setCheckedItems([]);
  }, []);

  // 소계
  const subtotal = useMemo(() => {
    return cartItems
      .filter((item) => checkedItems.includes(item.id))
      .reduce((sum, item) => sum + item.price * item.quantity, 0);
  }, [cartItems, checkedItems]);

  // 배달이여
  const deliveryFee = useMemo(() => {
    if (subtotal === 0) return 0;
    return subtotal >= 80000 ? 0 : 3000;
  }, [subtotal]);

  // 총합
  const total = subtotal + deliveryFee;

  /* 화면 */
  return (
    <div>
      <h1>Cart</h1>

      {cartItems.length > 0 && (
        <div>
          {/* 전체 선택 체크박스 */}
          <label>
            <input
              type="checkbox"
              checked={isAllChecked}
              onChange={handleToggleAllCheck}
            />
            Selected All
          </label>

          {/* 전체 삭제 버튼 */}
          <button onClick={handleClearAll}>Clear All</button>
        </div>
      )}

      {cartItems.length === 0 ? (
        <EmptyCart />
      ) : (
        <div>
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              isChecked={checkedItems.includes(item.id)}
              onToggleCheck={handleToggleCheck}
              onIncrease={handleIncrease}
              onDecrease={handleDecrease}
              onDelete={handleDelete}
            />
          ))}
          <CartSummary
            subtotal={subtotal}
            deliveryFee={deliveryFee}
            total={total}
          />
        </div>
      )}
    </div>
  );
};

export default CartPage;
