import { Meta, StoryObj } from "@storybook/react";

import CartIcon, { CartIconProps } from ".";

export default {
  title: "components/CartIcon",
  component: CartIcon,
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "won-dark",
    },
  },
} as Meta;

export const Default: StoryObj = {};

export const withItems: StoryObj<CartIconProps> = {
  args: { quantity: 3 },
  render: (args) => (
    <div style={{ marginTop: "20px" }}>
      <CartIcon {...args} />
    </div>
  ),
};
