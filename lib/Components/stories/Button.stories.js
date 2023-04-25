"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Success = exports.Primary = exports.Outline = exports.Info = exports.Default = void 0;
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
  variant: "primary"
};
var Success = Template.bind({});
exports.Success = Success;
Success.args = {
  label: "Success Button",
  variant: "success"
};
var Info = Template.bind({});
exports.Info = Info;
Info.args = {
  label: "Info Button",
  type: "outline",
  variant: "info"
};
var Outline = Template.bind({});
exports.Outline = Outline;
Outline.args = {
  label: "Outline",
  type: "outline",
  variant: "danger"
};