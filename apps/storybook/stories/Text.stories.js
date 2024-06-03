import { Text } from "stark-lib";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: "Molecules/Text",
  component: Text,
  parameters: {
    layout: "centered",
  },
  argsTypes: {
    size: {
      options: ["body", "body-large", "caption", "lead", "section", "title"],
      control: { type: "select" },
    },
    weight: {
      options: ["normal", "medium", "semibold", "bold"],
      control: { type: "select" },
    },
    leading: {
      options: ["monoline", "tight", "relaxed", "loose"],
      control: { type: "select" },
    },
  },
  tags: ["autodocs"],
};

export const Bold = {
  args: {
    size: "body",
    weight: "bold",
    children: "Text",
  },
};

export const Body = {
  args: {
    size: "body",
    children: "Text",
  },
};

export const Title = {
  args: {
    size: "title",
    children: "Title",
  },
};
