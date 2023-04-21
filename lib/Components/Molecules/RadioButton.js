"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const RadioButton = ({
  id,
  name,
  label,
  helpText,
  value,
  checked,
  onChange,
  disabled
}) => {
  const handleChange = isChecked => {
    if (onChange) {
      onChange(isChecked);
    }
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "flex items-center justify-center gap-8px ",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
      type: "radio",
      id: id,
      name: name,
      value: value,
      checked: checked,
      onChange: () => handleChange(!checked),
      disabled: disabled,
      hidden: true
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
      htmlFor: id,
      className: `cursor-pointer relative flex items-center justify-center min-w-[20px] min-h-[20px] border-2 rounded-[100%] ${checked ? "bg-primary-muted border-primary-base" : "bg-white border-outline-default"} transition-colors ease-in-out duration-200 ${helpText ? "mb-[18px]" : ""}`,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        className: `absolute rounded-[100%] w-[10px] h-[10px] transform ${checked ? "scale-100 bg-primary-base" : "scale-0 bg-white"} transition-transform ease-in-out duration-200`
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: `flex flex-col ${helpText ? "gap-4px" : ""}`,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
        htmlFor: id,
        className: `text-body font-medium select-none ${disabled ? "text-copy-disabled cursor-not-allowed" : "text-copy-caption cursor-pointer"}`,
        children: label ? label : "Radio Button"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        className: "flex flex-row gap-4px text-body text-gray-800",
        children: helpText
      })]
    })]
  });
};
var _default = RadioButton;
exports.default = _default;