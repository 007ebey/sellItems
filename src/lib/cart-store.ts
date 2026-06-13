"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import { CartItem, Product } from "@/types";

interface CartStore {
  items: CartItem[];
  addItem: (product: Product, quantity?: number, personalization?: Record<string, string>) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  subtotal: () => number;
  total: () => number;
  itemCount: () => number;
}

const SHIPPING_THRESHOLD = 1499;
const SHIPPING_COST = 199;

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],

      addItem: (product, quantity = 1, personalization) => {
        set((state) => {
          const existing = state.items.find((i) => i.product.id === product.id);
          if (existing) {
            return {
              items: state.items.map((i) =>
                i.product.id === product.id
                  ? { ...i, quantity: i.quantity + quantity }
                  : i
              ),
            };
          }
          return { items: [...state.items, { product, quantity, personalization }] };
        });
      },

      removeItem: (productId) => {
        set((state) => ({ items: state.items.filter((i) => i.product.id !== productId) }));
      },

      updateQuantity: (productId, quantity) => {
        if (quantity <= 0) {
          get().removeItem(productId);
          return;
        }
        set((state) => ({
          items: state.items.map((i) =>
            i.product.id === productId ? { ...i, quantity } : i
          ),
        }));
      },

      clearCart: () => set({ items: [] }),

      subtotal: () => {
        return get().items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
      },

      total: () => {
        const sub = get().subtotal();
        const shipping = sub >= SHIPPING_THRESHOLD ? 0 : SHIPPING_COST;
        return sub + shipping;
      },

      itemCount: () => get().items.reduce((sum, i) => sum + i.quantity, 0),
    }),
    { name: "doxora-cart" }
  )
);
