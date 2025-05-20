import { CartListProps } from "@/components/CartList";
import Admin from "@/pages/Admin";

import { item as itemsMock } from "@/components/CartList/mock";

function getCartPageData() {
  const output = {
    items: itemsMock,
  };

  return output;
}

export default function AdminPage() {
  const props: Pick<CartListProps, "items"> = getCartPageData();
  return <Admin {...props} />;
}
