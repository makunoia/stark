"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _jsxRuntime = require("react/jsx-runtime");
var Switch = function Switch(_ref) {
  var id = _ref.id,
    label = _ref.label,
    name = _ref.name,
    helpText = _ref.helpText,
    checked = _ref.checked,
    onChange = _ref.onChange,
    disabled = _ref.disabled;
  var handleClick = function handleClick(e) {
    if (disabled) return;

    // Prevents double event firing
    e.preventDefault();
    e.stopPropagation();
    if (onChange) {
      onChange(!checked);
    }
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "flex flex-row gap-12px justify-center items-center w-fit",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      onClick: handleClick,
      className: "switch relative inline-block w-[40px] h-[24px] border ".concat(checked ? "bg-success-base border-success-base" : "bg-gray-300 border-outline-default", " ").concat(helpText ? "mb-8px" : "", " cursor-pointer transition-all rounded-[28px]"),
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
        type: "checkbox",
        id: id,
        name: name,
        checked: checked,
        onChange: onChange,
        disabled: disabled,
        hidden: true
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        className: "".concat(checked ? "translate-x-[20px]" : "translate-x-[4px] ", " absolute top-[3px] inset-y-0 flex items-center justify-center transition-all duration-300 transform  bg-white border border-gray-300 rounded-[100%] shadow  w-[16px] h-[16px]"),
        children: checked ? /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "text-success-base font-bold text-[12px]",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("i", {
            className: "ri-check-line"
          })
        }) : /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "text-copy-disabled font-bold text-[12px]",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("i", {
            className: "ri-close-line "
          })
        })
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "flex flex-col ".concat(helpText ? "gap-4px" : ""),
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
        htmlFor: id,
        className: "text-body font-medium select-none ".concat(disabled ? "text-copy-disabled cursor-not-allowed" : "text-copy-caption cursor-pointer"),
        children: label
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        className: "flex flex-row gap-4px text-body text-gray-800",
        children: helpText
      })]
    })]
  });
};
var _default = Switch;
exports.default = _default;