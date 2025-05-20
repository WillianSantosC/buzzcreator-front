import { Meta, StoryObj } from "@storybook/react";

import PaymentOptions, { PaymentOptionsProps } from ".";

import { item as cardsMock } from "./mock";

export default {
  title: "components/PaymentOptions",
  component: PaymentOptions,
  args: {
    cards: cardsMock,
  },
  argTypes: {
    handlePayment: {
      action: "clicked",
    },
  },
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "won-dark",
    },
  },
} as Meta;

export const Default: StoryObj<PaymentOptionsProps> = {
  render: (args) => (
    <div style={{ padding: 16, maxWidth: 400 }}>
      <PaymentOptions {...args} />
    </div>
  ),
};
