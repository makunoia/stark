"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _clsx = _interopRequireDefault(require("clsx"));
var _react = _interopRequireDefault(require("react"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var Button = function Button(_ref) {
  var label = _ref.label,
    id = _ref.id,
    leadingIcon = _ref.leadingIcon,
    trailingIcon = _ref.trailingIcon,
    _ref$primary = _ref.primary,
    primary = _ref$primary === void 0 ? false : _ref$primary,
    _ref$secondary = _ref.secondary,
    secondary = _ref$secondary === void 0 ? false : _ref$secondary,
    _ref$info = _ref.info,
    info = _ref$info === void 0 ? false : _ref$info,
    _ref$success = _ref.success,
    success = _ref$success === void 0 ? false : _ref$success,
    _ref$danger = _ref.danger,
    danger = _ref$danger === void 0 ? false : _ref$danger,
    _ref$warning = _ref.warning,
    warning = _ref$warning === void 0 ? false : _ref$warning,
    _ref$dark = _ref.dark,
    dark = _ref$dark === void 0 ? false : _ref$dark,
    _ref$small = _ref.small,
    small = _ref$small === void 0 ? false : _ref$small,
    _ref$large = _ref.large,
    large = _ref$large === void 0 ? false : _ref$large,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    _ref$loading = _ref.loading,
    loading = _ref$loading === void 0 ? false : _ref$loading,
    _ref$outline = _ref.outline,
    outline = _ref$outline === void 0 ? false : _ref$outline,
    _ref$text = _ref.text,
    text = _ref$text === void 0 ? false : _ref$text,
    _ref$fullWidth = _ref.fullWidth,
    fullWidth = _ref$fullWidth === void 0 ? false : _ref$fullWidth,
    _ref$submit = _ref.submit,
    submit = _ref$submit === void 0 ? false : _ref$submit,
    _ref$attached = _ref.attached,
    attached = _ref$attached === void 0 ? false : _ref$attached,
    onClick = _ref.onClick,
    className = _ref.className;
  var type = outline ? "outline" : text ? "text" : "solid"; // Set solid as the default
  var size = small ? "small" : large ? "large" : "default";
  var color = primary ? "primary" : secondary ? "secondary" : success ? "success" : info ? "info" : danger ? "danger" : warning ? "warning" : dark ? "dark" : "default";
  var state = disabled ? "disabled" : loading ? "loading" : "default";
  var sizeClasses = {
    small: "text-sm px-12px py-8px",
    default: "text-base px-16px py-12px",
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
    default: "bg-white hover:bg-gray-50 border-outline-default active:bg-gray-100",
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
    solid: "font-semibold  ".concat(attached ? "border-l rounded-0px" : "rounded-4px outline border", " focus:outline-4 focus:outline-focusRing/30 outline-focusRing/0"),
    outline: "font-semibold  ".concat(attached ? "border-l rounded-0px" : "rounded-4px outline border", " focus:outline-4 focus:outline-focusRing/30 outline-focusRing/0"),
    text: "font-semibold underline-offset-2 hover:underline bg-transparent p-2px rounded-4px border-none focus:outline-4 focus:outline-focusRing/30 outline outline-focusRing/0"
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("button", {
    id: id,
    type: submit ? "submit" : "button",
    onClick: onClick,
    disabled: state === "disabled" || state === "loading",
    className: (0, _clsx.default)("relative group justify-center items-center flex font-default transition-colors duration-200 ease-in-out h-fit ".concat(typeClasses[type], " ").concat(fullWidth ? "w-full" : "w-fit", " ").concat(type !== "text" ? sizeClasses[size] : "", " ").concat(state === "disabled" //check if the button is disabled
    ? stateClasses["disabled"] //apply disabled design
    : type === "text" //if it's not disabled, and the button's a text button...
    ? textClasses[color] //then apply the appropriate color for the button
    : type === "outline" //if it's not a text button but an outline button...
    ? outlineButtonClasses[color] //then apply the right style
    : solidButtonClasses[color] //if doesn't meet any of the conditions above, it's probably a solid button
    , " ").concat(state !== "text" && state === "disabled" ? stateClasses["disabled"] : "", " ").concat(className, "\n     ")),
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("label", {
      className: (0, _clsx.default)("inline-flex gap-4px items-center justify-center text-body whitespace-nowrap ".concat(state !== "disabled" ? color === "default" ? textClasses["default"] : type === "solid" ? textClasses["white"] : textClasses[color] : textClasses["disabled"], " ").concat(loading && "opacity-20 cursor-wait")),
      children: [leadingIcon && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "text-[16px] flex justify-center items-center h-[16px] w-[16px] relative",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "absolute ",
          children: /*#__PURE__*/_react.default.cloneElement(leadingIcon)
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        children: label !== null && label !== void 0 ? label : "Button"
      }), trailingIcon && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "text-[16px] flex justify-center items-center h-[16px] w-[16px] relative",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "absolute",
          children: /*#__PURE__*/_react.default.cloneElement(trailingIcon)
        })
      })]
    }), loading && /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      className: "absolute cursor-wait top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-8px h-[18px] w-[18px] text-[18px] font-bold \n        ".concat(color === "default" ? textClasses["default"] : type === "solid" ? textClasses["white"] : textClasses[color]),
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "animate-spin",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("i", {
          className: "ri-loader-fill"
        })
      })
    })]
  });
};
var _default = Button;
exports.default = _default;