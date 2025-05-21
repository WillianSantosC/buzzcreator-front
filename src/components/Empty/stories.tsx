import { Meta, StoryObj } from "@storybook/react";

import Empty, { EmptyProps } from ".";

export default {
  title: "components/Empty",
  component: Empty,
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "won-dark",
    },
  },
  args: {
    title: "Seu carrinho está vazio",
    description: "Volte para a loja e adicione alguns produtos.",
    hasLink: true,
  },
} as Meta;

export const Default: StoryObj<EmptyProps> = {};
