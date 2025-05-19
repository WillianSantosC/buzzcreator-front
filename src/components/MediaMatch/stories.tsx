import { Meta, StoryObj } from "@storybook/react";

import MediaMatch from ".";

export default {
  title: "components/MediaMatch",
  component: MediaMatch,
  parameters: {
    layout: "fullscreen",
  },
} as Meta;

export const Desktop: StoryObj = {
  render: () => <MediaMatch greaterThan="medium">Only on Desktop</MediaMatch>,
};

Desktop.parameters = {
  viewport: {
    defaultViewport: "ipad12p",
  },
};

export const Mobile: StoryObj = {
  render: () => <MediaMatch lessThan="medium">Only on Mobile</MediaMatch>,
};

Mobile.parameters = {
  viewport: {
    defaultViewport: "mobile1",
  },
};
