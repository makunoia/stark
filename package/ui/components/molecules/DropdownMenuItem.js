import React from "react";
import PropTypes from "prop-types";

const DropdownMenuItem = ({
  leadingItem,
  trailingItem,
  caption,
  label,
  link,
  active,
  danger,
  disabled,
  focused,
}) => {
  return (
    <a
      className={`flex flex-row relative justify-between items-center py-8px px-16px ${
        disabled
          ? "text-copy-disabled cursor-not-allowed"
          : "hover:bg-gray-50 cursor-pointer"
      } ${focused && "bg-gray-50"}`}
      href={link}
    >
      {active && (
        <div className="absolute left-0 top-0 h-full w-4px bg-primary-base rounded-r-4px"></div>
      )}
      <div className={`flex gap-10px w-full`}>
        {leadingItem && (
          <span
            className={`flex items-center justify-center w-[16px] h-[16px] self-start ${
              active
                ? "text-primary-base "
                : danger
                ? "text-danger-base"
                : disabled
                ? "text-copy-disabled"
                : "text-copy-caption"
            } `}
          >
            {leadingItem}
          </span>
        )}
        <div className="flex flex-col gap-2px w-full">
          <span
            className={`text-body text-copy-caption ${
              active
                ? "text-primary-base"
                : danger
                ? "text-danger-base"
                : disabled
                ? "text-copy-disabled"
                : "text-copy-caption"
            }`}
          >
            {label}
          </span>
          {caption && (
            <span className="text-caption text-copy-caption">{caption}</span>
          )}
        </div>
      </div>

      {trailingItem && (
        <span className={`text-caption text-copy-caption self-center`}>
          {trailingItem}
        </span>
      )}
    </a>
  );
};

DropdownMenuItem.propTypes = {
  leadingIcon: PropTypes.node,
  trailingIcon: PropTypes.node,
  caption: PropTypes.string,
  label: PropTypes.string.isRequired,
};

export default DropdownMenuItem;
