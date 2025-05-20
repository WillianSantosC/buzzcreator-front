import { Meta, StoryObj } from "@storybook/react";

import BookItem, { BookItemProps } from ".";

export default {
  title: "components/BookItem",
  component: BookItem,
  parameters: {
    layout: "fullscreen",
  },
  args: {
    img: "https://www.outerspace.com.br/wp-content/uploads/2018/04/reddeadredemption2.jpg",
    title: "Red Dead Redemption 2",
    price: "R$ 215,00",
  },
} as Meta;

export const Default: StoryObj<BookItemProps> = {};
