import { Meta, StoryObj } from "@storybook/react";

import TextField, { TextFieldProps } from ".";

export default {
  title: "components/Form/TextField",
  component: TextField,
  parameters: {
    layout: "fullscreen",
  },
  args: {
    label: "E-mail",
    name: "Email",
    icon: "/img/mail.svg",
    id: "Email",
    initialValue: "",
    placeholder: "john.cage@gmail.com",
  },
  argTypes: {
    onInput: { action: "changed" },
  },
} as Meta;

export const Default: StoryObj<TextFieldProps> = {
  render: (args) => (
    <div style={{ maxWidth: 300, padding: 15 }}>
      <TextField {...args} />
    </div>
  ),
};

export const WithError: StoryObj<TextFieldProps> = {
  args: { error: "Ops... Algo deu errado" },
  render: (args) => (
    <div style={{ maxWidth: 420, padding: 15 }}>
      <TextField {...args} />
    </div>
  ),
};
