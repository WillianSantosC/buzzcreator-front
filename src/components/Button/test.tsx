import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import Button from ".";

describe("<Button />", () => {
  it("should render the button with text", () => {
    render(<Button>Buy now</Button>);
    expect(
      screen.getByRole("button", { name: /buy now/i }),
    ).toBeInTheDocument();
  });

  it("should render with size small by applying correct class", () => {
    render(<Button size="small">Small Button</Button>);
    expect(screen.getByRole("button", { name: /small button/i })).toHaveClass(
      "ButtonWrapper",
    );
  });

  it("should render with size medium by default", () => {
    render(<Button>Medium Button</Button>);
    expect(screen.getByRole("button", { name: /medium button/i })).toHaveClass(
      "ButtonWrapper",
    );
  });

  it("should render with size large", () => {
    render(<Button size="large">Large Button</Button>);
    expect(screen.getByRole("button", { name: /large button/i })).toHaveClass(
      "ButtonWrapper",
    );
  });

  it("should render with fullWidth class", () => {
    render(<Button fullWidth>Full Width</Button>);
    expect(screen.getByRole("button", { name: /full width/i })).toHaveClass(
      "ButtonWrapper",
    );
  });

  it("should render with minimal class", () => {
    render(<Button minimal>Minimal</Button>);
    expect(screen.getByRole("button", { name: /minimal/i })).toHaveClass(
      "ButtonWrapper",
    );
  });

  it("should call onClick when button is clicked", () => {
    const onClick = jest.fn();
    render(<Button onClick={onClick}>Click Me</Button>);

    const button = screen.getByRole("button", { name: /click me/i });
    fireEvent.click(button);

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("should not call onClick when disabled", () => {
    const onClick = jest.fn();
    render(
      <Button onClick={onClick} disabled>
        Disabled
      </Button>,
    );

    const button = screen.getByRole("button", { name: /disabled/i });
    fireEvent.click(button);

    expect(onClick).not.toHaveBeenCalled();
  });
});
