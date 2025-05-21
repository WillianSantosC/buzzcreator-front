import { create } from "zustand";
import { persist } from "zustand/middleware";

export type CartItem = {
  id: number;
  titulo: string;
  preco: number;
  imagem: string;
  estoque: number;
  quantidade: number;
};

type CartStore = {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
  total: () => number;
};

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (item) => {
        const existing = get().items.find((i) => i.id === item.id);
        if (existing) {
          set({
            items: get().items.map((i) =>
              i.id === item.id
                ? { ...i, quantidade: i.quantidade + item.quantidade }
                : i,
            ),
          });
        } else {
          set({ items: [...get().items, item] });
        }
      },
      removeItem: (id) => {
        set({ items: get().items.filter((i) => i.id !== id) });
      },
      updateQuantity: (id, quantity) => {
        if (quantity <= 0) {
          get().removeItem(id);
        } else {
          set({
            items: get().items.map((i) =>
              i.id === id ? { ...i, quantidade: quantity } : i,
            ),
          });
        }
      },
      clearCart: () => set({ items: [] }),
      total: () =>
        get().items.reduce(
          (acc, item) => acc + item.preco * item.quantidade,
          0,
        ),
    }),
    {
      name: "cart-storage", // chave do localStorage
    },
  ),
);
