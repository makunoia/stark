import React from "react";

const RadioButton = ({
  id,
  name,
  label,
  helpText,
  value,
  checked,
  onChange,
  disabled,
}) => {
  const handleChange = (isChecked) => {
    if (onChange) {
      onChange(isChecked);
    }
  };

  return (
    <div className="flex items-center justify-center gap-8px w-fit">
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        checked={checked}
        onChange={() => handleChange(!checked)}
        disabled={disabled}
        hidden
      />
      <label
        htmlFor={id}
        className={`cursor-pointer relative flex items-center justify-center min-w-[20px] min-h-[20px] border-2 rounded-[100%] ${
          checked
            ? "bg-primary-muted border-primary-base"
            : "bg-white border-outline-default"
        } transition-colors ease-in-out duration-200 ${
          helpText ? "mb-[18px]" : ""
        }`}
      >
        <span
          className={`absolute rounded-[100%] w-[10px] h-[10px] transform ${
            checked ? "scale-100 bg-primary-base" : "scale-0 bg-white"
          } transition-transform ease-in-out duration-200`}
        />
      </label>
      <div className={`flex flex-col ${helpText ? "gap-4px" : ""}`}>
        <label
          htmlFor={id}
          className={`text-body font-medium select-none ${
            disabled
              ? "text-copy-disabled cursor-not-allowed"
              : "text-copy-caption cursor-pointer"
          }`}
        >
          {label ? label : "Radio Button"}
        </label>
        <span className="flex flex-row gap-4px text-body text-gray-800">
          {helpText}
        </span>
      </div>
    </div>
  );
};

export default RadioButton;
