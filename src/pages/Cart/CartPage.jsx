import React, { useState, useEffect, useCallback, useMemo } from "react";
import { toast } from "react-toastify";
import useCartStore from "../../store/cartStore";
import CartItem from "../../components/cart/CartItem";
import CartSummary from "../../components/cart/CartSummary";
import EmptyCart from "../../components/cart/EmptyCart";
import Modal from "../../components/common/Modal";
import FailToast from "../../components/common/FailToast";
import SuccessToast from "../../components/common/SuccessToast";
import {
  CartContainer,
  TitleWrapper,
  Course,
  PageTitle,
  ActionBar,
  SelectAllLabel,
  SelectAllCheckbox,
  ClearAllButton,
  ItemListSection,
} from "../../styles/CartStyles/CartPage.styles";

// 스토어 함수
const CartPage = () => {
  const {
    cartItems,
    isLoading,
    error,
    fetchCart,
    increaseQuantity,
    decreaseQuantity,
    removeItem,
    clearCart,
  } = useCartStore();

  // 체크박스
  const [checkedItems, setCheckedItems] = useState([]);

  // 최초 서버에서 장바구니 조회
  useEffect(() => {
    fetchCart();
  }, [fetchCart]);

  // 체크 초기화 (cartItems가 로드된 후 1회)
  useEffect(() => {
    if (cartItems.length > 0 && checkedItems.length === 0) {
      setCheckedItems(
        cartItems
          .filter((item) => !item.isSoldOut)
          .map((item) => item.cartItemId),
      );
    }
  }, [cartItems]);

  // 모달
  const [isClearModalOpen, setIsClearModalOpen] = useState(false);

  // 토스트 공통 헬퍼
  const showFailToast = useCallback((message) => {
    toast(<FailToast message={message} />);
  }, []);

  const showSuccessToast = useCallback((message) => {
    toast(<SuccessToast message={message} />);
  }, []);

  // fetchCart 실패 시 토스트로 알림
  useEffect(() => {
    if (error) {
      showFailToast(error);
    }
  }, [error, showFailToast]);

  // 개별 체크박스
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
    const availableItemsCount = cartItems.filter(
      (item) => !item.isSoldOut,
    ).length;
    return (
      availableItemsCount > 0 && availableItemsCount === checkedItems.length
    );
  }, [cartItems, checkedItems]);

  // 전체 선택 체크박스
  const handleToggleAllCheck = useCallback(() => {
    if (isAllChecked) {
      setCheckedItems([]);
    } else {
      const availableItemIds = cartItems
        .filter((item) => !item.isSoldOut)
        .map((item) => item.cartItemId);
      setCheckedItems(availableItemIds);
    }
  }, [isAllChecked, cartItems]);

  // 개별 삭제 (서버 반영 후 체크 목록에서도 제거)
  const handleDelete = useCallback(
    async (id) => {
      try {
        await removeItem(id);
        setCheckedItems((prevChecked) =>
          prevChecked.filter((itemId) => itemId !== id),
        );
        showSuccessToast("상품이 삭제되었습니다.");
      } catch (err) {
        showFailToast(err.message || "삭제에 실패했습니다.");
      }
    },
    [removeItem, showFailToast, showSuccessToast],
  );

  // 전체 삭제 후 모달창도 닫음
  const confirmClearAll = useCallback(async () => {
    try {
      await clearCart();
      setCheckedItems([]);
      showSuccessToast("장바구니가 비워졌습니다.");
    } catch (err) {
      showFailToast(err.message || "전체 삭제에 실패했습니다.");
    } finally {
      setIsClearModalOpen(false);
    }
  }, [clearCart, showFailToast, showSuccessToast]);

  // 수량 증가/감소 (실패 시 알림)
  const handleIncrease = useCallback(
    async (id) => {
      try {
        await increaseQuantity(id);
      } catch (err) {
        showFailToast(err.message || "수량 변경에 실패했습니다.");
      }
    },
    [increaseQuantity, showFailToast],
  );

  const handleDecrease = useCallback(
    async (id) => {
      try {
        await decreaseQuantity(id);
      } catch (err) {
        showFailToast(err.message || "수량 변경에 실패했습니다.");
      }
    },
    [decreaseQuantity, showFailToast],
  );

  // 소계
  const subtotal = useMemo(() => {
    return cartItems
      .filter((item) => checkedItems.includes(item.cartItemId))
      .reduce((sum, item) => sum + item.price * item.quantity, 0);
  }, [cartItems, checkedItems]);

  // 배달비
  const deliveryFee = useMemo(() => {
    if (subtotal === 0) return 0;
    return subtotal >= 80000 ? 0 : 3000;
  }, [subtotal]);

  // 총합
  const total = subtotal + deliveryFee;

  // 모든 상품이 품절인지 확인
  const isAllSoldOut = useMemo(() => {
    return cartItems.length > 0 && cartItems.every((item) => item.isSoldOut);
  }, [cartItems]);

  if (isLoading) {
    return (
      <CartContainer>
        <TitleWrapper>
          <Course>Home &gt; Cart</Course>
          <PageTitle>Cart</PageTitle>
        </TitleWrapper>
        <div>불러오는 중...</div>
      </CartContainer>
    );
  }

  return (
    <CartContainer>
      <TitleWrapper>
        <Course>Home &gt; Cart</Course>
        <PageTitle>Cart</PageTitle>
      </TitleWrapper>

      {cartItems.length > 0 && (
        <ActionBar>
          <SelectAllLabel>
            <SelectAllCheckbox
              type="checkbox"
              checked={isAllChecked}
              onChange={handleToggleAllCheck}
            />
            Selected All
          </SelectAllLabel>

          <ClearAllButton onClick={() => setIsClearModalOpen(true)}>
            All Delete
          </ClearAllButton>
        </ActionBar>
      )}

      {cartItems.length === 0 ? (
        <EmptyCart />
      ) : (
        <div>
          <ItemListSection>
            {cartItems.map((item) => (
              <CartItem
                key={item.cartItemId}
                item={item}
                isChecked={checkedItems.includes(item.cartItemId)}
                onToggleCheck={handleToggleCheck}
                onIncrease={handleIncrease}
                onDecrease={handleDecrease}
                onDelete={handleDelete}
              />
            ))}
          </ItemListSection>

          <CartSummary
            subtotal={subtotal}
            deliveryFee={deliveryFee}
            total={total}
            isAllSoldOut={isAllSoldOut}
          />
        </div>
      )}
      {isClearModalOpen && (
        <Modal
          title="All Delete?"
          description="정말 모두 지우시겠습니까?"
          confirmText="Delete"
          onClose={() => setIsClearModalOpen(false)}
          onConfirm={confirmClearAll}
        />
      )}
    </CartContainer>
  );
};

export default CartPage;
