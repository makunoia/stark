import React, { InputHTMLAttributes, ReactElement, useState } from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import Stack from "@/components/molecules/Stack";
import Text from "@/components/molecules/Text";
import LoadingAnimation from "@/components/assets/CircleLoader.json";
import { Slot } from "@radix-ui/react-slot";
import Button, { ButtonProps } from "@/components/Button";
import Lottie from "lottie-react";
import { Eye, EyeOff } from "lucide-react";
import IconButton from "@/components/IconButton";

const InputContainerStyle = cva(
  [
    "flex items-center gap-4px overflow-clip",
    "min-h-[40px] px-12px",
    "bg outline outline-subtle text rounded-6px",
    "hover:outline",
    "transition-all ease-in",
    "has-[:focus]:outline has-[:focus]:outline-selected",
    "has-[:focus]:ring-4 has-[:focus]:ring-selected-subtle/40",
  ],
  {
    variants: {
      trailingButton: {
        true: "pl-12px pr-none",
      },
      type: {
        password: "pl-12px pr-none",
      },
      error: {
        true: [
          "text-danger outline-danger outline-offset-0",
          "has-[:focus]:outline-danger",
          "has-[:focus]:ring-4 has-[:focus]:ring-danger-subtle/80",
        ],
      },
      loading: {
        true: "pl-12px pr-4px",
      },
      readOnly: {
        true: "bg-subtle text-subtle",
      },
      disabled: {
        true: "bg-disabled border-disabled text-disabled",
      },
    },
  }
);

const InputStyle = cva(
  [
    "w-full h-40px flex-grow block",
    "text-body font-normal",
    "transition-colors ease-in",
    "bg-transparent border-none ring-0 outline-0",
  ],
  {
    variants: {
      loading: {
        true: "text-subtle/40 ",
      },
    },
  }
);

const HelpTextStyle = cva("w-auto text-subtle text-caption", {
  variants: {
    error: {
      true: "text-danger",
    },
  },
});

const LoadingSpinnerStyle = cva([
  "mx-8px w-[20px] h-[40px] overflow-hidden",
  "flex place-content-center",
  "absolute top-none right-none",
]);

const OverflowFadeStyle = cva(
  [
    "w-[100px] h-full",
    "absolute top-none right-none",
    "group-focus-within:opacity-0",
    "group-hover:opacity-0",
    "transition-opacity ease-out",
    "pointer-events-none",
    "bg-gradient-to-r from-background/0 to-background",
  ],
  {
    variants: {
      disabled: {
        true: "from-disabled/0 to-disabled",
      },
      readOnly: {
        true: "from-subtle/0 to-subtle",
      },
      loading: {
        true: "via-70% via-background",
      },
    },
  }
);

interface BaseInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string;
  helpText?: string;
  error?: boolean;
  loading?: boolean;
  disabled?: boolean;
  hideLabel?: boolean;
  leadingItem?: ReactElement;
}

//TODO: MASKED-INPUT
type TextSpecificProps = BaseInputProps & {
  type: "text" | "email" | "number" | "tel" | "url";
  optional?: boolean;
  trailingItem?: ReactElement;
  trailingButton?: ButtonProps;
};

type PasswordSpecificProps = BaseInputProps & {
  type?: "password";
};

type InputProps = PasswordSpecificProps | TextSpecificProps;

const isTextSpecificProps = (props: InputProps): props is TextSpecificProps => {
  return props.type !== "password";
};

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      type = "text",
      error = false,
      loading = false,
      disabled = false,
      readOnly = false,
      hideLabel = false,
      label = "Label",
      helpText,
      id,
      leadingItem,
      ...props
    },
    ref
  ) => {
    const isPassword = type === "password";
    let optional, trailingItem, trailingButton;

    if (isTextSpecificProps(props)) {
      ({ optional, trailingItem, trailingButton } = props);
    }

    const [revealInput, setRevealInput] = useState(
      type === "password" ? false : true
    );

    //Password Reveal
    const handlePasswordToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      setRevealInput(!revealInput);
    };

    // Extract CVA styles
    const containerStyle = InputContainerStyle({
      type: isPassword ? "password" : undefined,
      error: error && !disabled ? true : false,
      loading,
      readOnly,
      disabled,
      trailingButton: trailingButton ? true : false,
    });
    const inputStyle = InputStyle({
      loading,
    });
    const helpTextStyle = HelpTextStyle({
      error: error && !disabled ? true : false,
    });
    const loadingSpinnerStyle = LoadingSpinnerStyle();
    const overflowFadeStyle = OverflowFadeStyle({
      loading,
      disabled,
      readOnly,
    });

    // Render Items
    const LabelRow = (
      <Stack direction="horizontal" gap="4px" width="auto">
        <Text as="label" weight="medium" htmlFor={id as string}>
          {label}
        </Text>
        {optional && !isPassword ? (
          <Text as="span" weight="normal" className="text-subtle">
            - optional
          </Text>
        ) : null}
      </Stack>
    );

    const HelpText = helpText ? (
      <Text as="span" className={cn(helpTextStyle)}>
        {helpText as string}
      </Text>
    ) : null;

    const LoadingSpinner = loading && (
      <div className={cn(loadingSpinnerStyle)}>
        <Lottie
          animationData={LoadingAnimation}
          className="opacity-80 absolute m-auto top-none bottom-none"
        />
      </div>
    );

    const OverflowFade = <div className={cn(overflowFadeStyle)} />;

    const LeadingItem = leadingItem ? (
      <div className="w-fit h-16px inline-flex content-center">
        <Slot className="h-full">{leadingItem}</Slot>
      </div>
    ) : null;

    const TrailingItem = trailingItem ? (
      <div
        className={cn(
          `w-fit h-16px inline-flex ${trailingButton ? "mr-8px" : null}`
        )}
      >
        <Slot className="h-full">{trailingItem}</Slot>
      </div>
    ) : null;

    const PasswordRevealButton =
      type === "password" ? (
        <IconButton
          aria-label="reveal password"
          icon={revealInput ? <EyeOff /> : <Eye />}
          onClick={handlePasswordToggle}
          attached
        />
      ) : null;

    const TrailingButton =
      type !== "password" && trailingButton ? (
        <Button
          {...trailingButton}
          disabled={disabled}
          className="rounded-l-none rounded-r-4px outline-0 shadow-none focus-visible:ring-0 active:ring-0"
        />
      ) : null;

    return (
      <Stack direction="vertical" gap="4px">
        {!hideLabel && LabelRow}
        <div className={cn(containerStyle)}>
          {LeadingItem}
          <div className="relative flex-grow group">
            <input
              className={cn(inputStyle)}
              id={id}
              type={
                isPassword
                  ? revealInput
                    ? "text"
                    : "password"
                  : (type as string)
              }
              ref={ref}
              disabled={disabled}
              readOnly={readOnly || loading}
              {...props}
            />
            {OverflowFade}
            {LoadingSpinner}
          </div>
          {PasswordRevealButton}
          {!isPassword && TrailingItem}
          {!isPassword && TrailingButton}
        </div>
        {HelpText}
      </Stack>
    );
  }
);

Input.displayName = "Input";

export default Input;
