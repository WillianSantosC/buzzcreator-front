import FormSignIn from "@/components/FormSignIn";
import { Meta, StoryObj } from "@storybook/react";

import Auth, { AuthProps } from ".";

export default {
  title: "pages/Auth",
  component: Auth,
  parameters: {
    layout: "fullscreen",
  },
} as Meta;

export const SignIn: StoryObj<AuthProps> = {
  args: { title: "Login" },
  render: (args) => (
    <Auth {...args}>
      <FormSignIn />
    </Auth>
  ),
};
