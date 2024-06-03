import { fn } from "@storybook/test";
import { IconButton } from "stark-lib";
import "remixicon/fonts/remixicon.css";

const meta = {
  title: "Inputs/Buttons/Icon Button",
  component: IconButton,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    icon: {
      description:
        "A React element used as an icon for this button, no icon is provided by default",
      control: false,
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
    intent: "default",
    onClick: fn(),
  },
};

const IconButtonTemplate = {
  render: ({ ...args }) => (
    <IconButton {...args} icon={<i class="ri-user-fill"></i>} />
  ),
};

export const Default = {
  args: {
    intent: "default",
  },
  ...IconButtonTemplate,
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
  ...IconButtonTemplate,
};

export const Status = {
  parameters: {
    controls: {
      include: ["intent", "disabled", "loading"],
    },
  },
  args: {
    intent: "default",
  },
  ...IconButtonTemplate,
};

export default meta;
