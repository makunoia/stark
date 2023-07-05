"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _RemixIcon = _interopRequireDefault(require("./RemixIcon"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var Checkbox = function Checkbox(_ref) {
  var id = _ref.id,
    name = _ref.name,
    label = _ref.label,
    helpText = _ref.helpText,
    checked = _ref.checked,
    disabled = _ref.disabled,
    onChange = _ref.onChange,
    contained = _ref.contained;
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

  // "p-8px border border-outline-default bg-white rounded-4px w-fit"
  // "p-8px border border-primary-base bg-white rounded-4px w-fit"
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "flex flex-row gap-8px items-center ".concat(contained ? checked ? "p-8px border border-primary-base bg-white rounded-4px w-fit" : "p-8px border border-outline-default bg-white rounded-4px w-fit" : "")
  }, /*#__PURE__*/_react.default.createElement("div", {
    onClick: handleClick,
    className: "w-20px h-20px min-w-[20px] min-h-[20px] flex justify-center items-center rounded-4px border transition ease-in ".concat(disabled ? "bg-fill-disabled cursor-not-allowed" : checked ? "bg-primary-base border-primary-base cursor-pointer" : "bg-fill-default border-outline-default  hover:bg-primary-muted cursor-pointer", " ").concat(helpText ? "mb-16px" : "")
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "text-[16px] ".concat(disabled ? "text-copy-disabled" : "text-white", " font-semibold w-full h-full flex items-center transition-all ease-in duration-75 justify-center ").concat(checked ? "scale-1" : "scale-50")
  }, checked ? /*#__PURE__*/_react.default.createElement(_RemixIcon.default, {
    name: "check-fill"
  }) : ""), /*#__PURE__*/_react.default.createElement("input", {
    type: "checkbox",
    id: id,
    name: name,
    value: label,
    checked: checked,
    onChange: handleClick,
    disabled: disabled,
    hidden: true
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "flex flex-col ".concat(helpText ? "gap-4px" : "")
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: id,
    className: "text-body font-medium select-none ".concat(disabled ? "text-copy-disabled cursor-not-allowed" : "text-copy-caption cursor-pointer", " ").concat(contained && checked && "text-primary-base")
  }, label ? label : "Checkbox"), /*#__PURE__*/_react.default.createElement("span", {
    className: "flex flex-row gap-4px text-body text-gray-800"
  }, helpText)));
};
Checkbox.propTypes = {
  id: _propTypes.default.string.isRequired,
  name: _propTypes.default.string.isRequired,
  label: _propTypes.default.string,
  helpText: _propTypes.default.string,
  checked: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  onChange: _propTypes.default.func.isRequired
};
var _default = Checkbox;
exports.default = _default;