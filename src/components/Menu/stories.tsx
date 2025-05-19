import { Meta, StoryObj } from "@storybook/react";

import Menu from ".";

export default {
  title: "components/Menu",
  component: Menu,
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "won-dark",
    },
  },
} as Meta;

export const Default: StoryObj = {};

export const Logged: StoryObj = {
  args: { username: "John Doe" },
};
