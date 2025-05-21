import { fireEvent, render, screen } from "@testing-library/react";
import TextField from ".";

describe("<TextField />", () => {
  it("should render the input with placeholder", () => {
    render(<TextField placeholder="Digite aqui" name="field" />);

    expect(screen.getByPlaceholderText(/digite aqui/i)).toBeInTheDocument();
  });

  it("should render the label when provided", () => {
    render(<TextField label="Nome" name="nome" />);

    expect(screen.getByText("Nome")).toBeInTheDocument();
    expect(screen.getByLabelText("Nome")).toBeInTheDocument();
  });

  it("should render the icon when provided", () => {
    render(<TextField icon="/img/icon.png" name="iconfield" />);

    const icon = screen.getByRole("img", { hidden: true });
    expect(icon).toHaveAttribute("src", "/img/icon.png");
  });

  it("should render the icon in right position", () => {
    render(
      <TextField icon="/img/icon.png" iconPosition="right" name="iconfield" />,
    );

    const icon = screen.getByRole("img", { hidden: true });
    expect(icon).toHaveAttribute("src", "/img/icon.png");
    // Aqui você pode testar se aplica a classe ou estilo esperado
  });

  it("should render with disabled state", () => {
    render(<TextField disabled name="disabledField" />);

    expect(screen.getByRole("textbox")).toBeDisabled();
  });

  it("should render with error message", () => {
    render(<TextField error="Campo obrigatório" name="errorField" />);

    expect(screen.getByText("Campo obrigatório")).toBeInTheDocument();
  });

  it("should call onChange when typing", () => {
    const onChange = jest.fn();

    render(
      <TextField onChange={onChange} name="changeField" placeholder="Digite" />,
    );

    const input = screen.getByPlaceholderText("Digite");
    fireEvent.change(input, { target: { value: "Testando" } });

    expect(onChange).toHaveBeenCalled();
    expect((input as HTMLInputElement).value).toBe("Testando");
  });
});
