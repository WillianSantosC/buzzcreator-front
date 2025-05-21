import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import BookItem, { BookItemProps } from ".";

// Mock da store Zustand
jest.mock("../../store/cart", () => ({
  useCartStore: jest.fn(),
}));

import { useCartStore } from "@/store/cart";

const mockUpdateQuantity = jest.fn();
const mockRemoveItem = jest.fn();

const props: BookItemProps = {
  id: 1,
  imagem: "/img/books.jpg",
  titulo: "The Pragmatic Programmer",
  estoque: 5,
  preco: 120,
  remove: true,
};

describe("<BookItem />", () => {
  beforeEach(() => {
    jest.clearAllMocks();

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (useCartStore as unknown as jest.Mock).mockImplementation((selector: any) =>
      selector({
        items: [{ id: props.id, quantidade: 2 }],
        updateQuantity: mockUpdateQuantity,
        removeItem: mockRemoveItem,
      }),
    );
  });

  it("should render the book image with correct alt text", () => {
    render(<BookItem {...props} />);
    const image = screen.getByRole("img", {
      name: /the pragmatic programmer/i,
    });
    expect(image).toHaveAttribute("src", props.imagem);
  });

  it("should render the book title", () => {
    render(<BookItem {...props} />);
    expect(screen.getByText(/the pragmatic programmer/i)).toBeInTheDocument();
  });

  it("should render quantity and increment/decrement buttons", () => {
    render(<BookItem {...props} />);

    expect(screen.getByText("2")).toBeInTheDocument(); // quantidade mockada

    const incrementButton = screen.getByText("+");
    const decrementButton = screen.getByText("-");

    expect(incrementButton).toBeInTheDocument();
    expect(decrementButton).toBeInTheDocument();
  });

  it("should call updateQuantity when increment button is clicked", () => {
    render(<BookItem {...props} />);
    const incrementButton = screen.getByText("+");
    fireEvent.click(incrementButton);
    expect(mockUpdateQuantity).toHaveBeenCalledWith(props.id, 3); // quantidade mockada: 2 + 1
  });

  it("should call updateQuantity when decrement button is clicked", () => {
    render(<BookItem {...props} />);
    const decrementButton = screen.getByText("-");
    fireEvent.click(decrementButton);
    expect(mockUpdateQuantity).toHaveBeenCalledWith(props.id, 1); // quantidade mockada: 2 - 1
  });

  it("should call removeItem when trash icon is clicked", () => {
    render(<BookItem {...props} />);
    const deleteIcon = screen.getByRole("img", { name: /delete/i });
    fireEvent.click(deleteIcon);
    expect(mockRemoveItem).toHaveBeenCalledWith(props.id);
  });

  it("should not render controls when remove is false", () => {
    render(<BookItem {...props} remove={false} />);
    expect(screen.queryByText("+")).not.toBeInTheDocument();
    expect(screen.queryByText("-")).not.toBeInTheDocument();
    expect(
      screen.queryByRole("img", { name: /delete/i }),
    ).not.toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const { container } = render(<BookItem {...props} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
