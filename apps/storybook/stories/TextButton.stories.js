import { fn } from "@storybook/test";
import { TextButton } from "stark-lib";
import "remixicon/fonts/remixicon.css";

const meta = {
  title: "Inputs/Buttons/Text Button",
  component: TextButton,
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
        defaultValue: { summary: "default" },
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
    leadingIcon: {
      description:
        "A React element used as an icon for this button, no icon is provided by default",
      control: false,
    },
    trailingIcon: {
      description:
        "A React element used as an icon for this button, no icon is provided by default",
      control: false,
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

export const Default = {
  args: {
    intent: "default",
  },
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
  parameters: {
    controls: {
      include: ["label", "size"],
    },
  },
  args: {
    size: "large",
    label: "Button",
    intent: "default",
  },
};

export const Status = {
  parameters: {
    controls: {
      include: ["intent", "disabled", "loading"],
    },
  },
  args: {
    label: "Button",
    intent: "default",
  },
};

export const LeadingIcon = {
  args: {
    label: "Button",
    intent: "default",
  },
  render: ({ ...args }) => (
    <TextButton {...args} leadingIcon={<i class="ri-user-fill"></i>} />
  ),
};

export const TrailingIcon = {
  args: {
    label: "Button",
    intent: "default",
  },
  render: ({ ...args }) => (
    <TextButton {...args} trailingIcon={<i class="ri-arrow-right-line"></i>} />
  ),
};

export const IconOnBothSides = {
  args: {
    label: "Button",
    intent: "default",
  },
  render: ({ ...args }) => (
    <TextButton
      {...args}
      trailingIcon={<i class="ri-arrow-right-line"></i>}
      leadingIcon={<i class="ri-user-fill"></i>}
    />
  ),
};

export default meta;
