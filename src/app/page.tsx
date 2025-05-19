import { items as booksMock } from "@/components/BookCard/mock";
import Home, { BooksTemplateProps } from "@/pages/Home";

function getHomePageData() {
  const output = { books: booksMock };

  return output;
}

export default function Index() {
  const props: BooksTemplateProps = getHomePageData();

  return <Home {...props} />;
}
