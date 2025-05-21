import { Meta, StoryObj } from "@storybook/react";

import BookItem, { BookItemProps } from ".";

export default {
  title: "components/BookItem",
  component: BookItem,
  parameters: {
    layout: "fullscreen",
  },
  args: {
    titulo: "Box das Crianças",
    autor: "JesusCopy",
    imagem:
      "https://images.tcdn.com.br/img/img_prod/400550/box_dia_das_criancas_2037_1_ef071c6ab942531f4bd19842274c3b97.jpg",
    preco: 90,
  },
} as Meta;

export const Default: StoryObj<BookItemProps> = {};

export const WithRemove: StoryObj<BookItemProps> = {
  args: {
    remove: true,
  },
};
