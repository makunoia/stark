"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Success = exports.Small = exports.Secondary = exports.Primary = exports.Loading = exports.Large = exports.Disabled = exports.Default = exports.Danger = void 0;
var _react = _interopRequireDefault(require("react"));
var _addonActions = require("@storybook/addon-actions");
var _Button = _interopRequireDefault(require("../Button"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); } // src/components/stories/Button.stories.js
var _default = {
  title: "Button",
  component: _Button.default
};
exports.default = _default;
var Template = function Template(args) {
  return /*#__PURE__*/_react.default.createElement(_Button.default, _extends({}, args, {
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