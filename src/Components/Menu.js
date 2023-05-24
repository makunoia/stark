import React, { Fragment } from "react";
import { Menu as MenuDropdown, Transition } from "@headlessui/react";
import Button from "./Button";
import DropdownMenuItem from "./molecules/DropdownMenuItem";
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
          <MenuDropdown.Items className="bg-white flex flex-col mt-8px rounded-4px h-fit min-w-[200px] focus:outline-none shadow-lg absolute left-[0px] origin-top-right">
            {links.map((group, groupIndex) => (
              <Fragment key={`group-${groupIndex}`}>
                <div className="py-8px gap-4px">
                  {group.sectionTitle && (
                    <div className="text-black font-bold tracking-wider text-[11px] uppercase px-16px py-4px">
                      {group.sectionTitle}
                    </div>
                  )}
                  {group.items.map((link) => (
                    /* Use the `active` state to conditionally style the active item. */
                    <MenuDropdown.Item key={link.href} as={Fragment}>
                      {({ active }) => (
                        <DropdownMenuItem
                          label={link.label}
                          caption={link.caption}
                          active={active}
                          danger={link.danger}
                          leadingItem={link.leadingItem}
                          link={link.href}
                          trailingItem={link?.trailingItem}
                        />
                      )}
                    </MenuDropdown.Item>
                  ))}
                </div>
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
