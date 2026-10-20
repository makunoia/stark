import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Dropdown } from "stark-lib";
const options = [{ value: "accessories", label: "Accessories" }, { value: "lighting", label: "Lighting" }, { value: "homeware", label: "Homeware" }, { value: "unavailable", label: "Unavailable", disabled: true }];
const meta = {
  title: "Components/Dropdown", component: Dropdown,
  parameters: { layout: "centered", docs: { description: { component: "A Stark form control for single or multiple selections. Single selection uses a Radix listbox; multiple selection uses checkable menu items and stays open until dismissed. Both use Stark Button/TextButton, support native form submission and reset, and update instantly for keyboard and reduced-motion users." } } },
  args: { label: "Category", options, placeholder: "Choose categories" },
} satisfies Meta<typeof Dropdown>;
export default meta;
type Story = StoryObj<typeof meta>;
export const SingleSelect: Story = { args: { placeholder: "Choose a category", defaultValue: "lighting" } };
export const MultiSelect: Story = { args: { multiple: true, defaultValue: ["accessories", "homeware"], helpText: "Select more than one category." } };
export const Required: Story = { args: { required: true, helpText: "A category is required." } };
export const Disabled: Story = { args: { disabled: true, defaultValue: "accessories" } };
export const Invalid: Story = { args: { error: true, helpText: "Choose an available category." } };
export const Empty: Story = { args: { options: [] } };
export const Controlled: Story = { render: function Controlled() {
  const [value, setValue] = useState(["lighting"]);
  return <Dropdown label="Controlled categories" options={options} multiple value={value} onValueChange={setValue} helpText={`Current values: ${value.join(", ") || "none"}`} />;
} };
