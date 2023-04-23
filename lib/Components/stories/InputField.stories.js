"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.TextInputWith_Icons = exports.TextInput = exports.RichTextInput = exports.PasswordInput = exports.NumberInput = exports.MaskedInput = exports.EmailInput = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _react = _interopRequireDefault(require("react"));
var _addonActions = require("@storybook/addon-actions");
var _InputField = _interopRequireDefault(require("../InputField"));
var _Button = _interopRequireDefault(require("../Button"));
require("react-quill/dist/quill.snow.css");
var _jsxRuntime = require("react/jsx-runtime");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var _default = {
  title: "InputField",
  component: _InputField.default
};
exports.default = _default;
var handleLabelAction = function handleLabelAction(e) {
  alert("Label action fired");
};
var Template = function Template(args) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_InputField.default, _objectSpread({}, args));
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
  attachedButton: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, {
    label: "Button"
  }),
  leadingItem: /*#__PURE__*/(0, _jsxRuntime.jsx)("i", {
    className: "ri-user-fill"
  }),
  trailingItem: /*#__PURE__*/(0, _jsxRuntime.jsx)("i", {
    className: "ri-check-line"
  }),
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
var MaskedInput = Template.bind({});
exports.MaskedInput = MaskedInput;
MaskedInput.args = {
  label: "Masked Input",
  id: "masked-input",
  type: "text",
  mask: "999999",
  name: "masked-input",
  placeholder: "-"
};
var RichTextInput = Template.bind({});
exports.RichTextInput = RichTextInput;
RichTextInput.args = {
  label: "RichText Input",
  id: "richtext-input",
  type: "richtext",
  name: "richtext-input",
  placeholder: "Enter richtext"
};

// Add additional stories for other variations of InputField.