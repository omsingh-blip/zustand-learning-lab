import { create } from "zustand";

export const useCounterStore = create((set) => ({
  
//intial state  
    count: 0,
    

  // Actions
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  incrementBy: (value) => set((state) => ({ count: state.count + value })),
  reset: () => set({ count: 0 }),


}));
