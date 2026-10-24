"use client";
import Text from "./molecules/Text.js";

import React, {
  forwardRef,
  type AnchorHTMLAttributes,
  type ReactNode,
} from "react";
import * as Primitive from "@radix-ui/react-dropdown-menu";
import Button from "./Button.js";
import RemixIcon from "./RemixIcon.js";
export interface DropdownMenuItemProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  label: string;
  caption?: string;
  disabled?: boolean;
  active?: boolean;
  focused?: boolean;
  danger?: boolean;
  leadingItem?: ReactNode;
  trailingItem?: ReactNode;
  link?: string;
}
export const DropdownMenuItem = forwardRef<
  HTMLAnchorElement,
  DropdownMenuItemProps
>(
  (
    {
      label,
      caption,
      disabled,
      active,
      focused,
      danger,
      leadingItem,
      trailingItem,
      link,
      className = "",
      ...props
    },
    ref,
  ) => (
    <a
      {...props}
      ref={ref}
      href={disabled ? undefined : (link ?? props.href)}
      aria-disabled={disabled || undefined}
      aria-current={active ? "page" : undefined}
      className={`stark-menu-item flex gap-8px items-center px-16px py-8px text-body ${danger ? "text-danger" : "text"} ${focused ? "bg-info-subtle" : ""} ${className}`}
      onClick={(event) => {
        if (disabled) event.preventDefault();
        else props.onClick?.(event);
      }}
    >
      {leadingItem}
      <Text as="span" inherit className="flex grow flex-col">
        <Text as="span" inherit>{label}</Text>
        {caption && <Text as="span" inherit size="caption" tone="subtle">{caption}</Text>}
      </Text>
      {trailingItem}
    </a>
  ),
);
DropdownMenuItem.displayName = "DropdownMenuItem";
export interface MenuProps {
  label?: string;
  links: { sectionTitle?: string; items: DropdownMenuItemProps[] }[];
  menuPlacement?: "left" | "right";
  disabled?: boolean;
}
export default function Menu({
  label = "Dropdown",
  links,
  menuPlacement = "left",
  disabled,
}: MenuProps) {
  return (
    <Primitive.Root>
      <Primitive.Trigger asChild>
        <Button
          disabled={disabled}
          label={label}
          trailingIcon={<RemixIcon name="arrow-down-s-line" />}
        />
      </Primitive.Trigger>
      <Primitive.Portal>
        <Primitive.Content
          align={menuPlacement === "right" ? "end" : "start"}
          sideOffset={8}
          collisionPadding={8}
          className="stark-menu z-[80] min-w-[200px] max-w-[calc(100vw-16px)] rounded-4px border border-subtle bg-surface shadow-md outline-none"
        >
          {links.map((group, index) => (
            <React.Fragment key={index}>
              {index > 0 && (
                <Primitive.Separator className="border-t border-subtle" />
              )}
              <Primitive.Group className="py-8px">
                {group.sectionTitle && (
                  <Text asChild inherit><Primitive.Label className="px-16px py-4px text-[11px] uppercase font-bold tracking-wider text-subtle">
                    {group.sectionTitle}
                  </Primitive.Label></Text>
                )}
                {group.items.map((item, itemIndex) => (
                  <Primitive.Item
                    key={itemIndex}
                    disabled={item.disabled}
                    asChild
                  >
                    <DropdownMenuItem {...item} link={item.href ?? item.link} />
                  </Primitive.Item>
                ))}
              </Primitive.Group>
            </React.Fragment>
          ))}
        </Primitive.Content>
      </Primitive.Portal>
    </Primitive.Root>
  );
}
