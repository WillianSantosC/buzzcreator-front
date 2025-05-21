import { CartListProps } from "@/components/CartList";
import Admin from "@/pages/Admin";

async function getCartPageData(): Promise<Pick<CartListProps, "items">> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/book`, {
      cache: "no-store",
    });

    if (!res.ok) {
      return { items: [] };
    }

    const items = await res.json();

    return { items };
  } catch {
    return { items: [] };
  }
}

export default async function AdminPage() {
  const props = await getCartPageData();
  return <Admin fallbackData={props.items} />;
}
