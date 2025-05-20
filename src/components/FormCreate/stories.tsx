import { Meta, StoryObj } from "@storybook/react";

import FormCreate from ".";

export default {
  title: "components/Form/FormCreate",
  component: FormCreate,
  parameters: {
    layout: "fullscreen",
  },
} as Meta;

export const Default: StoryObj = {
  render: () => (
    <div style={{ width: 300, margin: "auto" }}>
      <FormCreate />
    </div>
  ),
};
