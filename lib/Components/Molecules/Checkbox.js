"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _jsxRuntime = require("react/jsx-runtime");
var Checkbox = function Checkbox(_ref) {
  var id = _ref.id,
    name = _ref.name,
    label = _ref.label,
    helpText = _ref.helpText,
    checked = _ref.checked,
    disabled = _ref.disabled,
    onChange = _ref.onChange;
  var handleClick = function handleClick(e) {
    if (disabled) return;

    // Prevents double event firing
    e.preventDefault();
    e.stopPropagation();
    onChange({
      target: {
        checked: !checked
      }
    });
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "flex flex-row gap-8px items-center",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      onClick: handleClick,
      className: "w-20px h-20px min-w-[20px] min-h-[20px] flex justify-center items-center rounded-4px border transition ease-in ".concat(disabled ? "bg-fill-disabled cursor-not-allowed" : checked ? "bg-primary-base border-primary-base cursor-pointer" : "bg-fill-default border-outline-default  hover:bg-primary-muted cursor-pointer", " ").concat(helpText ? "mb-16px" : ""),
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        className: "text-[16px] ".concat(disabled ? "text-copy-disabled" : "text-white", " font-semibold w-full h-full flex items-center transition-all ease-in duration-75 justify-center ").concat(checked ? "scale-1" : "scale-50"),
        children: checked ? /*#__PURE__*/(0, _jsxRuntime.jsx)("i", {
          className: "ri-check-fill"
        }) : ""
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
        type: "checkbox",
        id: id,
        name: name,
        value: label,
        checked: checked,
        onChange: handleClick,
        disabled: disabled,
        hidden: true
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "flex flex-col ".concat(helpText ? "gap-4px" : ""),
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
        htmlFor: id,
        className: "text-body font-medium select-none ".concat(disabled ? "text-copy-disabled cursor-not-allowed" : "text-copy-caption cursor-pointer"),
        children: label ? label : "Checkbox"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        className: "flex flex-row gap-4px text-body text-gray-800",
        children: helpText
      })]
    })]
  });
};
var _default = Checkbox;
exports.default = _default;