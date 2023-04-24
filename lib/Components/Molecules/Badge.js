"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _clsx = _interopRequireDefault(require("clsx"));
var _RemixIcon = _interopRequireDefault(require("./RemixIcon"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var Badge = function Badge(_ref) {
  var label = _ref.label,
    _ref$primary = _ref.primary,
    primary = _ref$primary === void 0 ? false : _ref$primary,
    _ref$secondary = _ref.secondary,
    secondary = _ref$secondary === void 0 ? false : _ref$secondary,
    _ref$success = _ref.success,
    success = _ref$success === void 0 ? false : _ref$success,
    _ref$info = _ref.info,
    info = _ref$info === void 0 ? false : _ref$info,
    _ref$warning = _ref.warning,
    warning = _ref$warning === void 0 ? false : _ref$warning,
    _ref$danger = _ref.danger,
    danger = _ref$danger === void 0 ? false : _ref$danger,
    _ref$outline = _ref.outline,
    outline = _ref$outline === void 0 ? false : _ref$outline,
    leadingItem = _ref.leadingItem,
    dismissible = _ref.dismissible,
    onDismiss = _ref.onDismiss,
    _ref$circular = _ref.circular,
    circular = _ref$circular === void 0 ? false : _ref$circular;
  var colorClasses = {
    default: outline ? "bg-fill-default text-black border border-outline-default" : "bg-white text-black border border-outline-default",
    primary: outline ? "bg-primary-muted text-primary-base border border-primary-base" : "bg-primary-base text-white border border-primary-base",
    secondary: outline ? "bg-secondary-muted text-secondary-base border border-secondary-base" : "bg-secondary-base text-white border border-secondary-base",
    success: outline ? "bg-success-muted text-success-base border border-success-base" : "bg-success-base text-white border border-success-base",
    info: outline ? "bg-info-muted text-info-base border border-info-base" : "bg-info-base text-white border border-info-base",
    warning: outline ? "bg-warning-muted text-warning-base border border-warning-base" : "bg-warning-base text-black border border-warning-base",
    danger: outline ? "bg-danger-muted text-danger-base border border-danger-base" : "bg-danger-base text-white border border-danger-base"
  };
  var sizeClasses = {
    default: "text-[12px] py-4px px-8px"
  };
  var color = primary ? "primary" : secondary ? "secondary" : success ? "success" : info ? "info" : warning ? "warning" : danger ? "danger" : "default";
  var size = "default";
  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _clsx.default)("flex flex-row items-center justify-center gap-2px  ".concat(circular ? "rounded-16px" : "rounded-4px"), colorClasses[color], sizeClasses[size])
  }, leadingItem && /*#__PURE__*/_react.default.createElement("span", {
    className: "text-[16px] h-[16px] flex justify-between items-center overflow-clip mr-2px"
  }, leadingItem), /*#__PURE__*/_react.default.createElement("span", {
    className: "text-body font-medium tracking-wide whitespace-nowrap"
  }, label), dismissible && /*#__PURE__*/_react.default.createElement("button", {
    className: "text-[16px] w-[16px] h-[16px] flex justify-between items-center font-bold outline-none",
    onClick: onDismiss ? onDismiss : function () {
      return console.log("Add dismiss functionality (supply a function to onDismiss prop)");
    }
  }, /*#__PURE__*/_react.default.createElement(_RemixIcon.default, {
    name: "close-fill"
  })));
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