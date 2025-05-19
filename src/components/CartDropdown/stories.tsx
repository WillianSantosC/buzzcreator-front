import { Meta, StoryObj } from "@storybook/react";

import CartDropdown, { CartDropdownProps } from ".";

import { item } from "../CartList/mock";

export default {
  title: "components/CartDropdown",
  component: CartDropdown,
  args: {
    items: item,
    total: "R$ 300,00",
  },
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "won-dark",
    },
  },
} as Meta;

export const Default: StoryObj<CartDropdownProps> = {
  render: (args) => (
    <div
      style={{
        maxWidth: "98%",
        display: "flex",
        justifyContent: "flex-end",
        paddingTop: "10px",
      }}
    >
      <CartDropdown {...args} />
    </div>
  ),
};

export const Empty: StoryObj<CartDropdownProps> = {
  render: () => (
    <div
      style={{
        maxWidth: "98%",
        display: "flex",
        justifyContent: "flex-end",
        paddingTop: "10px",
      }}
    >
      <CartDropdown />
    </div>
  ),
};
