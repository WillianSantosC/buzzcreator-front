import { render, screen } from "@testing-library/react";
import Empty from ".";

describe("<Empty />", () => {
  it("should render the title, description and image", () => {
    render(<Empty title="No books" description="No books found" />);

    expect(
      screen.getByRole("heading", { name: /no books/i }),
    ).toBeInTheDocument();

    expect(screen.getByText(/no books found/i)).toBeInTheDocument();

    const image = screen.getByRole("image");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", "/img/livro.png");
    expect(image).toHaveAttribute("alt", "Um livro");
  });

  it("should render the link when hasLink is true", () => {
    render(
      <Empty title="No books" description="No books found" hasLink={true} />,
    );

    const link = screen.getByRole("link", { name: /volte para a loja/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/");
  });

  it("should not render the link when hasLink is false", () => {
    render(<Empty title="No books" description="No books found" />);

    const link = screen.queryByRole("link", { name: /volte para a loja/i });
    expect(link).not.toBeInTheDocument();
  });
});
