"use client";
import Text from "./molecules/Text.js";
import React, { useRef, useState, type ReactNode } from "react";
import * as Primitive from "@radix-ui/react-tooltip";
import RemixIcon from "./RemixIcon.js";
export interface TooltipProps {
  content: ReactNode;
  position?: "top" | "bottom" | "left" | "right";
  children?: ReactNode;
}
export default function Tooltip({
  content,
  position = "bottom",
  children,
}: TooltipProps) {
  const [open, setOpen] = useState(false);
  const pointerType = useRef("mouse");
  return (
    <Primitive.Provider delayDuration={200}>
      <Primitive.Root open={open} onOpenChange={setOpen}>
        <Primitive.Trigger
          asChild
          onPointerDown={(event) => {
            pointerType.current = event.pointerType;
            if (event.pointerType === "touch") {
              event.preventDefault();
              setOpen((previous) => !previous);
            }
          }}
          onClick={(event) => {
            if (pointerType.current === "touch") event.preventDefault();
          }}
        >
          {children ?? (
            <button
              type="button"
              className="stark-icon-target inline-flex items-center justify-center"
              aria-label="More information"
            >
              <RemixIcon name="information-fill" />
            </button>
          )}
        </Primitive.Trigger>
        <Primitive.Portal>
          <Text asChild inherit><Primitive.Content
            side={position}
            sideOffset={4}
            className="stark-tooltip z-[90] max-w-[200px] rounded-4px bg-inverse p-4px text-caption text-oninverse"
          >
            {content}
          </Primitive.Content></Text>
        </Primitive.Portal>
      </Primitive.Root>
    </Primitive.Provider>
  );
}
