import { fn } from "@storybook/test";
import { Button } from "stark-lib";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Inputs/Button",
  component: Button,
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
    intent: {
      description: "Set what this button's intent is",
      options: ["default", "primary", "info", "success", "warning", "danger"],
      control: { type: "select" },
      table: {
        type: { summary: ["string"] },
        defaultValue: { summary: "default", detail: "This is a detail" },
      },
    },
    size: {
      description: "Set how big this button is",
      options: ["default", "small", "large"],
      desription: "Test",
      control: { type: "select" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
      },
    },
    fullWidth: {
      description: "Have this button take up the whole space",
      control: { type: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
      },
    },
    disabled: {
      description: "Disable this button to prevent interactions",
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
    attached: {
      description: "Used to nest button in other components",
      control: { type: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
      },
    },
  },
  args: {
    label: "Button",
    intent: "default",
    onClick: fn(),
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default = {
  args: {
    intent: "default",
  },
  // parameters: {
  //   controls: {
  //     include: ["label"],
  //   },
  // },
};

export const Intent = {
  args: {
    intent: "primary",
  },
  parameters: {
    controls: {
      include: ["label", "intent"],
    },
  },
};

export const Size = {
  args: {
    size: "large",
    label: "Button",
    intent: "default",
  },
  // parameters: {
  //   controls: {
  //     include: ["label", "intent", "size"],
  //   },
  // },
};

export default meta;
