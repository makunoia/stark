"use client";
import React, { useId, useState, type ReactNode } from "react";
import { LayoutGroup, motion, useReducedMotion } from "motion/react";
import * as Tabs from "@radix-ui/react-tabs";
import Tab from "./Tab.js";
export interface TabGroupProps {
  tabs: {
    label: string;
    remixIcon?: string;
    disabled?: boolean;
    content?: ReactNode;
  }[];
  type?: "default" | "pill";
  activeTab: number;
  handleTabClick: (index: number) => void;
  label?: string;
}
export default function TabGroup({
  tabs,
  type = "default",
  activeTab,
  handleTabClick,
  label = "Tabs",
}: TabGroupProps) {
  const layoutId = useId();
  const reducedMotion = useReducedMotion();
  const [keyboardNavigation, setKeyboardNavigation] = useState(false);
  const [pointerFocus, setPointerFocus] = useState(false);
  const instant = reducedMotion || keyboardNavigation;
  const indicatorClassName =
    "stark-tab-indicator pointer-events-none absolute inset-x-none bottom-[-2px] h-[2px] bg-brand";
  return (
    <LayoutGroup id={layoutId}>
      <Tabs.Root
        value={String(activeTab)}
        onValueChange={(value) => handleTabClick(Number(value))}
      >
        <Tabs.List
          aria-label={label}
          data-stark-pointer-focus={pointerFocus}
          onBlurCapture={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget))
              setPointerFocus(false);
          }}
          onKeyDownCapture={() => {
            setKeyboardNavigation(true);
            setPointerFocus(false);
          }}
          onPointerDownCapture={() => {
            setKeyboardNavigation(false);
            setPointerFocus(true);
          }}
          className={`flex w-fit ${type === "pill" ? "gap-4px" : "gap-16px"}`}
        >
          {tabs.map((tab, index) => (
            <Tabs.Trigger
              key={index}
              value={String(index)}
              disabled={tab.disabled}
              asChild
            >
              <Tab
                label={tab.label}
                remixIcon={tab.remixIcon}
                type={type}
                active={activeTab === index}
                aria-pressed={undefined}
                style={
                  type === "default"
                    ? { position: "relative", borderBottomColor: "transparent" }
                    : undefined
                }
              >
                {type === "default" &&
                  activeTab === index &&
                  (instant ? (
                    <span aria-hidden="true" className={indicatorClassName} />
                  ) : (
                    <motion.span
                      aria-hidden="true"
                      className={indicatorClassName}
                      layoutId="active-tab-underline"
                      initial={false}
                      transition={{
                        layout: { type: "spring", duration: 0.24, bounce: 0 },
                      }}
                    />
                  ))}
              </Tab>
            </Tabs.Trigger>
          ))}
        </Tabs.List>
        {tabs.map(
          (tab, index) =>
            tab.content !== undefined && (
              <Tabs.Content key={index} value={String(index)}>
                {tab.content}
              </Tabs.Content>
            ),
        )}
      </Tabs.Root>
    </LayoutGroup>
  );
}
