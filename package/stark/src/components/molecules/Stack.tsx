import React, { ReactNode } from "react";
import { type VariantProps, cva } from "class-variance-authority";
import { cn } from "../../lib/utils";
import { Slot } from "@radix-ui/react-slot";

const StackStyles = cva("flex", {
  variants: {
    width: {
      auto: "w-auto",
      full: "w-full",
      fit: "w-fit",
    },
    horizontal: {
      true: "flex-row",
    },
    vertical: {
      true: "flex-col",
    },
    justify: {
      normal: "justify-normal",
      start: "justify-start",
      center: "justify-center",
      end: "justify-end",
    },
    align: {
      start: "content-start items-start",
      center: "content-center items-center",
      end: "content-end items-end",
      baseline: "items-baseline",
    },
    distribute: {
      normal: "content-normal",
      between: "justify-between content-between",
      around: "justify-around content-around",
      evenly: "justify-evenly content-evenly",
      stretch: "*:flex-grow justify-stretch content-stretch",
    },
    gap: {
      "2px": "gap-2px",
      "4px": "gap-4px",
      "6px": "gap-6px",
      "8px": "gap-8px",
      "10px": "gap-10px",
      "12px": "gap-12px",
      "14px": "gap-14px",
      "16px": "gap-16px",
      "18px": "gap-18px",
      "20px": "gap-20px",
      "24px": "gap-24px",
      "28px": "gap-28px",
      "32px": "gap-32px",
      "40px": "gap-40px",
      "60px": "gap-60px",
    },
  },
});

interface StackProps {
  width?: "auto" | "full" | "fit";
  horizontal?: boolean;
  vertical?: boolean;
  justify?: "normal" | "end" | "start" | "center";
  align?: "start" | "end" | "center" | "baseline";
  distribute?: "normal" | "between" | "around" | "evenly" | "stretch";
  gap?:
    | "2px"
    | "4px"
    | "6px"
    | "8px"
    | "10px"
    | "12px"
    | "14px"
    | "16px"
    | "18px"
    | "20px"
    | "24px"
    | "28px"
    | "32px"
    | "40px"
    | "60px";
  children: ReactNode;
  className?: string;
  asChild?: boolean;
}

const Stack = ({
  vertical = true,
  horizontal,
  width = "auto",
  justify,
  align,
  gap,
  distribute,
  children,
  className,
  asChild,
  ...props
}: StackProps) => {
  const styles = cn(
    StackStyles({
      vertical: horizontal ? false : vertical,
      horizontal: !vertical,
      width,
      justify,
      align,
      gap,
      distribute,
    }),
    className
  );

  const Component = asChild ? Slot : "div";

  return (
    <Component className={styles} {...props}>
      {children}
    </Component>
  );
};

export default Stack;
