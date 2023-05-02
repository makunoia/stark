import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import RemixIcon from "./molecules/RemixIcon";
import Button from "./Button";
import IconButton from "./IconButton";

const TextField = ({
  label,
  id,
  labelAction, //labelAction={{label: "", action: () => console.log("function")}}
  type = "text", //text, password, number, email
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
  value,
}) => {
  const [inputValue, setInputValue] = useState(value ? value : "");
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const inputField = (
    <input
      type={showPassword ? "text" : type}
      required={required}
      placeholder={placeholder ? placeholder : ""}
      disabled={disabled}
      readOnly={readOnly}
      onChange={handleChange}
      onFocus={handleFocus}
      onBlur={handleBlur}
      name={name}
      value={inputValue}
      id={id}
      className={`input w-full h-full py-10px bg-transparent outline-none ${
        disabled ? "cursor-not-allowed" : ""
      } ${!leadingItem && "pl-12px"}`}
    />
  );

  const textArea = (
    <textarea
      rows="3"
      warp="soft"
      type={type}
      required={required}
      placeholder={placeholder ? placeholder : ""}
      disabled={disabled}
      readOnly={readOnly}
      onChange={handleChange}
      onFocus={handleFocus}
      onBlur={handleBlur}
      name={name}
      value={inputValue}
      id={id}
      className={`resize-none input p-12px rounded-4px text-body outline-none border transition-all ease-in ring  ${
        isFocused
          ? error
            ? "ring-danger-base/40"
            : "ring-focusRing/40"
          : "ring-focusRing/0"
      } ${
        error
          ? "border-danger-base bg-danger-muted text-danger-base placeholder-danger-base/30"
          : "border-outline-default  placeholder-copy-placeholder"
      } ${
        disabled
          ? "bg-fill-disabled text-copy-disabled cursor-not-allowed"
          : "bg-white text-black "
      } `}
    />
  );

  return (
    <div className={`text-field flex flex-col gap-4px`}>
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

      {type === "textarea" ? (
        textArea
      ) : (
        //if not TextArea render MaskedInput or TextField
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

          {inputField}

          {/* handle password input type (no trailing items, instead show eye icon) */}
          {type !== "password" ? (
            trailingItem || attachedButton ? (
              <div
                className={`flex flex-row justify-center items-center grow w-fit ${
                  attachedButton ? "gap-12px" : "pr-12px"
                }`}
              >
                {trailingItem && (
                  <div className={`h-14px text-body w-fit`}>{trailingItem}</div>
                )}
                {/* attached button */}
                {attachedButton && (
                  <div className="rounded-r-4px w-fit">
                    {attachedButton.type === "icon" ? (
                      <IconButton
                        attached
                        icon={<RemixIcon name={attachedButton.remixIcon} />}
                        variant={attachedButton.variant}
                        onClick={attachedButton.onClick}
                      />
                    ) : (
                      <Button
                        attached
                        label={attachedButton.label}
                        variant={attachedButton.variant}
                        onClick={attachedButton.onClick}
                        leadingIcon={
                          attachedButton.icon && (
                            <RemixIcon name={attachedButton.remixIcon} />
                          )
                        }
                      />
                    )}

                    {/* {React.cloneElement(attachedButton, { attached: true })} */}
                  </div>
                )}
              </div>
            ) : (
              ""
            )
          ) : (
            <div
              className={`w-16px h-14px font-semibold text-body min-w-fit pr-12px cursor-pointer`}
              onClick={togglePasswordVisibility}
            >
              {showPassword ? (
                <RemixIcon name="eye-line" />
              ) : (
                <RemixIcon name="eye-close-line" />
              )}
            </div>
          )}
        </div>
      )}

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
TextField.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  labelAction: PropTypes.shape({
    label: PropTypes.string.isRequired,
    action: PropTypes.func.isRequired,
  }),
  type: PropTypes.oneOf([
    "text",
    "password",
    "number",
    "email",
    "textarea",
    "richtext",
  ]),
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

export default TextField;
