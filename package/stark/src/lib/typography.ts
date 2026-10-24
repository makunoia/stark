import { cva } from "class-variance-authority";
import { cn } from "./utils.js";

export type TextSize = "body" | "body-large" | "caption" | "lead" | "section" | "title" | "inherit";
export type TextWeight = "normal" | "medium" | "semibold" | "bold" | "inherit";
export type TextLeading = "monoline" | "tight" | "relaxed" | "loose" | "inherit";
export type TextTone = "default" | "subtle" | "inverse" | "primary" | "info" | "success" | "warning" | "danger" | "disabled" | "inherit";
export type TextVariant = "page-body" | "page-title" | "section-title";
export interface TextStyleOptions {
  size?: TextSize;
  weight?: TextWeight;
  leading?: TextLeading;
  tone?: TextTone;
  /** Leave unspecified typography to the parent or semantic component styles. */
  inherit?: boolean;
  variant?: TextVariant;
  className?: string;
}
const variants = cva("", {
  variants: {
    size: { body: "text-body", "body-large": "text-body-large", caption: "text-caption", lead: "text-lead", section: "text-section", title: "text-title", inherit: "" },
    weight: { normal: "font-normal", medium: "font-medium", semibold: "font-semibold", bold: "font-bold", inherit: "" },
    leading: { monoline: "leading-monoline", tight: "leading-tight", relaxed: "leading-relaxed", loose: "leading-loose", inherit: "" },
    tone: { default: "text", subtle: "text-subtle", inverse: "text-oninverse", primary: "text-brand", info: "text-info", success: "text-success", warning: "text-warning", danger: "text-danger", disabled: "text-disabled", inherit: "" },
    variant: { "page-body": "stark-type-page-body", "page-title": "stark-type-page-title", "section-title": "stark-type-section-title" },
  },
});
/** The same typography contract for Text, native form controls and rich content. */
export function textStyles({ size, weight, leading, tone, inherit = false, variant, className }: TextStyleOptions = {}) {
  const contextual = inherit || !!variant;
  return cn(contextual ? "" : "font-sans", variants({
    size: size ?? (contextual ? "inherit" : "body"),
    weight: weight ?? (contextual ? "inherit" : "normal"),
    tone: tone ?? (contextual ? "inherit" : "default"),
    leading, variant,
  }), className);
}
