import { Meta, StoryObj } from "@storybook/react";

import GameCard, { GameCardProps } from ".";

export default {
  title: "components/GameCard",
  component: GameCard,
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "won-dark",
    },
  },
  args: {
    title: "Population Zero",
    developer: "Rockstar Games",
    img: "https://shared.steamstatic.com/store_item_assets/steam/apps/1239430/header.jpg?t=1635865376",
    price: "R$ 235,00",
    promotionalPrice: "R$ 200,00",
  },
  argTypes: {
    onFav: { action: "clicked" },
    ribbon: { type: "string" },
  },
} as Meta;

export const Default: StoryObj<GameCardProps> = {
  render: (args) => (
    <div style={{ width: "30rem" }}>
      <GameCard {...args} />
    </div>
  ),
};

export const WithRibbon: StoryObj<GameCardProps> = {
  args: {
    ribbon: "20% OFF",
    ribbonSize: "small",
    ribbonColor: "primary",
  },
  render: (args) => (
    <div style={{ width: "30rem" }}>
      <GameCard {...args} />
    </div>
  ),
};
