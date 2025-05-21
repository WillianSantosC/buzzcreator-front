import Home, { BooksTemplateProps } from "@/pages/Home";

async function getHomePageData(): Promise<BooksTemplateProps> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/book`, {
      cache: "no-store",
    });

    if (!res.ok) {
      return { books: [] };
    }

    const books = await res.json();
    return { books };

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return { books: [] };
  }
}

export default async function Index() {
  const props = await getHomePageData();
  return <Home {...props} />;
}
