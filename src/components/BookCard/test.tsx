import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import BookCard, { BookCardProps } from ".";

const props: BookCardProps = {
  id: 1,
  titulo: "Clean Code",
  autor: "Robert C. Martin",
  imagem: "/img/books.jpg",
  preco: 99.9,
  descricao: "Um livro sobre boas práticas de programação",
  estoque: 10,
  onClick: jest.fn(),
};

describe("<BookCard />", () => {
  it("should render the book title", () => {
    render(<BookCard {...props} />);
    expect(screen.getByText(/clean code/i)).toBeInTheDocument();
  });

  it("should render the book author", () => {
    render(<BookCard {...props} />);
    expect(screen.getByText(/robert c. martin/i)).toBeInTheDocument();
  });

  it("should render the book image with alt text", () => {
    render(<BookCard {...props} />);
    const image = screen.getByRole("img", { name: /clean code/i });
    expect(image).toHaveAttribute("src", props.imagem);
    expect(image).toHaveAttribute("alt", props.titulo);
  });

  it("should call onClick when clicked", () => {
    render(<BookCard {...props} />);
    const card = screen
      .getByRole("img", { name: /clean code/i })
      .closest("div")!;
    fireEvent.click(card);
    expect(props.onClick).toHaveBeenCalledTimes(1);
  });

  it("matches snapshot", () => {
    const { container } = render(<BookCard {...props} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
