import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import InputMask from "react-input-mask";
import RemixIcon from "./molecules/RemixIcon";

const MaskedInput = ({
  label,
  id,
  labelAction, //labelAction={{label: "", action: () => console.log("function")}}
  name,
  disabled,
  readOnly,
  optional = false,
  required = false,
  helpText,
  placeholder,
  error,
  leadingItem, //can either be an icon or a string
  trailingItem, //can either be an icon or a string
  attachedButton, //attach a button
  mask, //providing a mask will automatically turn the InputField to a MaskedInput
  value,
}) => {
  const [inputValue, setInputValue] = useState(value ? value : "");
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const maskedInput = (
    <InputMask
      mask={mask}
      value={inputValue}
      onChange={handleChange}
      onFocus={handleFocus}
      onBlur={handleBlur}
      disabled={disabled}
      maskChar={placeholder}
      readOnly={readOnly}
    >
      {(inputProps) => (
        <input
          {...inputProps}
          type="text"
          required={required}
          placeholder={placeholder ? placeholder : ""}
          disabled={disabled}
          name={name}
          id={id}
          className={`input w-full h-full py-10px bg-transparent outline-none ${
            disabled ? "cursor-not-allowed" : ""
          } ${!leadingItem && "pl-12px"}`}
        />
      )}
    </InputMask>
  );

  return (
    <div className={`text-field flex flex-col gap-8px`}>
      <div className="label-container text-body flex flex-row justify-between items-center">
        <label htmlFor={`${id}`} className="label-text">
          <span className="font-medium capitalize text-black">{label}</span>
          {optional && (
            <span className="label-optional italic text-gray-800">
              {" "}
              - optional
            </span>
          )}
        </label>
        {labelAction && (
          <button
            className="hover:underline underline-offset-2 text-info-base hover:text-info-hover"
            onClick={labelAction.action}
            type="button"
          >
            {labelAction.label}
          </button>
        )}
      </div>

      <div
        className={`flex flex-row gap-4px overflow-clip justify-center items-center rounded-4px text-body outline-none border transition-all ease-in ring  ${
          isFocused
            ? error
              ? "ring-danger-base/40"
              : "ring-focusRing/40"
            : "ring-focusRing/0"
        } ${
          error
            ? "border-danger-base bg-danger-muted text-danger-base placeholder-danger-base/30"
            : "border-outline-default placeholder-copy-placeholder bg-white"
        } ${
          disabled
            ? "bg-fill-disabled text-copy-disabled cursor-not-allowed"
            : "text-black"
        } `}
      >
        {leadingItem && ( //prioritize Leading Icon
          <div className="w-fit h-14px font-semibold text-body ml-12px">
            {leadingItem}
          </div>
        )}

        {maskedInput}

        <div
          className={`flex flex-row justify-center items-center grow w-fit ${
            attachedButton ? "gap-12px" : "pr-12px"
          }`}
        >
          {trailingItem && (
            <div className={`w-fit h-14px text-body`}>{trailingItem}</div>
          )}
          {/* attached button */}
          {attachedButton && (
            <div className="rounded-r-4px">
              {React.cloneElement(attachedButton, { attached: true })}
            </div>
          )}
        </div>
      </div>

      {(helpText || error) && (
        <p
          className={`flex flex-row gap-4px text-caption tracking-wide ${
            error ? "text-danger-base" : "text-gray-800"
          }`}
        >
          {error && <RemixIcon name="alert-fill" />}
          {error ? error : helpText}
        </p>
      )}
    </div>
  );
};

MaskedInput.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  labelAction: PropTypes.shape({
    label: PropTypes.string.isRequired,
    action: PropTypes.func.isRequired,
  }),
  name: PropTypes.string,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  optional: PropTypes.bool,
  required: PropTypes.bool,
  helpText: PropTypes.string,
  placeholder: PropTypes.string,
  error: PropTypes.string,
  leadingItem: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  trailingItem: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  attachedButton: PropTypes.element,
};

export default MaskedInput;
