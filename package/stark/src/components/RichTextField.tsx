"use client";
import { textStyles } from "../lib/typography.js";
import React, { useEffect, useRef, useId } from "react";
import type Quill from "quill";
import FieldLayout, { type FieldLabelAction } from "./FieldLayout.js";
export interface RichTextFieldProps {
  id?: string;
  label?: string;
  readOnly?: boolean;
  disabled?: boolean;
  optional?: boolean;
  value?: string;
  defaultValue?: string;
  helpText?: string;
  error?: string;
  labelAction?: FieldLabelAction;
  onChange?: (html: string) => void;
}
/** Quill is loaded on the client; importing Stark is safe during server rendering. */
export default function RichTextField({
  id,
  label,
  readOnly,
  disabled,
  optional,
  value,
  defaultValue = "",
  helpText,
  error,
  labelAction,
  onChange,
}: RichTextFieldProps) {
  const generated = useId();
  const fieldId = id ?? generated;
  const host = useRef<HTMLDivElement>(null);
  const editor = useRef<Quill | null>(null);
  const current = useRef({
    value,
    defaultValue,
    onChange,
    readOnly,
    disabled,
    helpText,
    error,
  });
  current.current = {
    value,
    defaultValue,
    onChange,
    readOnly,
    disabled,
    helpText,
    error,
  };
  useEffect(() => {
    let cancelled = false;
    void import("quill").then(({ default: Quill }) => {
      if (cancelled || !host.current) return;
      const target = document.createElement("div");
      host.current.replaceChildren(target);
      const instance = new Quill(target, {
        theme: "snow",
        readOnly: !!(current.current.readOnly || current.current.disabled),
        modules: {
          toolbar: [
            ["bold", "italic", "underline", "strike"],
            [{ list: "ordered" }, { list: "bullet" }],
            ["link", "image"],
          ],
        },
      });
      editor.current = instance;
      const html = current.current.value ?? current.current.defaultValue;
      instance.setContents(instance.clipboard.convert({ html }), "silent");
      instance.root.id = fieldId;
      instance.root.setAttribute("role", "textbox");
      instance.root.setAttribute("aria-multiline", "true");
      instance.root.setAttribute("aria-label", label ?? "Rich text");
      instance.root.setAttribute(
        "aria-invalid",
        String(!!current.current.error),
      );
      if (current.current.helpText || current.current.error)
        instance.root.setAttribute("aria-describedby", `${fieldId}-help`);
      instance.on("text-change", (_delta, _previous, source) => {
        if (source === "user")
          current.current.onChange?.(instance.getSemanticHTML());
      });
    });
    return () => {
      cancelled = true;
      editor.current = null;
      host.current?.replaceChildren();
    };
  }, [fieldId, label]);
  useEffect(() => {
    const instance = editor.current;
    if (
      instance &&
      value !== undefined &&
      value !== instance.getSemanticHTML()
    ) {
      const selection = instance.getSelection();
      instance.setContents(
        instance.clipboard.convert({ html: value }),
        "silent",
      );
      if (selection) instance.setSelection(selection, "silent");
    }
  }, [value]);
  useEffect(() => {
    editor.current?.enable(!readOnly && !disabled);
  }, [readOnly, disabled]);
  useEffect(() => {
    const root = editor.current?.root;
    root?.setAttribute("aria-invalid", String(!!error));
    if (helpText || error)
      root?.setAttribute("aria-describedby", `${fieldId}-help`);
    else root?.removeAttribute("aria-describedby");
  }, [error, helpText, fieldId]);
  return (
    <FieldLayout
      id={fieldId}
      label={label}
      optional={optional}
      helpText={helpText}
      error={error}
      labelAction={labelAction}
    >
      <div
        ref={host}
        className={textStyles({ inherit: true, className: `stark-rich-text rounded-8px overflow-hidden ${error ? "border border-danger" : ""}` })}
      />
    </FieldLayout>
  );
}
