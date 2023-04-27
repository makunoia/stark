"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.TextInputWith_Icons = exports.TextInputWith_AttachedButton = exports.TextInput = exports.PasswordInput = exports.NumberInput = exports.EmailInput = void 0;
var _react = _interopRequireDefault(require("react"));
var _Button = _interopRequireDefault(require("../Button"));
require("react-quill/dist/quill.snow.css");
var _TextField = _interopRequireDefault(require("../TextField"));
var _RemixIcon = _interopRequireDefault(require("../molecules/RemixIcon"));
var _IconButton = _interopRequireDefault(require("../IconButton"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _default = {
  title: "Text Field",
  component: _TextField.default
};
exports.default = _default;
var handleLabelAction = function handleLabelAction(e) {
  alert("Label action fired");
};
var Template = function Template(args) {
  return /*#__PURE__*/_react.default.createElement(_TextField.default, args);
};
var TextInput = Template.bind({});
exports.TextInput = TextInput;
TextInput.args = {
  label: "Text Input",
  id: "text-input",
  type: "text",
  name: "text-input",
  placeholder: "Enter text here"
};
var TextInputWith_Icons = Template.bind({});
exports.TextInputWith_Icons = TextInputWith_Icons;
TextInputWith_Icons.args = {
  label: "Username",
  id: "username",
  placeholder: "Enter your username",
  attachedButton: /*#__PURE__*/_react.default.createElement(_Button.default, {
    label: "Button"
  }),
  leadingItem: /*#__PURE__*/_react.default.createElement(_RemixIcon.default, {
    name: "user-fill",
    className: "text-primary-base"
  }),
  trailingItem: /*#__PURE__*/_react.default.createElement("span", {
    className: "flex whitespace-nowrap font-normal gap-4px text-success-base"
  }, "Username available", /*#__PURE__*/_react.default.createElement(_RemixIcon.default, {
    name: "check-line",
    className: "text-success-base font-bold"
  })),
  labelAction: {
    label: "Action",
    action: handleLabelAction
  },
  helpText: "This can either be your username or email"
};
var TextInputWith_AttachedButton = Template.bind({});
exports.TextInputWith_AttachedButton = TextInputWith_AttachedButton;
TextInputWith_AttachedButton.args = {
  label: "Username",
  id: "username",
  placeholder: "Enter your username",
  attachedButton: /*#__PURE__*/_react.default.createElement(_IconButton.default, {
    icon: /*#__PURE__*/_react.default.createElement(_RemixIcon.default, {
      name: "arrow-right-line"
    })
  }),
  leadingItem: /*#__PURE__*/_react.default.createElement(_RemixIcon.default, {
    name: "user-fill",
    className: "text-primary-base"
  }),
  trailingItem: /*#__PURE__*/_react.default.createElement("span", {
    className: "flex whitespace-nowrap font-normal gap-4px text-success-base"
  }, "Username available", /*#__PURE__*/_react.default.createElement(_RemixIcon.default, {
    name: "check-line",
    className: "text-success-base font-bold"
  })),
  labelAction: {
    label: "Action",
    action: handleLabelAction
  },
  helpText: "This can either be your username or email"
};
var EmailInput = Template.bind({});
exports.EmailInput = EmailInput;
EmailInput.args = {
  label: "Email Input",
  id: "email-input",
  type: "email",
  name: "email-input",
  placeholder: "Enter email here",
  helpText: "Use your Google email"
};
var PasswordInput = Template.bind({});
exports.PasswordInput = PasswordInput;
PasswordInput.args = {
  label: "Password Input",
  id: "password-input",
  type: "password",
  name: "password-input",
  placeholder: "Enter password"
};
var NumberInput = Template.bind({});
exports.NumberInput = NumberInput;
NumberInput.args = {
  label: "Number Input",
  id: "number-input",
  type: "number",
  name: "masked-input",
  placeholder: "-"
};