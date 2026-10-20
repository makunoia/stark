import { Input } from "stark-lib";

export default {
  title: "Inputs/Input",
  component: Input,
  decorators: [
    (Story) => (
      <div style={{ margin: "3em" }}>
        <Story />
      </div>
    ),
  ],
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
      description: "Select an appropriate type for your use case",
      options: ["text", "password", "email", "number", "tel", "url"],
      control: {
        type: "select",
      },
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "text" },
      },
    },
    helpText: {
      description: "Provide additional context and guide",
      control: {
        type: "text",
      },
      table: {
        type: { summary: "string" },
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
    optional: {
      description: "Let the user know if this field is optional",
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
    error: {
      description: "Give user system feedback regarding errors",
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
    fullWidth: true,
    disabled: false,
    loading: false,
    hideLabel: false,
  },
};

export const Password = {
  parameters: {
    controls: {
      include: ["type", "optional"],
    },
  },
  argTypes: {
    optional: {
      description: "A password field is never optional",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: false,
    },
    type: {
      description: "Insert a password field to a form",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "password" },
      },
      control: false,
    },
  },

  args: {
    type: "password",
  },
};

export const withHelpText = {
  args: {
    type: "text",
    label: "Input text",
    helpText: "This is a help text",
    fullWidth: false,
    disabled: false,
    loading: false,
    hideLabel: false,
  },
  parameters: {
    controls: {
      include: ["helpText"],
    },
  },
};

export const hiddenLabel = {
  args: {
    hideLabel: true,
  },
  parameters: {
    controls: {
      include: ["hasLabel"],
    },
  },
};

export const fullWidth = {
  args: {
    type: "text",
    label: "Input text",
    fullWidth: true,
  },
  parameters: {
    controls: {
      include: ["label", "fullWidth"],
    },
  },
};

export const status = {
  parameters: {
    controls: {
      include: ["loading", "error", "disabled"],
    },
  },
};
