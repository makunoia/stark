"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Success = exports.Small = exports.Secondary = exports.Primary = exports.Loading = exports.Large = exports.Disabled = exports.Default = exports.Danger = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _react = _interopRequireDefault(require("react"));
var _addonActions = require("@storybook/addon-actions");
var _Button = _interopRequireDefault(require("../Button"));
var _jsxRuntime = require("react/jsx-runtime");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; } // src/components/stories/Button.stories.js
var _default = {
  title: "Button",
  component: _Button.default
};
exports.default = _default;
var Template = function Template(args) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, _objectSpread(_objectSpread({}, args), {}, {
    onClick: (0, _addonActions.action)("button-click")
  }));
};
var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  label: "Default Button"
};
var Primary = Template.bind({});
exports.Primary = Primary;
Primary.args = {
  label: "Primary Button",
  primary: true
};
var Secondary = Template.bind({});
exports.Secondary = Secondary;
Secondary.args = {
  label: "Secondary Button",
  secondary: true
};
var Success = Template.bind({});
exports.Success = Success;
Success.args = {
  label: "Success Button",
  success: true
};
var Danger = Template.bind({});
exports.Danger = Danger;
Danger.args = {
  label: "Danger Button",
  danger: true
};
var Large = Template.bind({});
exports.Large = Large;
Large.args = {
  label: "Large Button",
  large: true
};
var Small = Template.bind({});
exports.Small = Small;
Small.args = {
  label: "Small Button",
  small: true
};
var Disabled = Template.bind({});
exports.Disabled = Disabled;
Disabled.args = {
  label: "Disabled Button",
  disabled: true
};
var Loading = Template.bind({});
exports.Loading = Loading;
Loading.args = {
  label: "Loading Button",
  loading: true
};