import Cart, { CartProps } from "@/pages/Cart";

import { item as itemsMock } from "@/components/CartList/mock";

function getCartPageData() {
  const output = {
    items: itemsMock,
    total: "$ 430,00",
  };

  return output;
}

export default function CartPage() {
  const props: CartProps = getCartPageData();

  return <Cart {...props} />;
}
