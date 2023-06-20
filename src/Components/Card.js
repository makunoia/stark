import React, { useState } from "react";
import { Disclosure, Transition } from "@headlessui/react";
import Button from "./Button";
import RemixIcon from "./molecules/RemixIcon";
import { Reorder, useDragControls } from "framer-motion";
import { useEffect } from "react";

const Card = ({ header, caption, actionButton, children }) => {
  const bodyContent = React.Children.toArray(children).find(
    (child) => child.type?.displayName === "Card.Body"
  );

  const footerContent = React.Children.toArray(children).find(
    (child) => child.type.displayName === "Card.Footer"
  );

  return (
    <div className="bg-white border border-outline-default rounded-4px transition-all ease-in ">
      <div className="card-header flex flex-row px-24px pt-24px pb-16px">
        <div className="flex flex-col w-full">
          <h6 className="text-h6 font-bold text-black">{header}</h6>
          <span className="text-body text-copy-caption">{caption}</span>
        </div>
        {actionButton && (
          <Button label={actionButton.label} onClick={actionButton.onClick} />
        )}
      </div>
      {bodyContent && (
        <Card.Body className={bodyContent.props.className}>
          {bodyContent}
        </Card.Body>
      )}
      {footerContent && (
        <Card.Footer className={footerContent.props.className}>
          {footerContent.props.children}
        </Card.Footer>
      )}
    </div>
  );
};

Card.Body = ({ children, className }) => {
  return (
    <div className={`card-body w-full ${className ? className : ""}`}>
      {children}
    </div>
  );
};

Card.Section = ({ children, className }) => {
  return (
    <div
      className={`card-section w-full border-y border-outline-default p-24px -mb-[1px] last:mb-[0px] ${className}`}
    >
      {children}
    </div>
  );
};

Card.DraggableList = ({ children }) => {
  const listArr = children;
  const [draggableItems, setDraggableItems] = useState(listArr);

  const [isDragging, setIsDragging] = useState(false);

  return (
    <Reorder.Group
      axis="y"
      values={draggableItems}
      onReorder={setDraggableItems}
      className="relative"
    >
      {draggableItems.map((item) => (
        <DraggableDisclosure
          item={item}
          key={item.props.id ? item.props.id : item.props.title}
          isDragging={isDragging}
        />
      ))}
    </Reorder.Group>
  );
};

const DraggableDisclosure = ({ item, isDragging }) => {
  const controls = useDragControls();
  return (
    <Reorder.Item
      id={item.props.id ? item.props.id : item.props.title}
      value={item}
      dragListener={false}
      dragControls={controls}
    >
      {React.cloneElement(item, {
        dragControls: controls,
        isDragging: isDragging,
      })}
    </Reorder.Item>
  );
};

Card.Disclosure = ({
  id,
  children,
  className,
  title,
  draggable,
  dragControls,
  isDragging,
}) => {
  return (
    <div
      className={`card-disclosure w-full border-t border-outline-default p-24px -mb-[1px] last:mb-[0px] ${className} ${
        isDragging && "select-none"
      }`}
    >
      <Disclosure as="div">
        {({ open }) => (
          <div className="flex items-start justify-start gap-16px w-full">
            {draggable && (
              <div
                onPointerDown={(event) =>
                  dragControls.start(event, { snapToCursor: true })
                }
                className={`flex flex-center justify-center items-center p-4px border border-outline-default bg-white rounded-4px w-[32px] h-[32px] ${
                  isDragging ? "cursor-grabbing" : "cursor-grab"
                }`}
              >
                <RemixIcon name="draggable" className="font-semibold" />
              </div>
            )}

            <div className="flex flex-col gap-16px w-full">
              <Disclosure.Button className="flex justify-between w-full">
                <div className="flex flex-row items-center gap-8px w-full">
                  <span className="text-left text-black text-body uppercase tracking-wider font-bold w-full">
                    {title ? title : "Disclosure"}
                  </span>
                  <RemixIcon
                    name="arrow-up-s-line"
                    className={`transition-transform ease-in ${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 text-purple-500`}
                  />
                </div>
              </Disclosure.Button>
              <Transition
                show={open}
                enter="transition duration-100 ease-out"
                enterFrom="transform -translate-y-4px opacity-0"
                enterTo="transform translate-y-0px opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform translate-y-0px opacity-100"
                leaveTo="transform -translate-y-4px opacity-0"
              >
                <Disclosure.Panel className="text-body">
                  {children}
                </Disclosure.Panel>
              </Transition>
            </div>
          </div>
        )}
      </Disclosure>
    </div>
  );
};

Card.Footer = ({ children, className }) => {
  return (
    <div
      className={`card-footer px-24px pb-16px pt-16px flex items-center gap-16px  ${className}`}
    >
      {children}
    </div>
  );
};

Card.Body.displayName = "Card.Body";
Card.Section.displayName = "Card.Section";
Card.DraggableList.displayName = "Card.DraggableList";
Card.Disclosure.displayName = "Card.Disclosure";
Card.Footer.displayName = "Card.Footer";

export default Card;
