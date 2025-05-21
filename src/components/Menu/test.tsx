import { fireEvent, render, screen } from "@testing-library/react";
import Menu from ".";

jest.mock("next/link", () => {
  return ({ children }: { children: React.ReactNode }) => children;
});

// eslint-disable-next-line react/display-name
jest.mock("../Logo", () => () => <div data-testid="logo">Logo</div>);

jest.mock("../MediaMatch", () => {
  return ({ children }: { children: React.ReactNode }) => children;
});

describe("<Menu />", () => {
  it("should handle open/close mobile menu", () => {
    render(<Menu />);

    // Open menu
    const openButton = screen.getByLabelText(/open menu/i);
    fireEvent.click(openButton);

    const menuFull = screen.getByRole("img", {
      name: /close menu/i,
    }).parentElement;

    expect(menuFull).toHaveAttribute("aria-hidden", "false");

    // Close menu
    const closeButton = screen.getByLabelText(/close menu/i);
    fireEvent.click(closeButton);

    expect(menuFull).toHaveAttribute("aria-hidden", "true");
  });

  it("should hide/show menu based on isOpen state", () => {
    render(<Menu />);

    const menuFull = screen.getByLabelText(/close menu/i).parentElement;

    expect(menuFull).toHaveAttribute("aria-hidden", "true");

    const openButton = screen.getByLabelText(/open menu/i);
    fireEvent.click(openButton);

    expect(menuFull).toHaveAttribute("aria-hidden", "false");
  });
});
