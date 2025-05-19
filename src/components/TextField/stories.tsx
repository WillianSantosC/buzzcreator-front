import { Meta, StoryObj } from "@storybook/react";
import { MdOutlineEmail } from "react-icons/md";

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
    icon: <MdOutlineEmail />,
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
  args: { error: "Ops...something is wrong" },
  render: (args) => (
    <div style={{ maxWidth: 300, padding: 15 }}>
      <TextField {...args} />
    </div>
  ),
};
