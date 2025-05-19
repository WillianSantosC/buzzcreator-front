import { Meta, StoryObj } from "@storybook/react";

import FormSignIn from ".";

export default {
  title: "components/Form/FormSignIn",
  component: FormSignIn,
  parameters: {
    layout: "fullscreen",
  },
} as Meta;

export const Default: StoryObj = {
  render: () => (
    <div style={{ width: 300, margin: "auto" }}>
      <FormSignIn />
    </div>
  ),
};
