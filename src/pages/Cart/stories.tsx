import { Meta, StoryObj } from "@storybook/react";

import Cart, { CartProps } from ".";

import { cartPageMock } from "./mock";

export default {
  title: "pages/Cart",
  component: Cart,
  args: { ...cartPageMock },
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "won-dark",
    },
  },
} as Meta;

export const Default: StoryObj<CartProps> = {};
