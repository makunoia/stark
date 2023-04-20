import React from "react";

const Switch = ({ id, label, name, helpText, checked, onChange, disabled }) => {
  const handleClick = (e) => {
    if (disabled) return;

    // Prevents double event firing
    e.preventDefault();
    e.stopPropagation();

    if (onChange) {
      onChange(!checked);
    }
  };

  return (
    <div className="flex flex-row gap-12px justify-center items-center w-fit">
      <div
        onClick={handleClick}
        className={`switch relative inline-block w-[40px] h-[24px] border ${
          checked
            ? "bg-success-base border-success-base"
            : "bg-gray-300 border-outline-default"
        } ${
          helpText ? "mb-8px" : ""
        } cursor-pointer transition-all rounded-[28px]`}
      >
        <input
          type="checkbox"
          id={id}
          name={name}
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          hidden
        />
        <span
          className={`${
            checked ? "translate-x-[20px]" : "translate-x-[4px] "
          } absolute top-[3px] inset-y-0 flex items-center justify-center transition-all duration-300 transform  bg-white border border-gray-300 rounded-[100%] shadow  w-[16px] h-[16px]`}
        >
          {checked ? (
            <div className="text-success-base font-bold text-[12px]">
              <i className="ri-check-line"></i>
            </div>
          ) : (
            <div className="text-copy-disabled font-bold text-[12px]">
              <i className="ri-close-line "></i>
            </div>
          )}
        </span>
      </div>
      <div className={`flex flex-col ${helpText ? "gap-4px" : ""}`}>
        <label
          htmlFor={id}
          className={`text-body font-medium select-none ${
            disabled
              ? "text-copy-disabled cursor-not-allowed"
              : "text-copy-caption cursor-pointer"
          }`}
        >
          {label}
        </label>
        <span className="flex flex-row gap-4px text-body text-gray-800">
          {helpText}
        </span>
      </div>
    </div>
  );
};

export default Switch;
