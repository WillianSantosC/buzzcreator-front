import { Meta, StoryObj } from "@storybook/react";

import BookCard, { BookCardProps } from ".";

export default {
  title: "components/BookCard",
  component: BookCard,
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
  },
} as Meta;

export const Default: StoryObj<BookCardProps> = {
  render: (args) => (
    <div style={{ width: "30rem", margin: " 0 auto" }}>
      <BookCard {...args} />
    </div>
  ),
};
