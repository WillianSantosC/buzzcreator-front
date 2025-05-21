import { render, screen } from "@testing-library/react";
import LinkButton from ".";

describe("<LinkButton />", () => {
  it("should render the text", () => {
    render(<LinkButton>My Link</LinkButton>);

    expect(screen.getByText(/my link/i)).toBeInTheDocument();
  });

  it("should render with an icon", () => {
    const Icon = <svg data-testid="icon" />;

    render(<LinkButton icon={Icon}>With Icon</LinkButton>);

    expect(screen.getByTestId("icon")).toBeInTheDocument();
  });

  it("should render with href", () => {
    render(<LinkButton href="/about">About</LinkButton>);

    const link = screen.getByRole("link", { name: /about/i });
    expect(link).toHaveAttribute("href", "/about");
  });
});
