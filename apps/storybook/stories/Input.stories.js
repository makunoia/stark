import { Input } from "stark-lib";

export default {
  title: "Inputs/Input",
  component: Input,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    label: {
      description: "Give a brief and meaningful label",
      control: {
        type: "text",
      },
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "Button" },
      },
    },
    type: {
      desription: "Select an appropriate type for your use case",
      options: ["text", "password", "email", "number", "tel", "url"],
      control: {
        type: "select",
      },
    },
    helpText: {
      description: "Provide additional context and guide",
      control: {
        type: "text",
      },
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "This is a help text" },
      },
    },
    fullWidth: {
      description: "Have this input take up the whole space",
      control: { type: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
      },
    },
    disabled: {
      description: "Disable this input to prevent interactions",
      control: { type: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
      },
    },
    loading: {
      description: "Give user system feedback regarding loading",
      control: { type: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
      },
    },
    hideLabel: {
      description: "Hide input label",
      control: { type: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
      },
    },
  },
  args: {
    label: "Input field",
  },
};

export const Default = {
  args: {
    type: "email",
    label: "Input text",
    fullWidth: false,
    disabled: false,
    loading: false,
    hideLabel: false,
  },
};
