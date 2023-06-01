import React, { Fragment } from "react";
import { Menu as MenuDropdown, Transition } from "@headlessui/react";
import Button from "./Button";
import PropTypes from "prop-types";
import DropdownMenuItem from "./molecules/DropdownMenuItem";
const Menu = ({ label, links, menuPlacement }) => {
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
          <MenuDropdown.Items
            className={`bg-white flex flex-col mt-8px rounded-4px h-fit min-w-[200px] focus:outline-none shadow-lg absolute origin-top-right border border-outline-default ${
              menuPlacement === "right" ? "right-0" : "left-0"
            }`}
          >
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
                    <MenuDropdown.Item
                      key={link.href}
                      href={link.href}
                      as={Fragment}
                      disabled={link.disabled}
                    >
                      {({ active }) => (
                        <DropdownMenuItem
                          label={link.label}
                          caption={link.caption}
                          disabled={link.disabled}
                          active={link.active}
                          focused={active}
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

Menu.propTypes = {
  label: PropTypes.string,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      sectionTitle: PropTypes.string,
      items: PropTypes.arrayOf(
        PropTypes.shape({
          href: PropTypes.string.isRequired,
          label: PropTypes.string.isRequired,
          caption: PropTypes.string,
          disabled: PropTypes.bool,
          active: PropTypes.bool,
          danger: PropTypes.bool,
          leadingItem: PropTypes.element,
          trailingItem: PropTypes.element,
        })
      ).isRequired,
    })
  ).isRequired,
  menuPlacement: PropTypes.oneOf(["left", "right"]),
};

export default Menu;
