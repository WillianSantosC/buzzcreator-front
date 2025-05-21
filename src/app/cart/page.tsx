"use client";

import Cart, { CartProps } from "@/templates/Cart";

import { useCartStore } from "@/store/cart";

export default function CartPage() {
  const items = useCartStore((state) => state.items);
  const total = useCartStore((state) => state.total());

  const props: CartProps = {
    items,
    total: total.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    }),
  };

  return <Cart {...props} />;
}
