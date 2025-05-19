import { Meta, StoryObj } from "@storybook/react";

import Games, { GamesTemplateProps } from ".";

import { items } from "./mock";

export default {
  title: "pages/Games",
  component: Games,
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "won-dark",
    },
  },
  args: { ...items },
} as Meta;

export const Default: StoryObj<GamesTemplateProps> = {};
