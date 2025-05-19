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

export const WithPayment: StoryObj<BookItemProps> = {};

WithPayment.args = {
  downloadLink: "https://wongames.com/game/download/21312ndasd",
  paymentInfo: {
    flag: "mastercard",
    img: "/img/master-card.png",
    number: "**** **** **** 4326",
    purchaseDate: "Purchase made on 07/20/2020 at 20:32",
  },
};
