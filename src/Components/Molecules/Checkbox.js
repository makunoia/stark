import React from "react";
import PropTypes from "prop-types";
import RemixIcon from "./RemixIcon";
const Checkbox = ({
  id,
  name,
  label,
  helpText,
  checked,
  disabled,
  onChange,
  contained,
}) => {
  const handleClick = (e) => {
    if (disabled) return;

    // Prevents double event firing
    e.preventDefault();
    e.stopPropagation();

    onChange({ target: { checked: !checked } });
  };

  // "p-8px border border-outline-default bg-white rounded-4px w-fit"
  // "p-8px border border-primary-base bg-white rounded-4px w-fit"
  return (
    <div
      className={`flex flex-row gap-8px items-center ${
        contained
          ? checked
            ? "p-8px border border-primary-base bg-white rounded-4px w-fit"
            : "p-8px border border-outline-default bg-white rounded-4px w-fit"
          : ""
      }`}
    >
      <div
        onClick={handleClick}
        className={`w-20px h-20px min-w-[20px] min-h-[20px] flex justify-center items-center rounded-4px border transition ease-in ${
          disabled
            ? "bg-fill-disabled cursor-not-allowed"
            : checked
            ? "bg-primary-base border-primary-base cursor-pointer"
            : "bg-fill-default border-outline-default  hover:bg-primary-muted cursor-pointer"
        } ${helpText ? "mb-16px" : ""}`}
      >
        <span
          className={`text-[16px] ${
            disabled ? "text-copy-disabled" : "text-white"
          } font-semibold w-full h-full flex items-center transition-all ease-in duration-75 justify-center ${
            checked ? "scale-1" : "scale-50"
          }`}
        >
          {checked ? <RemixIcon name="check-fill" /> : ""}
        </span>

        <input
          type="checkbox"
          id={id}
          name={name}
          value={label}
          checked={checked}
          onChange={handleClick}
          disabled={disabled}
          hidden
        />
      </div>
      <div className={`flex flex-col ${helpText ? "gap-4px" : ""}`}>
        <label
          htmlFor={id}
          className={`text-body font-medium select-none ${
            disabled
              ? "text-copy-disabled cursor-not-allowed"
              : "text-copy-caption cursor-pointer"
          } ${checked ? "text-primary-base" : ""}`}
        >
          {label ? label : "Checkbox"}
        </label>
        <span className="flex flex-row gap-4px text-body text-gray-800">
          {helpText}
        </span>
      </div>
    </div>
  );
};

Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  helpText: PropTypes.string,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};

export default Checkbox;
