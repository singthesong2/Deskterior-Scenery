import { create } from "zustand";
import { persist } from "zustand/middleware";
import { cartApi } from "../api/cartApi";

const useCartStore = create(
  persist(
    (set, get) => ({
      cartItems: [],
      isLoading: false,
      error: null,

      // 서버에서 장바구니 전체 불러오기 (마운트 시 한 번 호출 필요)
      fetchCart: async () => {
        set({ isLoading: true, error: null });
        try {
          const res = await cartApi.getCart();
          set({ cartItems: res.data, isLoading: false });
        } catch (err) {
          set({ error: err.message, isLoading: false });
        }
      },

      // 상품 담기
      addToCart: async (productId, quantity = 1) => {
        try {
          await cartApi.addToCart(productId, quantity);
          await get().fetchCart(); // cartItemId는 서버가 부여하므로 재조회로 동기화
        } catch (err) {
          set({ error: err.message });
          throw err;
        }
      },

      // 수량 직접 지정
      updateQuantity: async (cartItemId, quantity) => {
        if (quantity < 1) return;
        try {
          await cartApi.updateQuantity(cartItemId, quantity);
          set((state) => ({
            cartItems: state.cartItems.map((item) =>
              item.cartItemId === cartItemId ? { ...item, quantity } : item,
            ),
          }));
        } catch (err) {
          set({ error: err.message });
          throw err;
        }
      },

      // 증가
      increaseQuantity: (cartItemId) => {
        const item = get().cartItems.find((i) => i.cartItemId === cartItemId);
        if (!item) return;
        return get().updateQuantity(cartItemId, item.quantity + 1);
      },

      // 감소
      decreaseQuantity: (cartItemId) => {
        const item = get().cartItems.find((i) => i.cartItemId === cartItemId);
        if (!item || item.quantity <= 1) return;
        return get().updateQuantity(cartItemId, item.quantity - 1);
      },

      // 개별 삭제
      removeItem: async (cartItemId) => {
        try {
          await cartApi.removeItem(cartItemId);
          set((state) => ({
            cartItems: state.cartItems.filter(
              (item) => item.cartItemId !== cartItemId,
            ),
          }));
        } catch (err) {
          set({ error: err.message });
          throw err;
        }
      },

      // 선택 삭제
      removeSelectedItems: async (cartItemIds) => {
        try {
          await cartApi.removeSelectedItems(cartItemIds);
          set((state) => ({
            cartItems: state.cartItems.filter(
              (item) => !cartItemIds.includes(item.cartItemId),
            ),
          }));
        } catch (err) {
          set({ error: err.message });
          throw err;
        }
      },

      // 전체 삭제
      clearCart: async () => {
        try {
          await cartApi.clearCart();
          set({ cartItems: [] });
        } catch (err) {
          set({ error: err.message });
          throw err;
        }
      },
    }),
    {
      name: "cart-storage",
      partialize: (state) => ({ cartItems: state.cartItems }), // isLoading/error는 저장 안 함
    },
  ),
);

export default useCartStore;
