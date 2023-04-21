import React from "react";
import Checkbox from "./molecules/Checkbox";
import RadioButton from "./molecules/RadioButton";
import PropTypes from "prop-types";

const OptionList = ({
  type = "radio",
  options,
  selectedValues = [], //use this prop to set which items are checked on load
  onChange,
  disabled,
  name, //provide a name for Radio Button Groups
  error,
  horizontal,
  className,
}) => {
  const handleChange = (id, isChecked) => {
    let newSelectedValues;
    if (type === "radio") {
      newSelectedValues = isChecked ? [id] : [];
    } else {
      if (isChecked) {
        newSelectedValues = [...selectedValues, id];
      } else {
        newSelectedValues = selectedValues.filter((value) => value !== id);
      }
    }

    if (onChange) {
      onChange(newSelectedValues);
    }
  };

  return (
    <div className={`flex flex-col gap-16px ${className}`}>
      <div
        className={`flex items-start ${
          horizontal ? "flex-row gap-16px " : "flex-col gap-12px "
        }`}
      >
        {options.map((option) => {
          const isChecked = selectedValues.includes(option.id);
          if (type === "radio") {
            return (
              <RadioButton
                key={option.id}
                id={option.id}
                name={name}
                label={option.label}
                helpText={option.helpText}
                value={option.id}
                checked={isChecked}
                onChange={() => handleChange(option.id, !isChecked)}
                disabled={disabled}
              />
            );
          } else {
            return (
              <Checkbox
                key={option.id}
                id={option.id}
                name={option.name}
                label={option.label}
                helpText={option.helpText}
                disabled={disabled}
                onChange={(e) => handleChange(option.id, e.target.checked)}
                checked={isChecked}
              />
            );
          }
        })}
      </div>
      {error && (
        <p className={`flex flex-row gap-4px text-body text-danger-base`}>
          <i className="ri-alert-fill"></i>
          {error}
        </p>
      )}
    </div>
  );
};

OptionList.propTypes = {
  type: PropTypes.oneOf(["radio", "checkbox"]),
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      label: PropTypes.string.isRequired,
      helpText: PropTypes.string,
      name: PropTypes.string,
    })
  ).isRequired,
  selectedValues: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  ),
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  name: PropTypes.string,
  error: PropTypes.string,
  horizontal: PropTypes.bool,
};

OptionList.defaultProps = {
  type: "radio",
  selectedValues: [],
  disabled: false,
  horizontal: false,
};

export default OptionList;
