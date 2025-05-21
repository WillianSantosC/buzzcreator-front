import { render, screen } from "@testing-library/react";
import FormCreate from ".";

describe("<FormCreate />", () => {
  it("should render all fields and submit button", () => {
    render(<FormCreate />);

    expect(screen.getByPlaceholderText(/título do livro/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/autor do livro/i)).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText(/descrição do livro/i),
    ).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/preço do livro/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/url da imagem/i)).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText(/estoque do livro/i),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: /adicionar/i }),
    ).toBeInTheDocument();
  });
});
