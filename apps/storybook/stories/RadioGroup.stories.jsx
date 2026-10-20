import { useState } from "react";
import { RadioGroup } from "stark-lib";

export default {
  title: "Inputs/RadioGroup",
  component: RadioGroup,
  tags: ["autodocs"],
  args: {
    label: "Email frequency",
    name: "frequency",
    defaultValue: "weekly",
    options: [
      { value: "daily", label: "Daily", helpText: "A digest at the end of each day." },
      { value: "weekly", label: "Weekly", helpText: "One summary every Monday." },
      { value: "never", label: "Never" },
    ],
  },
  parameters: { layout: "padded" },
};

export const Default = {};
export const Horizontal = { args: { horizontal: true, options: [{ value: "daily", label: "Daily" }, { value: "weekly", label: "Weekly" }, { value: "never", label: "Never" }] } };
export const Error = { args: { defaultValue: undefined, error: true, required: true, helpText: "Choose an email frequency." } };
export const Disabled = { args: { disabled: true } };
export const DisabledOption = { args: { options: [{ value: "daily", label: "Daily", disabled: true }, { value: "weekly", label: "Weekly" }, { value: "never", label: "Never" }] } };
export const Controlled = {
  render: function ControlledRadioGroup({ defaultValue, ...args }) {
    const [value, setValue] = useState(defaultValue);
    return <RadioGroup {...args} value={value} onValueChange={setValue} />;
  },
};
