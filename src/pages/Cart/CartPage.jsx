import { useState, useEffect } from "react";
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
  LeftActionGroup,
  SelectedDeleteButton,
} from "../../styles/CartStyles/CartPage.styles";

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
    removeSelectedItems,
  } = useCartStore();

  const [checkedItems, setCheckedItems] = useState([]);
  const [isClearModalOpen, setIsClearModalOpen] = useState(false);

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

  // 토스트 공통 헬퍼
  const showFailToast = (message) => toast(<FailToast message={message} />);
  const showSuccessToast = (message) =>
    toast(<SuccessToast message={message} />);

  // 에러 발생 시 알림
  useEffect(() => {
    if (error) {
      showFailToast(error);
    }
  }, [error]);

  // 개별 체크박스
  const handleToggleCheck = (id) => {
    setCheckedItems((prevChecked) =>
      prevChecked.includes(id)
        ? prevChecked.filter((itemId) => itemId !== id)
        : [...prevChecked, id],
    );
  };

  // 전체 선택 계산)
  const availableItems = cartItems.filter((item) => !item.isSoldOut);
  const isAllChecked =
    availableItems.length > 0 && availableItems.length === checkedItems.length;

  // 전체 선택 체크박스 동작
  const handleToggleAllCheck = () => {
    if (isAllChecked) {
      setCheckedItems([]);
    } else {
      setCheckedItems(availableItems.map((item) => item.cartItemId));
    }
  };

  // 개별 삭제
  const handleDelete = async (id) => {
    try {
      await removeItem(id);
      setCheckedItems((prev) => prev.filter((itemId) => itemId !== id));
      showSuccessToast("상품이 삭제되었습니다.");
    } catch (err) {
      showFailToast(err.message || "삭제에 실패했습니다.");
    }
  };

  // 선택 삭제
  const handleRemoveSelected = async () => {
    if (checkedItems.length === 0) {
      showFailToast("삭제할 상품을 선택해주세요.");
      return;
    }
    try {
      await removeSelectedItems(checkedItems);
      setCheckedItems([]);
      showSuccessToast("선택한 상품이 삭제되었습니다.");
    } catch (err) {
      showFailToast(err.message || "선택 삭제에 실패했습니다.");
    }
  };

  // 전체 삭제
  const confirmClearAll = async () => {
    try {
      await clearCart();
      setCheckedItems([]);
      showSuccessToast("장바구니가 비워졌습니다.");
    } catch (err) {
      showFailToast(err.message || "전체 삭제에 실패했습니다.");
    } finally {
      setIsClearModalOpen(false);
    }
  };

  // 수량 증가/감소
  const handleIncrease = async (id) => {
    try {
      await increaseQuantity(id);
    } catch (err) {
      showFailToast(err.message || "수량 변경에 실패했습니다.");
    }
  };

  const handleDecrease = async (id) => {
    try {
      await decreaseQuantity(id);
    } catch (err) {
      showFailToast(err.message || "수량 변경에 실패했습니다.");
    }
  };

  // 결제 금액 계산
  const subtotal = cartItems
    .filter((item) => checkedItems.includes(item.cartItemId))
    .reduce((sum, item) => sum + item.price * item.quantity, 0);

  const deliveryFee = subtotal === 0 ? 0 : subtotal >= 80000 ? 0 : 3000;
  const total = subtotal + deliveryFee;

  const isAllSoldOut =
    cartItems.length > 0 && cartItems.every((item) => item.isSoldOut);

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
          <LeftActionGroup>
            <SelectAllLabel>
              <SelectAllCheckbox
                type="checkbox"
                checked={isAllChecked}
                onChange={handleToggleAllCheck}
              />
              Selected All
            </SelectAllLabel>

            <SelectedDeleteButton onClick={handleRemoveSelected}>
              Selected Delete
            </SelectedDeleteButton>
          </LeftActionGroup>

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
