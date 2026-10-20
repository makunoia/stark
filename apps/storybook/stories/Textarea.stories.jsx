import { Textarea } from "stark-lib";

export default {
  title: "Inputs/Textarea",
  component: Textarea,
  tags: ["autodocs"],
  args: { label: "Bio", placeholder: "Tell us a little about yourself", helpText: "A short introduction for your profile." },
  parameters: { layout: "padded" },
};

export const Default = {};
export const Multiline = { args: { defaultValue: "Product designer\nBuilding thoughtful tools with Stark." } };
export const FullWidth = { args: { fullWidth: true } };
export const Optional = { args: { optional: true } };
export const HiddenLabel = { args: { hideLabel: true } };
export const Error = { args: { error: true, helpText: "Your introduction must be under 500 characters." } };
export const Disabled = { args: { disabled: true, defaultValue: "This profile is managed by your organization." } };
export const ReadOnly = { args: { readOnly: true, defaultValue: "This profile is managed by your organization." } };
