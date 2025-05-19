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
    title: "Your wishlist is empty",
    description: "Games added to your wishlist will appear here",
    hasLink: true,
  },
} as Meta;

export const Default: StoryObj<EmptyProps> = {};
