import React, { Fragment } from "react";
import { Menu as MenuDropdown, Transition } from "@headlessui/react";
import Button from "./Button";

const Menu = ({ label, links }) => {
  return (
    <MenuDropdown>
      <div as={Fragment} className="relative w-fit">
        <MenuDropdown.Button>
          <Button
            label={label ? label : "Dropdown"}
            primary
            trailingIcon={<i className="ri-arrow-down-s-line"></i>}
          />
        </MenuDropdown.Button>
        <Transition
          as={Fragment}
          enter="transition duration-100 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-in"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
        >
          <MenuDropdown.Items className="bg-white flex flex-col pb-8px mt-8px rounded-4px h-fit w-fit focus:outline-none shadow-lg absolute right-[0px] origin-top-right border border-outline-default">
            {links.map((group, groupIndex) => (
              <Fragment key={`group-${groupIndex}`}>
                {group.label && (
                  <div className="text-gray-800 font-semibold tracking-wide text-[11px] uppercase mb-[6px] mt-16px px-16px">
                    {group.label}
                  </div>
                )}
                {group.items.map((link) => (
                  /* Use the `active` state to conditionally style the active item. */
                  <MenuDropdown.Item key={link.href} as={Fragment}>
                    {({ active }) => (
                      <a
                        href={link.href}
                        className={`whitespace-nowrap px-16px pr-24px py-8px w-full text-body font-normal flex flex-row gap-4px items-center ${
                          active
                            ? " bg-gray-100/70 text-black"
                            : "bg-white text-copy-caption"
                        }`}
                      >
                        {link.icon && (
                          <span className="mr-4px text-copy-caption text-[16px]">
                            {link.icon}
                          </span>
                        )}
                        {link.label}
                      </a>
                    )}
                  </MenuDropdown.Item>
                ))}
                {groupIndex < links.length - 1 && (
                  <div className="border-t border-outline-default mt-12px"></div>
                )}
              </Fragment>
            ))}
          </MenuDropdown.Items>
        </Transition>
      </div>
    </MenuDropdown>
  );
};

export default Menu;
