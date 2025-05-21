import { Meta, StoryObj } from "@storybook/react";

import LinkButton from ".";

export default {
  title: "components/LinkButton",
  component: LinkButton,
  parameters: {
    layout: "fullscreen",
  },
} as Meta;

export const Default: StoryObj = {};

Default.args = {
  children: "Compre Agora",
  size: "large",
  href: "/link",
};
