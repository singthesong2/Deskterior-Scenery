import { create } from "zustand";

const useLoadingStore = create((set) => ({
  loadingCount: 0,

  startLoading: () =>
    set((state) => ({
      loadingCount: state.loadingCount + 1,
    })),

  endLoading: () =>
    set((state) => ({
      loadingCount: Math.max(0, state.loadingCount - 1),
    })),
}));

export default useLoadingStore;
