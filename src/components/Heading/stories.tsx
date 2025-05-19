import { Meta, StoryObj } from "@storybook/react";

import Heading from ".";

export default {
  title: "components/Heading",
  component: Heading,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    children: {
      type: "string",
    },
  },
} as Meta;

export const Default: StoryObj = {};

Default.args = {
  children: "Most Populars",
};
