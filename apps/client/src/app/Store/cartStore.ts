import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { CartStoreActionsType, CartStoreStateType } from '@/types';
import { stat } from 'fs';
import { products } from '../Utils';

const useCartStore = create<CartStoreStateType & CartStoreActionsType>()(
  persist(
    (set) => ({
      cart: [],
      hasHydrated: false,
      addToCart: (product) =>
        set((state) => {
          const existingProductIndex = state.cart.findIndex(
            (p) => p.id === product.id
          );

          if (existingProductIndex !== -1) {
            const updatedCart = [...state.cart];
            updatedCart[existingProductIndex].quantity += product.quantity;
            return { cart: updatedCart };
          }


          return { cart: [...state.cart, { ...product, quantity: product.quantity || 1 }] };
        }),
      removeFromCart: (product) =>
        set((state) => ({
          cart: state.cart.filter((p) => p.id !== product.id),
        })),
      clearCart: () => set({ cart: [] }),
    }),
    {
      name: 'cart',
      storage: createJSONStorage(() => localStorage),
      onRehydrateStorage: () => (state) => {
        if (state) {
          state.hasHydrated = true;
        }
      }
    }
  )
);

export default useCartStore;