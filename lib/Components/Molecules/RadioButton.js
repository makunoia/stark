"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var RadioButton = function RadioButton(_ref) {
  var id = _ref.id,
    name = _ref.name,
    label = _ref.label,
    helpText = _ref.helpText,
    value = _ref.value,
    checked = _ref.checked,
    onChange = _ref.onChange,
    disabled = _ref.disabled;
  var handleChange = function handleChange(isChecked) {
    if (onChange) {
      onChange(isChecked);
    }
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "flex items-center justify-center gap-8px w-fit"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "radio",
    id: id,
    name: name,
    value: value,
    checked: checked,
    onChange: function onChange() {
      return handleChange(!checked);
    },
    disabled: disabled,
    hidden: true
  }), /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: id,
    className: "cursor-pointer relative flex items-center justify-center min-w-[20px] min-h-[20px] border-2 rounded-[100%] ".concat(checked ? "bg-primary-muted border-primary-base" : "bg-white border-outline-default", " transition-colors ease-in-out duration-200 ").concat(helpText ? "mb-[18px]" : "")
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "absolute rounded-[100%] w-[10px] h-[10px] transform ".concat(checked ? "scale-100 bg-primary-base" : "scale-0 bg-white", " transition-transform ease-in-out duration-200")
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "flex flex-col ".concat(helpText ? "gap-4px" : "")
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: id,
    className: "text-body font-medium select-none ".concat(disabled ? "text-copy-disabled cursor-not-allowed" : "text-copy-caption cursor-pointer")
  }, label ? label : "Radio Button"), /*#__PURE__*/_react.default.createElement("span", {
    className: "flex flex-row gap-4px text-body text-gray-800"
  }, helpText)));
};
var _default = RadioButton;
exports.default = _default;