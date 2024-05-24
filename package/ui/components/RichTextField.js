import React, { useState } from "react";
import PropTypes from "prop-types";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import RemixIcon from "./molecules/RemixIcon";

const RichTextField = ({
  id,
  label,
  readOnly,
  optional,
  value,
  helpText,
  error,
  labelAction,
}) => {
  const [inputValue, setInputValue] = useState(value ? value : "");
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

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
      <div
        className={`rich-text-editor  rounded-4px overflow-hidden ${
          error ? " border-primary-base border " : ""
        }`}
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
          onFocus={handleFocus}
          onBlur={handleBlur}
          className={`quill-editor ${
            isFocused ? "ring-focusRing/40" : "ring-focusRing/0"
          } border-outline-default  placeholder-copy-placeholder bg-white text-black`}
        />
      </div>
      {(helpText || error) && (
        <p
          className={`flex flex-row gap-4px text-caption ${
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

RichTextField.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  readOnly: PropTypes.bool,
  optional: PropTypes.bool,
  value: PropTypes.string,
  helpText: PropTypes.string,
  error: PropTypes.string,
  labelAction: PropTypes.shape({
    label: PropTypes.string.isRequired,
    action: PropTypes.func.isRequired,
  }),
};

export default RichTextField;
