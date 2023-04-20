import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import InputMask from "react-input-mask";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import the styles

const InputField = ({
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
  mask, //providing a mask will automatically turn the InputField to a MaskedInput
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
      className={`input grow outline-none h-full py-12px bg-transparent ${
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
          : "bg-primitive-white text-black "
      } `}
    />
  );

  const maskedInput = (
    <InputMask
      mask={mask}
      value={inputValue}
      onChange={handleChange}
      onFocus={handleFocus}
      onBlur={handleBlur}
      disabled={disabled}
      maskChar={placeholder}
    >
      {(inputProps) => (
        <input
          {...inputProps}
          type="text"
          required={required}
          placeholder={placeholder ? placeholder : ""}
          disabled={disabled}
          readOnly={readOnly}
          name={name}
          id={id}
          className={`input grow outline-none h-full py-12px bg-transparent ${
            disabled ? "cursor-not-allowed" : ""
          } ${!leadingItem && "pl-12px"}`}
        />
      )}
    </InputMask>
  );

  const richTextField = (
    <div
      className="rich-text-editor"
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <ReactQuill
        value={inputValue}
        onChange={setInputValue}
        readOnly={readOnly}
        theme="snow"
        modules={{
          toolbar: [
            ["bold", "italic", "underline", "strike"],
            [{ list: "ordered" }, { list: "bullet" }],
            ["link", "image"],
          ],
        }}
        className={`quill-editor ${
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
            : "bg-primitive-white text-black "
        }`}
      />
      <style>
        {`
          .rich-text-editor .ql-toolbar {
            display: flex;
            flex-wrap: nowrap;
            overflow-x: auto;
          }

          .ql-toolbar.ql-snow .ql-formats {
            display: flex;
            margin: 0px
          }

          .ql-toolbar.ql-snow {
            border-radius: 4px 4px 0 0;
            border: solid 1px #E4E4E4
          }
  
          .rich-text-editor .ql-container {
            border-top: none !important;
            border-radius: 0 0 4px 4px;
            height: 200px;
            border: solid 1px #E4E4E4
          }
        `}
      </style>
    </div>
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

      {type === "textarea" ? (
        textArea
      ) : type === "richtext" ? (
        richTextField
      ) : (
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
              : "border-outline-default  placeholder-copy-placeholder"
          } ${
            disabled
              ? "bg-fill-disabled text-copy-disabled cursor-not-allowed"
              : "bg-primitive-white text-black "
          } `}
        >
          {leadingItem && ( //prioritize Leading Icon
            <div className="w-16px h-16px font-semibold text-body ml-12px">
              {leadingItem}
            </div>
          )}

          {mask ? maskedInput : inputField}

          {/* handle password input type (no trailing items, instead show eye icon) */}
          {type !== "password" ? (
            <div
              className={`flex flex-row justify-center items-center ${
                attachedButton ? "gap-12px " : "pr-12px"
              }`}
            >
              {trailingItem && (
                <div
                  className={`w-16px h-16px font-semibold text-body min-w-fit`}
                >
                  {trailingItem}
                </div>
              )}
              {/* attached button */}
              {attachedButton && (
                <div className="rounded-r-4px">
                  {React.cloneElement(attachedButton, { attached: true })}
                </div>
              )}
            </div>
          ) : (
            <div
              className={`w-16px h-16px font-semibold text-body min-w-fit pr-12px cursor-pointer`}
              onClick={togglePasswordVisibility}
            >
              {showPassword ? (
                <i className="ri-eye-line"></i>
              ) : (
                <i className="ri-eye-close-line"></i>
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
          {error && <i className="ri-alert-fill"></i>}
          {error ? error : helpText}
        </p>
      )}
    </div>
  );
};
InputField.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  labelAction: PropTypes.shape({
    label: PropTypes.string.isRequired,
    action: PropTypes.func.isRequired,
  }),
  type: PropTypes.oneOf(["text", "password", "number", "email", "textarea"]),
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

InputField.defaultProps = {
  type: "text",
  optional: false,
  required: false,
};
export default InputField;
