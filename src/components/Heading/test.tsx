import { render, screen } from "@testing-library/react";
import Heading from ".";

describe("<Heading />", () => {
  it("should render with default white color", () => {
    render(<Heading>Test Heading</Heading>);
    const heading = screen.getByText(/test heading/i);

    expect(heading).toBeInTheDocument();
  });

  it("should render with black color style", () => {
    const { container } = render(
      <Heading color="black">Black Heading</Heading>,
    );

    expect(container).toBeInTheDocument();

    expect(container).toHaveStyle({ color: "token(colors.black)" });
  });

  it("should render with left line and primary color", () => {
    const { container } = render(
      <Heading lineLeft lineColor="primary">
        Lined Heading
      </Heading>,
    );

    expect(container).toHaveStyle({
      "border-left": "0.7rem solid token(colors.primary)",
    });
  });

  it("should render with bottom line and secondary color", () => {
    const { container } = render(
      <Heading lineBottom lineColor="secondary">
        Bottom Line
      </Heading>,
    );

    expect(container).toHaveStyle({ background: "token(colors.secondary)" });
  });

  it("should render with small size", () => {
    const { container } = render(<Heading size="small">Small Heading</Heading>);

    expect(container).toHaveStyle({ "font-size": "token(font.sizes.medium)" });
  });
});
