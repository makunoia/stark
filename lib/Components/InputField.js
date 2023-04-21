"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactInputMask = _interopRequireDefault(require("react-input-mask"));
var _reactQuill = _interopRequireDefault(require("react-quill"));
require("react-quill/dist/quill.snow.css");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
// Import the styles
const InputField = ({
  label,
  id,
  labelAction,
  //labelAction={{label: "", action: () => console.log("function")}}
  type = "text",
  //text, password, number, email
  name,
  disabled,
  readOnly,
  optional = false,
  required = false,
  helpText,
  placeholder,
  error,
  leadingItem,
  //can either be an icon or a string
  trailingItem,
  //can either be an icon or a string
  attachedButton,
  //attach a button
  mask,
  //providing a mask will automatically turn the InputField to a MaskedInput
  value
}) => {
  const [inputValue, setInputValue] = (0, _react.useState)(value ? value : "");
  const [isFocused, setIsFocused] = (0, _react.useState)(false);
  const [showPassword, setShowPassword] = (0, _react.useState)(false);
  const handleChange = event => {
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
  const inputField = /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
    type: showPassword ? "text" : type,
    required: required,
    placeholder: placeholder ? placeholder : "",
    disabled: disabled,
    readOnly: readOnly,
    onChange: handleChange,
    onFocus: handleFocus,
    onBlur: handleBlur,
    name: name,
    value: inputValue,
    id: id,
    className: `input grow outline-none h-full py-12px bg-transparent ${disabled ? "cursor-not-allowed" : ""} ${!leadingItem && "pl-12px"}`
  });
  const textArea = /*#__PURE__*/(0, _jsxRuntime.jsx)("textarea", {
    rows: "3",
    warp: "soft",
    type: type,
    required: required,
    placeholder: placeholder ? placeholder : "",
    disabled: disabled,
    readOnly: readOnly,
    onChange: handleChange,
    onFocus: handleFocus,
    onBlur: handleBlur,
    name: name,
    value: inputValue,
    id: id,
    className: `resize-none input p-12px rounded-4px text-body outline-none border transition-all ease-in ring  ${isFocused ? error ? "ring-danger-base/40" : "ring-focusRing/40" : "ring-focusRing/0"} ${error ? "border-danger-base bg-danger-muted text-danger-base placeholder-danger-base/30" : "border-outline-default  placeholder-copy-placeholder"} ${disabled ? "bg-fill-disabled text-copy-disabled cursor-not-allowed" : "bg-white text-black "} `
  });
  const maskedInput = /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactInputMask.default, {
    mask: mask,
    value: inputValue,
    onChange: handleChange,
    onFocus: handleFocus,
    onBlur: handleBlur,
    disabled: disabled,
    maskChar: placeholder,
    children: inputProps => /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
      ...inputProps,
      type: "text",
      required: required,
      placeholder: placeholder ? placeholder : "",
      disabled: disabled,
      readOnly: readOnly,
      name: name,
      id: id,
      className: `input grow outline-none h-full py-12px bg-transparent ${disabled ? "cursor-not-allowed" : ""} ${!leadingItem && "pl-12px"}`
    })
  });
  const richTextField = /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "rich-text-editor",
    style: {
      display: "flex",
      flexDirection: "column"
    },
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactQuill.default, {
      value: inputValue,
      onChange: setInputValue,
      readOnly: readOnly,
      theme: "snow",
      modules: {
        toolbar: [["bold", "italic", "underline", "strike"], [{
          list: "ordered"
        }, {
          list: "bullet"
        }], ["link", "image"]]
      },
      className: `quill-editor ${isFocused ? error ? "ring-danger-base/40" : "ring-focusRing/40" : "ring-focusRing/0"} ${error ? "border-danger-base bg-danger-muted text-danger-base placeholder-danger-base/30" : "border-outline-default  placeholder-copy-placeholder"} ${disabled ? "bg-fill-disabled text-copy-disabled cursor-not-allowed" : "bg-white text-black "}`
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("style", {
      children: `
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
        `
    })]
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: `text-field flex flex-col gap-8px`,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "label-container text-body flex flex-row justify-between items-center",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("label", {
        htmlFor: `${id}`,
        className: "label-text",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
          className: "font-medium capitalize text-black",
          children: label
        }), optional && /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
          className: "label-optional italic text-gray-800",
          children: [" ", "- optional"]
        })]
      }), labelAction && /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
        className: "hover:underline underline-offset-2 text-info-base hover:text-info-hover",
        onClick: labelAction.action,
        type: "button",
        children: labelAction.label
      })]
    }), type === "textarea" ? textArea : type === "richtext" ? richTextField : /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: `flex flex-row gap-4px overflow-clip justify-center items-center rounded-4px text-body outline-none border transition-all ease-in ring  ${isFocused ? error ? "ring-danger-base/40" : "ring-focusRing/40" : "ring-focusRing/0"} ${error ? "border-danger-base bg-danger-muted text-danger-base placeholder-danger-base/30" : "border-outline-default  placeholder-copy-placeholder"} ${disabled ? "bg-fill-disabled text-copy-disabled cursor-not-allowed" : "bg-white text-black "} `,
      children: [leadingItem &&
      /*#__PURE__*/
      //prioritize Leading Icon
      (0, _jsxRuntime.jsx)("div", {
        className: "w-16px h-16px font-semibold text-body ml-12px",
        children: leadingItem
      }), mask ? maskedInput : inputField, type !== "password" ? /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: `flex flex-row justify-center items-center ${attachedButton ? "gap-12px " : "pr-12px"}`,
        children: [trailingItem && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: `w-16px h-16px font-semibold text-body min-w-fit`,
          children: trailingItem
        }), attachedButton && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "rounded-r-4px",
          children: /*#__PURE__*/_react.default.cloneElement(attachedButton, {
            attached: true
          })
        })]
      }) : /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: `w-16px h-16px font-semibold text-body min-w-fit pr-12px cursor-pointer`,
        onClick: togglePasswordVisibility,
        children: showPassword ? /*#__PURE__*/(0, _jsxRuntime.jsx)("i", {
          className: "ri-eye-line"
        }) : /*#__PURE__*/(0, _jsxRuntime.jsx)("i", {
          className: "ri-eye-close-line"
        })
      })]
    }), (helpText || error) && /*#__PURE__*/(0, _jsxRuntime.jsxs)("p", {
      className: `flex flex-row gap-4px text-caption tracking-wide ${error ? "text-danger-base" : "text-gray-800"}`,
      children: [error && /*#__PURE__*/(0, _jsxRuntime.jsx)("i", {
        className: "ri-alert-fill"
      }), error ? error : helpText]
    })]
  });
};
InputField.propTypes = {
  label: _propTypes.default.string.isRequired,
  id: _propTypes.default.string.isRequired,
  labelAction: _propTypes.default.shape({
    label: _propTypes.default.string.isRequired,
    action: _propTypes.default.func.isRequired
  }),
  type: _propTypes.default.oneOf(["text", "password", "number", "email", "textarea", "richtext"]),
  name: _propTypes.default.string,
  disabled: _propTypes.default.bool,
  readOnly: _propTypes.default.bool,
  optional: _propTypes.default.bool,
  required: _propTypes.default.bool,
  helpText: _propTypes.default.string,
  placeholder: _propTypes.default.string,
  error: _propTypes.default.string,
  leadingItem: _propTypes.default.oneOfType([_propTypes.default.node, _propTypes.default.string]),
  trailingItem: _propTypes.default.oneOfType([_propTypes.default.node, _propTypes.default.string]),
  attachedButton: _propTypes.default.element
};
var _default = InputField;
exports.default = _default;