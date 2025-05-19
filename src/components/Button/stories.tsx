import { Meta, StoryObj } from "@storybook/react";
import { MdOutlineAddShoppingCart } from "react-icons/md";

import Button from ".";

export default {
  title: "components/Button",
  component: Button,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    children: {
      type: "string",
    },
    icon: {
      type: "symbol",
    },
  },
} as Meta;

export const Default: StoryObj = {};

Default.args = {
  children: "Buy Now",
};

export const withIcon: StoryObj = {};

withIcon.args = {
  children: "Buy Now",
  icon: <MdOutlineAddShoppingCart />,
};
