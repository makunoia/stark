import React, { FC, ReactElement } from "react";
import * as Label from "@radix-ui/react-label";
import { cva } from "class-variance-authority";
import { cn } from "../../lib/utils";

const TextStyles = cva("", {
  variants: {
    variant: {
      body: "text-body",
      "body-large": "text-body-large",
      caption: "text-caption",
      lead: "text-lead",
      section: "text-section",
      title: "text-title",
    },
    leading: {
      monoline: "leading-monoline",
      tight: "leading-tight",
      relaxed: "leading-relaxed",
      loose: "leading-loose",
    },
    weight: {
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
    },
  },
  defaultVariants: {
    variant: "body",
    weight: "normal",
  },
});

type BaseTextProps = {
  children: string | ReactElement;
  className?: string;
  variant?: "body" | "body-large" | "caption" | "lead" | "section" | "title";
  weight?: "normal" | "medium" | "semibold" | "bold";
  leading?: "monoline" | "tight" | "relaxed" | "loose";
};

type DefaultTextProps = BaseTextProps & {
  as?: "p" | "h1" | "h2" | "h3" | "h4" | "span";
};

type LabelTextProps = BaseTextProps & {
  as: "label";
  htmlFor: string;
};

type TextProps = DefaultTextProps | LabelTextProps;

function isTextLabel(props: any): props is LabelTextProps {
  return props.as == "label" && "htmlFor" in props;
}

const Text = ({
  as: Component = "span",
  children,
  className,
  variant,
  weight,
  leading,
  ...props
}: TextProps) => {
  const styles = cn(TextStyles({ variant, weight, leading }), className);

  if (isTextLabel(props)) {
    return (
      <Label.Root asChild htmlFor={props.htmlFor}>
        <label className={styles}>{children}</label>
      </Label.Root>
    );
  }

  return (
    <Component className={styles} {...props}>
      {children}
    </Component>
  );
};

Text.displayName = "Text";

export default Text;
