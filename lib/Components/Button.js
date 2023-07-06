"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _clsx = _interopRequireDefault(require("clsx"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _RemixIcon = _interopRequireDefault(require("./molecules/RemixIcon"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var Button = function Button(_ref) {
  var label = _ref.label,
    id = _ref.id,
    leadingIcon = _ref.leadingIcon,
    trailingIcon = _ref.trailingIcon,
    _ref$type = _ref.type,
    type = _ref$type === void 0 ? "solid" : _ref$type,
    _ref$variant = _ref.variant,
    variant = _ref$variant === void 0 ? "default" : _ref$variant,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? "default" : _ref$size,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    _ref$isLoading = _ref.isLoading,
    isLoading = _ref$isLoading === void 0 ? false : _ref$isLoading,
    _ref$fullWidth = _ref.fullWidth,
    fullWidth = _ref$fullWidth === void 0 ? false : _ref$fullWidth,
    _ref$submit = _ref.submit,
    submit = _ref$submit === void 0 ? false : _ref$submit,
    _ref$attached = _ref.attached,
    attached = _ref$attached === void 0 ? false : _ref$attached,
    onClick = _ref.onClick,
    className = _ref.className;
  var buttonType = type === "outline" || type === "text" ? type : "solid";
  var validVariants = ["default", "primary", "secondary", "info", "success", "danger", "warning", "dark", "white"];
  var buttonVariant = validVariants.includes(variant) ? variant : "default";
  var buttonSize = size === "small" || size === "large" ? size : "default";
  var state = disabled ? "disabled" : isLoading ? "loading" : "default";
  var sizeClasses = {
    small: "text-caption px-8px py-4px",
    default: "text-body px-12px py-10px",
    large: "text-body px-16px py-16px"
  };
  var buttonClasses = {
    solid: {
      default: "bg-white hover:bg-gray-50 border-outline-default active:bg-gray-100",
      primary: "bg-primary-base hover:bg-primary-hover active:bg-primary-active border-primary-base hover:border-primary-hover",
      secondary: "bg-secondary-base hover:bg-secondary-hover active:bg-secondary-active border-secondary-base hover:border-secondary-hover",
      success: "bg-success-base hover:bg-success-hover active:bg-secondary-active border-success-base hover:border-success-hover",
      danger: "bg-danger-base hover:bg-danger-hover active:bg-danger-active border-danger-base hover:border-danger-hover",
      info: "bg-info-base hover:bg-info-hover active:bg-info-active border-info-base hover:border-info-hover",
      warning: "bg-warning-base hover:bg-warning-hover active:bg-warning-active border-warning-base hover:border-warning-hover",
      dark: "bg-black hover:bg-gray-900 active:bg-gray-800 border-black"
    },
    outline: {
      default: "bg-white hover:bg-gray-50 border-outline-default active:bg-gray-100",
      primary: "bg-white hover:bg-primary-muted border-primary-base hover:border-primary-hover active:border-primary-active",
      secondary: "bg-white hover:bg-secondary-muted border-secondary-base hover:border-secondary-hover active:border-secondary-active",
      success: "bg-white hover:bg-success-muted border-success-base hover:border-success-hover active:border-success-active",
      danger: "bg-white hover:bg-danger-muted border-danger-base hover:border-danger-hover active:border-danger-active",
      info: "bg-white hover:bg-info-muted border-info-base hover:border-info-hover active:border-info-active",
      warning: "bg-white hover:bg-warning-muted border-warning-base hover:border-warning-hover active:border-warning-active",
      dark: "bg-white border-gray-800 hover:bg-gray-100 hover:border-black active:border-black"
    },
    text: {
      default: "text-copy-caption hover:bg-gray-50 active:text-gray-800 cursor-pointer",
      primary: "text-primary-base hover:bg-primary-muted active:text-primary-active cursor-pointer",
      secondary: "text-secondary-base hover:bg-secondary-muted active:text-secondary-active cursor-pointer",
      success: "text-success-base hover:bg-success-muted active:text-success-active cursor-pointer",
      danger: "text-danger-base hover:bg-danger-muted active:text-danger-active cursor-pointer",
      info: "text-info-base hover:bg-info-muted active:text-info-active cursor-pointer",
      warning: "text-warning-base hover:bg-warning-muted active:text-warning-active cursor-pointer",
      white: "text-white cursor-pointer",
      dark: "text-black cursor-pointer",
      disabled: "text-copy-disabled cursor-not-allowed"
    }
  };
  var stateClasses = {
    default: "cursor-pointer",
    disabled: "bg-fill-disabled cursor-not-allowed border-outline-default border",
    loading: "opacity-75 cursor-wait"
  };
  var typeClasses = {
    solid: "font-semibold ".concat(attached ? "border-l rounded-0px" : "rounded-4px outline border", " focus:outline-4 focus:outline-focusRing/30 outline-focusRing/0"),
    outline: "font-semibold ".concat(attached ? "border-l rounded-0px" : "rounded-4px outline border", " focus:outline-4 focus:outline-focusRing/30 outline-focusRing/0"),
    text: "font-semibold bg-transparent p-4px rounded-4px border-none focus:outline-4 focus:outline-focusRing/30 outline outline-focusRing/0"
  };
  var buttonClass = buttonClasses[buttonType][buttonVariant];
  var sizeClass = sizeClasses[buttonSize];
  var textClass = state === "disabled" ? buttonClasses.text.disabled : buttonType === "text" ? buttonClasses.text[buttonVariant] : "";
  var stateClass = stateClasses[state];
  var combinedClasses = (0, _clsx.default)("relative group justify-center items-center flex font-default transition-colors duration-300 ease-in-out h-fit", typeClasses[buttonType], buttonClass, fullWidth ? "w-full" : "w-fit", buttonType !== "text" ? sizeClass : "", stateClass, textClass, className);
  return /*#__PURE__*/_react.default.createElement("button", {
    id: id,
    type: submit ? "submit" : "button",
    onClick: onClick,
    disabled: state === "disabled" || state === "loading",
    className: combinedClasses
  }, /*#__PURE__*/_react.default.createElement("label", {
    className: (0, _clsx.default)("inline-flex gap-4px items-center justify-center text-body whitespace-nowrap transition-all duration-300 ease-in-out", state !== "disabled" ? buttonVariant === "default" ? buttonClasses.text.default : buttonType === "solid" ? buttonClasses.text.white : buttonClasses.text[buttonVariant] : textClass, isLoading && "opacity-20 cursor-wait")
  }, leadingIcon && /*#__PURE__*/_react.default.createElement("div", {
    className: "text-[16px] flex justify-center items-center h-[16px] w-[16px] relative"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "absolute"
  }, /*#__PURE__*/_react.default.cloneElement(leadingIcon))), /*#__PURE__*/_react.default.createElement("span", {
    className: "select-none"
  }, label !== null && label !== void 0 ? label : "Button"), trailingIcon && /*#__PURE__*/_react.default.createElement("div", {
    className: "text-[16px] flex justify-center items-center h-[16px] w-[16px] relative"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "absolute"
  }, /*#__PURE__*/_react.default.cloneElement(trailingIcon)))), isLoading && /*#__PURE__*/_react.default.createElement("span", {
    className: (0, _clsx.default)("absolute cursor-wait top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-8px h-[18px] w-[18px] text-[18px] font-bold", state !== "disabled" ? buttonVariant === "default" //is the button default?
    ? buttonClasses.text.default //if the button is default, apply default color style (copy-caption)
    : buttonType === "solid" //is the button solid?
    ? buttonClasses.text.white //if the button is solid, apply color style (text-white)
    : buttonClasses.text[buttonVariant] //if it's not solid, apply the appropriate color style (info, success, etc...)
    : textClass)
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "animate-spin"
  }, /*#__PURE__*/_react.default.createElement(_RemixIcon.default, {
    name: "loader-fill"
  }))));
};
Button.propTypes = {
  label: _propTypes.default.string.isRequired,
  id: _propTypes.default.string,
  leadingIcon: _propTypes.default.element,
  trailingIcon: _propTypes.default.element,
  type: _propTypes.default.oneOf(["solid", "outline", "text"]),
  variant: _propTypes.default.oneOf(["default", "primary", "secondary", "info", "success", "danger", "warning", "white", "dark"]),
  size: _propTypes.default.oneOf(["small", "default", "large"]),
  disabled: _propTypes.default.bool,
  isLoading: _propTypes.default.bool,
  fullWidth: _propTypes.default.bool,
  submit: _propTypes.default.bool,
  attached: _propTypes.default.bool,
  onClick: _propTypes.default.func,
  className: _propTypes.default.string
};
var _default = Button;
exports.default = _default;