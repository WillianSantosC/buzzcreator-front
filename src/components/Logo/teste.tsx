import { render, screen } from "@testing-library/react";
import Logo from ".";

describe("<Logo />", () => {
  it("should render correctly with base styles", () => {
    const { container } = render(<Logo />);

    const heading = screen.getByRole("heading", { name: /thelibrary/i });
    expect(heading).toBeInTheDocument();

    expect(heading).toHaveStyle({ color: "token(colors.yellow)" });

    const span = container.querySelector("span");
    expect(span).toBeInTheDocument();

    expect(span).toHaveStyle({ color: "token(colors.primary)" });
  });
});
