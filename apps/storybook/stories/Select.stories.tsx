import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Select, Dropdown } from "stark-lib";
const options = [
  { id: "zero", label: "Zero", value: 0 },
  { id: "one", label: "One", value: 1 },
  { id: "disabled", label: "Unavailable", value: 2, disabled: true },
];
const meta = {
  title: "Inputs/Select",
  component: Select,
  subcomponents: { Dropdown },
  tags: ["autodocs"],
  args: { label: "Choose a number", options },
  parameters: {
    docs: {
      description: {
        component:
          "Select and Dropdown share selection, keyboard navigation and form behavior. Select preserves typed string/number values and onChange; Dropdown retains string values and onValueChange. Select popups share Combobox styling. Multi-select keeps the menu open, with checkable rows, a selection count and a fixed action footer. Selected badges can be hidden with showSelectedBadges.",
      },
    },
  },
} satisfies Meta<typeof Select>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const Multiple: Story = {
  args: { multiple: true, defaultValue: [0, 1] },
};
export const Disabled: Story = { args: { disabled: true } };
export const Error: Story = { args: { error: "Select a number." } };
export const Optional: Story = {
  args: { optional: true, helpText: "You can leave this empty." },
};
export const Controlled: Story = {
  render: function Example(args) {
    const [value, setValue] = useState<string | number | (string | number)[]>(
      0,
    );
    return <Select {...args} value={value} onChange={setValue} />;
  },
};
export const DropdownCompatibility: Story = {
  render: () => (
    <Dropdown
      label="Category"
      options={[
        { value: "home", label: "Home" },
        { value: "work", label: "Work" },
      ]}
      defaultValue="home"
    />
  ),
};
export const RequiredForm: Story = {
  render: () => (
    <form
      onSubmit={(event) => event.preventDefault()}
      className="flex flex-col gap-12px"
    >
      <Select
        label="Required number"
        options={options}
        name="number"
        required
      />
      <button type="submit">Submit</button>
      <button type="reset">Reset</button>
    </form>
  ),
};

export const LongMultiSelect: Story = {
  args: {
    label: "Categories",
    multiple: true,
    defaultValue: [0, 1, 2],
    options: Array.from({ length: 40 }, (_, index) => ({ value: index, label: `Category ${index + 1}`, disabled: index === 3 })),
    helpText: "Choose any categories. Actions remain visible while scrolling.",
  },
  decorators: [Story => <div style={{ width: 300, maxWidth: "100%" }}><Story /></div>],
};
export const WithoutSelectedBadges: Story = {
  args: { multiple: true, defaultValue: [0, 1], showSelectedBadges: false },
  parameters: { docs: { description: { story: "Compact multi-select: the first value and a +N count stay inside the control, with no badges below it." } } },
};
export const CompactFilter: Story = {
  render: () => <Dropdown label="Status" hideLabel multiple showSelectedBadges={false}
    placeholder="All statuses" defaultValue={["active", "draft"]}
    options={[{ label: "Active", value: "active" }, { label: "Draft", value: "draft" }, { label: "Archived", value: "archived" }]} />,
};
