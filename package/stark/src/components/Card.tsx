"use client";
import { textStyles } from "../lib/typography.js";
import Text from "./molecules/Text.js";

import React, {
  Children,
  cloneElement,
  isValidElement,
  useState,
  type HTMLAttributes,
  type ReactElement,
  type ReactNode,
} from "react";
import {
  Reorder,
  useDragControls,
  useReducedMotion,
  type DragControls,
} from "motion/react";
import Button, { type ButtonProps } from "./Button.js";
import RemixIcon from "./RemixIcon.js";
export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  header?: string;
  caption?: string;
  actionButton?: ButtonProps;
}
function Card({
  header,
  caption,
  actionButton,
  children,
  className = "",
  ...props
}: CardProps) {
  return (
    <div
      {...props}
      className={`bg-surface border border-subtle rounded-4px ${className}`}
    >
      {(header || caption || actionButton) && (
        <div className="flex px-24px py-24px">
          <div className="flex flex-col grow gap-2px">
            <Text as="h6" inherit weight="bold" tone="default">{header}</Text>
            <Text as="span" inherit size="body" tone="subtle">{caption}</Text>
          </div>
          {actionButton && <Button {...actionButton} />}
        </div>
      )}
      {children}
    </div>
  );
}
function Body({ className = "", ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div {...props} className={`card-body w-full ${className}`} />;
}
function Section({ className = "", ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      className={`card-section w-full border-y border-subtle p-24px -mb-px last:mb-none ${className}`}
    />
  );
}
function Footer({ className = "", ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      className={`card-footer px-24px py-16px flex items-center gap-16px ${className}`}
    />
  );
}
export interface CardDisclosureProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  draggable?: boolean;
  dragControls?: DragControls;
  isDragging?: boolean;
  onMove?: (direction: number) => void;
}
function Disclosure({
  id,
  title = "Disclosure",
  children,
  className = "",
  draggable,
  dragControls,
  isDragging,
  onMove,
  ...props
}: CardDisclosureProps) {
  return (
    <div
      {...props}
      id={id}
      className={`card-disclosure w-full border-t border-subtle p-24px ${className} ${isDragging ? "select-none" : ""}`}
    >
      <div className="flex items-start gap-16px">
        {draggable && (
          <button
            type="button"
            aria-label={`Reorder ${title}; use up and down arrows`}
            className="stark-icon-target cursor-grab touch-none"
            onPointerDown={(event) => dragControls?.start(event)}
            onKeyDown={(event) => {
              if (event.key === "ArrowUp" || event.key === "ArrowDown") {
                event.preventDefault();
                onMove?.(event.key === "ArrowUp" ? -1 : 1);
              }
            }}
          >
            <RemixIcon name="draggable" />
          </button>
        )}
        <details className="w-full">
          <Text as="summary" inherit size="caption" weight="bold" tone="default" className="stark-disclosure-summary flex justify-between items-center cursor-pointer uppercase tracking-widest">
            {title}
            <RemixIcon name="arrow-up-s-line" />
          </Text>
          <div className={textStyles({ inherit: true, size: "body", className: "pt-16px" })}>{children}</div>
        </details>
      </div>
    </div>
  );
}
function DraggableItem({
  item,
  move,
}: {
  item: ReactElement<CardDisclosureProps>;
  move: (direction: number) => void;
}) {
  const controls = useDragControls();
  const reduce = useReducedMotion();
  return (
    <Reorder.Item
      value={item.key}
      dragListener={false}
      dragControls={controls}
      dragMomentum={false}
      transition={
        reduce ? { duration: 0 } : { type: "spring", duration: 0.25, bounce: 0 }
      }
      className="relative bg-surface list-none"
    >
      {cloneElement(item, {
        draggable: true,
        dragControls: controls,
        onMove: move,
      })}
    </Reorder.Item>
  );
}
export interface CardDraggableListProps {
  children?: ReactNode;
  onReorder?: (ids: string[]) => void;
}
function DraggableList({ children, onReorder }: CardDraggableListProps) {
  const items = Children.toArray(children).filter(
    isValidElement,
  ) as ReactElement<CardDisclosureProps>[];
  const [order, setOrder] = useState<string[]>([]);
  const keys = items.map((item) => String(item.key));
  const sorted = [
    ...order.filter((key) => keys.includes(key)),
    ...keys.filter((key) => !order.includes(key)),
  ];
  const commit = (next: string[]) => {
    setOrder(next);
    onReorder?.(
      next.map((key) => {
        const item = items.find((item) => item.key === key)!;
        return item.props.id ?? item.props.title ?? key;
      }),
    );
  };
  return (
    <Reorder.Group
      axis="y"
      values={sorted}
      onReorder={commit}
      className="relative"
    >
      {sorted.map((key, index) => (
        <DraggableItem
          key={key}
          item={items.find((item) => item.key === key)!}
          move={(direction) => {
            const target = index + direction;
            if (target < 0 || target >= sorted.length) return;
            const next = [...sorted];
            [next[index], next[target]] = [next[target], next[index]];
            commit(next);
          }}
        />
      ))}
    </Reorder.Group>
  );
}
Card.Body = Body;
Card.Section = Section;
Card.Footer = Footer;
Card.Disclosure = Disclosure;
Card.DraggableList = DraggableList;
export default Card;
