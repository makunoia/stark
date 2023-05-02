"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _clsx = _interopRequireDefault(require("clsx"));
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _RemixIcon = _interopRequireDefault(require("./molecules/RemixIcon"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var IconButton = function IconButton(_ref) {
  var id = _ref.id,
    icon = _ref.icon,
    type = _ref.type,
    _ref$variant = _ref.variant,
    variant = _ref$variant === void 0 ? "default" : _ref$variant,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? "default" : _ref$size,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    _ref$loading = _ref.loading,
    loading = _ref$loading === void 0 ? false : _ref$loading,
    _ref$fullWidth = _ref.fullWidth,
    fullWidth = _ref$fullWidth === void 0 ? false : _ref$fullWidth,
    onClick = _ref.onClick,
    className = _ref.className,
    attached = _ref.attached;
  var buttonType = type === "outline" ? "outline" : type === "text" ? "text" : "solid";
  var buttonVariant = variant !== "default" ? variant : "default";
  var buttonSize = size === "small" ? "small" : size === "large" ? "large" : "default";
  var state = disabled ? "disabled" : loading ? "loading" : "default";
  var sizeClasses = {
    small: "text-sm px-8px py-8px",
    default: "text-base px-10px py-10px",
    large: "text-lg px-16px py-16px"
  };
  var solidButtonClasses = {
    default: "bg-fill-default hover:bg-gray-50 border-outline-default active:bg-gray-100",
    primary: "bg-primary-base hover:bg-primary-hover active:bg-primary-active border-primary-base hover:border-primary-hover",
    secondary: "bg-secondary-base hover:bg-secondary-hover active:bg-secondary-active border-secondary-base hover:border-secondary-hover",
    success: "bg-success-base hover:bg-success-hover active:bg-secondary-active border-success-base hover:border-success-hover",
    danger: "bg-danger-base hover:bg-danger-hover active:bg-danger-active border-danger-base hover:border-danger-hover",
    info: "bg-info-base hover:bg-info-hover active:bg-info-active border-info-base hover:border-info-hover",
    warning: "bg-warning-base hover:bg-warning-hover active:bg-warning-active border-warning-base hover:border-warning-hover",
    dark: "bg-black hover:bg-gray-900 active:bg-gray-800 border-black"
  };
  var outlineButtonClasses = {
    default: "bg-white hover:bg-gray-100 border-gray-300 active:bg-gray-200",
    primary: "bg-white hover:bg-primary-muted border-primary-base hover:border-primary-hover active:border-primary-active",
    secondary: "bg-white hover:bg-secondary-muted border-secondary-base hover:border-secondary-hover active:border-secondary-active",
    success: "bg-white hover:bg-success-muted border-success-base hover:border-success-hover active:border-success-active",
    danger: "bg-white hover:bg-danger-muted border-danger-base hover:border-danger-hover active:border-danger-active",
    info: "bg-white hover:bg-info-muted border-info-base hover:border-info-hover active:border-info-active",
    warning: "bg-white hover:bg-warning-muted border-warning-base hover:border-warning-hover active:border-warning-active",
    dark: "bg-white border-gray-800 hover:bg-gray-100 hover:border-black active:border-black"
  };
  var textClasses = {
    default: "text-copy-caption group-hover:text-black active:text-gray-800 cursor-pointer",
    primary: "text-primary-base group-hover:text-primary-hover active:text-primary-active cursor-pointer",
    secondary: "text-secondary-base group-hover:text-secondary-hover active:text-secondary-active cursor-pointer",
    success: "text-success-base group-hover:text-success-hover active:text-success-active cursor-pointer",
    danger: "text-danger-base group-hover:text-danger-hover active:text-danger-active cursor-pointer",
    info: "text-info-base group-hover:text-info-hover active:text-info-active cursor-pointer",
    warning: "text-warning-base group-hover:text-warning-hover active:text-warning-active cursor-pointer",
    white: "text-white cursor-pointer",
    dark: "text-black cursor-pointer",
    disabled: "text-copy-disabled cursor-not-allowed "
  };
  var stateClasses = {
    default: "cursor-pointer",
    disabled: "bg-fill-disabled cursor-not-allowed border-outline-default border",
    loading: "opacity-75 cursor-wait"
  };
  var typeClasses = {
    solid: "".concat(attached ? "border-l rounded-0px" : "rounded-4px outline border", " focus:outline-4 focus:outline-focusRing/30 outline-focusRing/0"),
    outline: "".concat(attached ? "border-l rounded-0px" : "rounded-4px outline border", " focus:outline-4 focus:outline-focusRing/30 outline-focusRing/0"),
    text: "bg-transparent p-2px rounded-4px border-none focus:outline-4 focus:outline-focusRing/30 outline outline-focusRing/0"
  };
  return /*#__PURE__*/_react.default.createElement("button", {
    id: id,
    type: "button",
    onClick: onClick,
    disabled: state === "disabled" || state === "loading",
    className: (0, _clsx.default)("relative group justify-center items-center flex font-default transition-colors duration-200 ease-in-out h-fit ".concat(typeClasses[buttonType], " ").concat(fullWidth ? "w-full" : "w-fit", " ").concat(buttonType !== "text" ? sizeClasses[buttonSize] : "", " ").concat(state === "disabled" ? stateClasses["disabled"] : buttonType === "text" ? textClasses[buttonVariant] : buttonType === "outline" ? outlineButtonClasses[buttonVariant] : solidButtonClasses[buttonVariant], " ").concat(state === "disabled" ? stateClasses["disabled"] : "", " ").concat(className, "\n     "))
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _clsx.default)("inline-flex gap-4px items-center justify-center text-body whitespace-nowrap ".concat(state !== "disabled" ? buttonVariant === "default" ? textClasses["default"] : buttonType === "solid" ? textClasses["white"] : textClasses[buttonVariant] : textClasses["disabled"], " ").concat(loading && "opacity-20 cursor-wait"))
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "text-[16px] flex justify-center items-center h-[16px] w-[16px] relative"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "absolute "
  }, /*#__PURE__*/_react.default.cloneElement(icon)))), loading && /*#__PURE__*/_react.default.createElement("span", {
    className: "absolute cursor-wait top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-8px h-[18px] w-[18px] text-[18px] font-bold \n        ".concat(buttonVariant === "default" ? textClasses["default"] : buttonType === "solid" ? textClasses["white"] : textClasses[buttonVariant])
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "animate-spin"
  }, /*#__PURE__*/_react.default.createElement(_RemixIcon.default, {
    name: "loader-fill"
  }))));
};
IconButton.propTypes = {
  id: _propTypes.default.string.isRequired,
  icon: _propTypes.default.node.isRequired,
  type: _propTypes.default.oneOf(["solid", "outline", "text"]),
  variant: _propTypes.default.oneOf(["default", "primary", "secondary", "info", "success", "danger", "warning", "dark", "outline", "text"]),
  size: _propTypes.default.oneOf(["small", "default", "large"]),
  disabled: _propTypes.default.bool,
  loading: _propTypes.default.bool,
  fullWidth: _propTypes.default.bool,
  onClick: _propTypes.default.func,
  className: _propTypes.default.string,
  attached: _propTypes.default.bool
};
var _default = IconButton;
exports.default = _default;