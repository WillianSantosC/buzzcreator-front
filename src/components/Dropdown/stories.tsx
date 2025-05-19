import { Meta, StoryObj } from "@storybook/react";

import Dropdown, { DropdownProps } from ".";

export default {
  title: "components/Dropdown",
  component: Dropdown,
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "won-dark",
    },
  },
} as Meta;

export const Default: StoryObj<DropdownProps> = {
  args: {
    title: "Click here",
    children: "content",
  },
};
