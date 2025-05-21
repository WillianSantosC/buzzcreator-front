import { useCartStore } from "@/store/cart";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import toast from "react-hot-toast";
import Payment from ".";

jest.mock("react-hot-toast", () => ({
  loading: jest.fn(() => "toast-id"),
  success: jest.fn(),
  error: jest.fn(),
}));

jest.mock("../../store/cart", () => ({
  useCartStore: jest.fn(),
}));

type CartItem = {
  id: number;
  quantidade: number;
};

type CartState = {
  items: CartItem[];
  clearCart: jest.Mock;
};

describe("<Payment />", () => {
  const clearCartMock = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  function setup(cartItems: CartItem[] = []) {
    (useCartStore as unknown as jest.Mock).mockImplementation(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (selector: (state: CartState) => any) => {
        const state: CartState = {
          items: cartItems,
          clearCart: clearCartMock,
        };
        return selector(state);
      },
    );

    render(<Payment />);
  }

  it("should render input and button", () => {
    setup();

    expect(screen.getByPlaceholderText(/digite seu nome/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /finalizar compra/i }),
    ).toBeInTheDocument();
  });

  it("should disable button when name is empty", () => {
    setup();
    const button = screen.getByRole("button", { name: /finalizar compra/i });
    expect(button).toBeDisabled();
  });

  it("should enable button when name is typed", () => {
    setup();
    const input = screen.getByPlaceholderText(/digite seu nome/i);
    const button = screen.getByRole("button", { name: /finalizar compra/i });

    fireEvent.change(input, { target: { value: "John Doe" } });

    expect(button).toBeEnabled();
  });

  it("should show error toast if cart is empty", async () => {
    setup([]);

    const input = screen.getByPlaceholderText(/digite seu nome/i);
    const button = screen.getByRole("button", { name: /finalizar compra/i });

    fireEvent.change(input, { target: { value: "John Doe" } });
    fireEvent.click(button);

    await waitFor(() => {
      expect(toast.loading).toHaveBeenCalledWith("Enviando...");
      expect(toast.error).toHaveBeenCalledWith("Carrinho vazio", {
        id: "toast-id",
      });
    });
  });

  it("should process payment successfully", async () => {
    setup([
      { id: 1, quantidade: 2 },
      { id: 2, quantidade: 1 },
    ]);

    global.fetch = jest
      .fn()
      .mockResolvedValueOnce({
        ok: true,
        json: async () => ({ id: "order-id" }),
      })

      .mockResolvedValueOnce({
        ok: true,
      });

    const input = screen.getByPlaceholderText(/digite seu nome/i);
    const button = screen.getByRole("button", { name: /finalizar compra/i });

    fireEvent.change(input, { target: { value: "Jane Doe" } });
    fireEvent.click(button);

    await waitFor(() => {
      expect(toast.loading).toHaveBeenCalledWith("Enviando...");
    });

    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledTimes(2);

      const firstCallBody = JSON.parse(
        (global.fetch as jest.Mock).mock.calls[0][1]?.body,
      );
      expect(firstCallBody).toEqual({
        cliente: "Jane Doe",
        itens: [
          { bookId: 1, quantidade: 2 },
          { bookId: 2, quantidade: 1 },
        ],
      });

      expect(toast.success).toHaveBeenCalledWith(
        "Compra finalizada com sucesso!",
        { id: "toast-id" },
      );

      expect(clearCartMock).toHaveBeenCalled();
      expect(input).toHaveValue("");
    });
  });

  it("should handle error on create order", async () => {
    setup([{ id: 1, quantidade: 1 }]);

    global.fetch = jest.fn().mockResolvedValueOnce({ ok: false });

    const input = screen.getByPlaceholderText(/digite seu nome/i);
    const button = screen.getByRole("button", { name: /finalizar compra/i });

    fireEvent.change(input, { target: { value: "Jane Doe" } });
    fireEvent.click(button);

    await waitFor(() => {
      expect(toast.error).toHaveBeenCalledWith("Erro ao criar pedido", {
        id: "toast-id",
      });
    });
  });

  it("should handle error on update order", async () => {
    setup([{ id: 1, quantidade: 1 }]);

    global.fetch = jest
      .fn()
      // create order ok
      .mockResolvedValueOnce({
        ok: true,
        json: async () => ({ id: "order-id" }),
      })
      // update order fails
      .mockResolvedValueOnce({
        ok: false,
      });

    const input = screen.getByPlaceholderText(/digite seu nome/i);
    const button = screen.getByRole("button", { name: /finalizar compra/i });

    fireEvent.change(input, { target: { value: "Jane Doe" } });
    fireEvent.click(button);

    await waitFor(() => {
      expect(toast.error).toHaveBeenCalledWith(
        expect.stringContaining("Erro"),
        { id: "toast-id" },
      );
    });
  });

  it("should handle fetch exception", async () => {
    setup([{ id: 1, quantidade: 1 }]);

    global.fetch = jest.fn(() => {
      throw new Error("Fetch failed");
    });

    const input = screen.getByPlaceholderText(/digite seu nome/i);
    const button = screen.getByRole("button", { name: /finalizar compra/i });

    fireEvent.change(input, { target: { value: "Jane Doe" } });
    fireEvent.click(button);

    await waitFor(() => {
      expect(toast.error).toHaveBeenCalledWith("Erro ao finalizar a compra", {
        id: "toast-id",
      });
    });
  });
});
