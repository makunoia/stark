"use client";
import React, {
  forwardRef,
  useEffect,
  useRef,
  useImperativeHandle,
} from "react";
import IMask from "imask";
import TextField, { type TextFieldProps } from "./TextField.js";
export interface MaskedInputProps extends Omit<TextFieldProps, "type"> {
  mask: string;
  type?: "text" | "tel";
  onAccept?: (value: string, unmaskedValue: string) => void;
}
/** Supports the archived 9 (digit), a (letter), and * (alphanumeric) masks. */
const MaskedInput = forwardRef<HTMLInputElement, MaskedInputProps>(
  ({ mask, value, defaultValue, onAccept, ...props }, ref) => {
    const input = useRef<HTMLInputElement>(null);
    const instance = useRef<ReturnType<typeof IMask> | null>(null);
    const accept = useRef(onAccept);
    accept.current = onAccept;
    useImperativeHandle(ref, () => input.current!, []);
    useEffect(() => {
      if (!input.current) return;
      const masked = IMask(input.current, {
        mask,
        definitions: { "9": /[0-9]/, a: /[a-zA-Z]/, "*": /[a-zA-Z0-9]/ },
      });
      instance.current = masked;
      masked.on("accept", () =>
        accept.current?.(masked.value, masked.unmaskedValue),
      );
      return () => {
        masked.destroy();
        instance.current = null;
      };
    }, [mask]);
    useEffect(() => {
      if (value !== undefined && instance.current)
        instance.current.value = String(value);
    }, [value, mask]);
    return (
      <TextField
        {...props}
        value={value}
        defaultValue={defaultValue}
        ref={input as React.Ref<HTMLInputElement | HTMLTextAreaElement>}
      />
    );
  },
);
MaskedInput.displayName = "MaskedInput";
export default MaskedInput;
