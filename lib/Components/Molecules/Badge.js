"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _clsx = _interopRequireDefault(require("clsx"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Badge = ({
  label,
  primary = false,
  secondary = false,
  success = false,
  info = false,
  warning = false,
  danger = false,
  outline = false,
  leadingItem,
  dismissible,
  onDismiss,
  circular = false
}) => {
  const colorClasses = {
    default: outline ? "bg-fill-default text-black border border-outline-default" : "bg-white text-black border border-outline-default",
    primary: outline ? "bg-primary-muted text-primary-base border border-primary-base" : "bg-primary-base text-white border border-primary-base",
    secondary: outline ? "bg-secondary-muted text-secondary-base border border-secondary-base" : "bg-secondary-base text-white border border-secondary-base",
    success: outline ? "bg-success-muted text-success-base border border-success-base" : "bg-success-base text-white border border-success-base",
    info: outline ? "bg-info-muted text-info-base border border-info-base" : "bg-info-base text-white border border-info-base",
    warning: outline ? "bg-warning-muted text-warning-base border border-warning-base" : "bg-warning-base text-black border border-warning-base",
    danger: outline ? "bg-danger-muted text-danger-base border border-danger-base" : "bg-danger-base text-white border border-danger-base"
  };
  const sizeClasses = {
    default: "text-[12px] py-4px px-8px"
  };
  const color = primary ? "primary" : secondary ? "secondary" : success ? "success" : info ? "info" : warning ? "warning" : danger ? "danger" : "default";
  const size = "default";
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: (0, _clsx.default)(`flex flex-row items-center justify-center gap-2px  ${circular ? "rounded-16px" : "rounded-4px"}`, colorClasses[color], sizeClasses[size]),
    children: [leadingItem && /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      className: "text-[16px] h-[16px] flex justify-between items-center overflow-clip mr-2px",
      children: leadingItem
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      className: "text-body font-medium tracking-wide",
      children: label
    }), dismissible && /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
      className: "text-[16px] w-[16px] h-[16px] flex justify-between items-center font-bold outline-none",
      onClick: onDismiss ? onDismiss : () => console.log("Add dismiss functionality (supply a function to onDismiss prop)"),
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("i", {
        className: "ri-close-fill"
      })
    })]
  });
};
Badge.propTypes = {
  label: _propTypes.default.string.isRequired,
  primary: _propTypes.default.bool,
  secondary: _propTypes.default.bool,
  success: _propTypes.default.bool,
  info: _propTypes.default.bool,
  warning: _propTypes.default.bool,
  danger: _propTypes.default.bool,
  outline: _propTypes.default.bool,
  leadingItem: _propTypes.default.node,
  dismissible: _propTypes.default.bool
};
var _default = Badge;
exports.default = _default;