import React, { useRef, useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { TextField, Input, Button, RemixIcon } from "stark-lib";
const meta = {
  title: "Inputs/TextField",
  component: TextField,
  subcomponents: { Input },
  tags: ["autodocs"],
  args: { label: "Text field", placeholder: "Enter text", fullWidth: true },
  parameters: {
    docs: {
      description: {
        component:
          "One field implementation: TextField supports text and textarea modes; Input retains its native input ref API. Both accept string/boolean errors, loading, adornments and attached actions.",
      },
    },
  },
} satisfies Meta<typeof TextField>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const Email: Story = {
  args: { type: "email", label: "Email", placeholder: "you@example.com" },
};
export const Password: Story = {
  args: { type: "password", label: "Password", defaultValue: "password" },
};
export const Number: Story = {
  args: { type: "number", label: "Quantity", min: 0 },
};
export const Multiline: Story = {
  args: { type: "textarea", rows: 3, label: "Notes" },
};
export const Optional: Story = { args: { optional: true } };
export const HelpText: Story = { args: { helpText: "Use your work email." } };
export const Error: Story = { args: { error: "Please enter a valid value." } };
export const Disabled: Story = {
  args: { disabled: true, defaultValue: "Unavailable" },
};
export const ReadOnly: Story = {
  args: { readOnly: true, defaultValue: "Read only" },
};
export const Loading: Story = {
  args: { loading: true, defaultValue: "Checking availability" },
};
export const Adornments: Story = {
  args: {
    leadingItem: <RemixIcon name="user-fill" />,
    trailingItem: <RemixIcon name="check-line" />,
  },
};
export const AttachedAction: Story = {
  args: { attachedButton: { label: "Search", remixIcon: "search-line" } },
};
export const LabelAction: Story = {
  render: function Example(args) {
    const [value, setValue] = useState("");
    return (
      <TextField
        {...args}
        value={value}
        onChange={(event) => setValue(event.target.value)}
        labelAction={{ label: "Reset", action: () => setValue("") }}
      />
    );
  },
};
export const InputCompatibility: Story = {
  render: function Example() {
    const ref = useRef<HTMLInputElement>(null);
    return (
      <div className="flex flex-col gap-12px">
        <Input
          ref={ref}
          label="Native input ref"
          fullWidth
          error
          helpText="Boolean errors retain the help text API"
          trailingButton={{ label: "Find" }}
        />
        <Button label="Focus input" onClick={() => ref.current?.focus()} />
      </div>
    );
  },
};
