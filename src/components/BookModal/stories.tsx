import { items as mockItems } from "@/components/BookCard/mock";
import { Meta, StoryObj } from "@storybook/react";

import BookModal, { BookModalProps } from ".";

export default {
  title: "components/BookModal",
  component: BookModal,
  parameters: {
    layout: "fullscreen",
  },
  args: {
    items: mockItems,
    isOpen: true,
    setIsOpen: () => {},
    index: 0,
  },
} as Meta;

export const Default: StoryObj<BookModalProps> = {};
