import { Meta, StoryObj } from "@storybook/react";

import BookAdminItem, { BookAdminItemProps } from ".";

export default {
  title: "components/BookAdminItem",
  component: BookAdminItem,
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "won-dark",
    },
  },
  args: {
    titulo: "Box das Crianças",
    autor: "JesusCopy",
    imagem:
      "https://images.tcdn.com.br/img/img_prod/400550/box_dia_das_criancas_2037_1_ef071c6ab942531f4bd19842274c3b97.jpg",
    preco: 90,
    estoque: 20,
  },
} as Meta;

export const Default: StoryObj<BookAdminItemProps> = {};
