import { Stack } from "stark-lib";
import { Text } from "stark-lib";
import { Button } from "stark-lib";

export default {
  title: "Atoms/Stack",
  component: Stack,
  tags: ["autodocs"],
  argTypes: {
    vertical: {
      description: "Stacks are by default vertical",
      control: false,
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
    },
    horizontal: {
      description: "A flag for horizontal stacks",
      control: "boolean",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    width: {
      description: "Set width for this stack",
      options: ["auto", "full", "fit"],
      control: { type: "select" },
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "auto" },
      },
    },
    gap: {
      description: "Set a gap for items in this stack",
      table: {
        type: { summary: "string" },
        default: { summary: "auto" },
      },
      options: [
        "2px",
        "4px",
        "6px",
        "8px",
        "10px",
        "12px",
        "14px",
        "16px",
        "18px",
        "20px",
        "24px",
        "28px",
        "32px",
        "40px",
        "60px",
      ],
      control: {
        type: "select",
      },
    },
    justify: {
      description: "Justify items in this stack",
      table: {
        type: { summary: "string" },
        default: { summary: "normal" },
      },
      options: ["normal", "end", "start", "center"],
      control: { type: "select" },
    },
    align: {
      description: "Align items in this stack",
      table: {
        type: { summary: "string" },
        default: { summary: "auto" },
      },
      options: ["start", "end", "center", "baseline"],
      control: {
        type: "select",
      },
    },
    distribute: {
      description: "Distribute items in this stack",
      table: {
        type: { summary: "string" },
        default: { summary: "auto" },
      },
      options: ["normal", "between", "around", "evenly", "stretch"],
      control: {
        type: "select",
      },
    },
  },
  args: {
    vertical: true,
    gap: "8px",
  },
};

const StackTemplate = {
  decorators: [
    (Story) => (
      <div style={{ margin: "3em", height: "200px" }}>
        <Story />
      </div>
    ),
  ],
  render: ({ ...args }) => {
    return (
      <Stack {...args} className="h-full">
        <Text size="lead" weight="bold" className="whitespace-nowrap">
          Title card
        </Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quas
          molestias, vitae sit animi enim. Voluptatem libero consectetur
          eligendi commodi.
        </Text>
      </Stack>
    );
  },
};

export const preview = {
  ...StackTemplate,
};

export const direction = {
  args: {
    gap: "4px",
  },
  parameters: {
    controls: {
      include: ["vertical", "horizontal"],
    },
  },
  ...StackTemplate,
};

export const gap = {
  ...StackTemplate,
  parameters: {
    controls: {
      include: ["gap", "vertical", "horizontal"],
    },
  },
};

export const width = {
  parameters: {
    controls: {
      include: ["width"],
    },
  },
  args: {
    horizontal: true,
    width: "auto",
    justify: "center",
    align: "center",
    gap: "8px",
  },
  render: ({ ...args }) => (
    <Stack {...args}>
      <Button label="Login" fullWidth />
      <Button label="Sign up for an account" fullWidth />
    </Stack>
  ),
};

export const positioning = {
  decorators: [
    (Story) => (
      <div style={{ margin: "3em", height: "200px" }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    controls: {
      include: [
        "vertical",
        "horizontal",
        "justify",
        "align",
        "distribute",
        "gap",
      ],
    },
  },
  render: ({ ...args }) => (
    <Stack {...args} className="h-full">
      <Text size="section">Stack Playground</Text>
      <Button label="Login" />
      <Button label="Sign up for an account" />
    </Stack>
  ),
};
