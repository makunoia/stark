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
          <MenuDropdown.Items className="bg-white border absolute right-[0px] origin-top-right flex flex-col py-12px mt-8px border-outline-default rounded-8px h-fit w-fit overflow-clip focus:outline-none">
            {links.map((group, groupIndex) => (
              <Fragment key={`group-${groupIndex}`}>
                {group.label && (
                  <div className="text-gray-800 font-bold tracking-wide text-caption uppercase mb-4px px-12px">
                    {group.label}
                  </div>
                )}
                {group.items.map((link) => (
                  /* Use the `active` state to conditionally style the active item. */
                  <MenuDropdown.Item key={link.href} as={Fragment}>
                    {({ active }) => (
                      <a
                        href={link.href}
                        className={`whitespace-nowrap px-12px pr-24px py-12px rounded-4px w-full text-body flex flex-row gap-4px items-center ${
                          active
                            ? "bg-blue-500 bg-primary-muted text-black"
                            : "bg-white text-black"
                        }`}
                      >
                        {link.icon && (
                          <span className="mr-4px text-primary-base text-[18px]">
                            {link.icon}
                          </span>
                        )}
                        {link.label}
                      </a>
                    )}
                  </MenuDropdown.Item>
                ))}
                {groupIndex < links.length - 1 && (
                  <div className="border-t border-outline-default mb-12px"></div>
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
