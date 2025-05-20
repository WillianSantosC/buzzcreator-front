import { Meta, StoryObj } from "@storybook/react";

import Payment from ".";

export default {
  title: "components/Payment",
  component: Payment,
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

export const Default: StoryObj = {};
