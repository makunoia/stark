import { Text } from "stark-lib";

export default {
  title: "Data Display/Text",
  component: Text,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      description: "String children are styled according to props",
      table: {
        type: { summary: "ReactElement" },
        defaultValue: { summary: "" },
      },
    },
    size: {
      description: "Set how big this text is depending on context",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "body" },
      },
      options: ["body", "body-large", "caption", "lead", "section", "title"],
      control: { type: "select" },
    },
    weight: {
      description: "Set this text's weight is depending on emphasis",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "normal" },
      },
      options: ["normal", "medium", "semibold", "bold"],
      control: { type: "select" },
    },
    leading: {
      description:
        "Set how far apart leading lines are depending on purpose/aesthetic",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "monoline" },
      },
      options: ["monoline", "tight", "relaxed", "loose"],
      control: { type: "select" },
    },
  },
  args: {},
};

const TextTemplate = {
  render: ({ ...args }) => (
    <Text {...args}>{args.children ? args.children : "Lorem Ipsum"}</Text>
  ),
};

export const Default = {
  args: {
    size: "lead",
    weight: "normal",
  },
  ...TextTemplate,
};

export const Weight = {
  parameters: {
    controls: {
      include: ["weight"],
    },
  },
  args: {
    size: "lead",
    weight: "bold",
  },
  ...TextTemplate,
};

export const Size = {
  parameters: {
    controls: {
      include: ["size"],
    },
  },
  args: {
    size: "lead",
  },
  ...TextTemplate,
};

export const Leading = {
  parameters: {
    controls: {
      include: ["size", "leading"],
    },
  },
  argTypes: {
    size: {
      description: "Only applicable to body text",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "body" },
      },
      control: false,
    },
  },
  args: {
    size: "body",
    children:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, vel repellendus, soluta error deserunt dolores cupiditate harum perferendis velit laudantium sit perspiciatis quam. Reprehenderit provident quam placeat officia, laudantium neque?",
  },
  ...TextTemplate,
};

export const Semantics = {
  render: () => <div className="flex flex-col gap-16px">
    <Text as="h2" size="title">Heading semantics, independent size</Text>
    <Text as="p" tone="subtle">Supporting copy uses the same typography scale.</Text>
    <Text as="h6" size="body" weight="semibold">A sixth-level heading with body styling</Text>
  </div>,
};
export const Inheritance = {
  render: () => <div className="text-danger text-caption font-semibold">
    <Text inherit>Inherit size, weight and color from the component.</Text>
    <Text inherit tone="success" className="block">Override just the semantic tone.</Text>
  </div>,
};
export const Composition = {
  render: () => <Text asChild tone="primary" weight="medium"><a href="#typography" className="underline">A styled link, without a wrapper</a></Text>,
};
