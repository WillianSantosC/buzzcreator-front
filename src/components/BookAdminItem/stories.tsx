import { Meta, StoryObj } from "@storybook/react";

import BookAdminItem, { BookAdminItemProps } from ".";

export default {
  title: "components/BookAdminItem",
  component: BookAdminItem,
  parameters: {
    layout: "fullscreen",
  },
  args: {
    img: "https://www.outerspace.com.br/wp-content/uploads/2018/04/reddeadredemption2.jpg",
    title: "Red Dead Redemption 2",
    price: "R$ 215,00",
  },
} as Meta;

export const Default: StoryObj<BookAdminItemProps> = {};

export const WithPayment: StoryObj<BookAdminItemProps> = {};
