"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.DefaultMenu = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _react = _interopRequireDefault(require("react"));
var _Menu = _interopRequireDefault(require("../Menu"));
require("remixicon/fonts/remixicon.css");
var _jsxRuntime = require("react/jsx-runtime");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var _default = {
  title: "Menu",
  component: _Menu.default
};
exports.default = _default;
var Template = function Template(args) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Menu.default, _objectSpread({}, args));
};
var sampleLinks = [{
  label: "Group 1",
  items: [{
    href: "#",
    icon: /*#__PURE__*/(0, _jsxRuntime.jsx)("i", {
      className: "ri-home-4-line"
    }),
    label: "Home"
  }, {
    href: "#",
    icon: /*#__PURE__*/(0, _jsxRuntime.jsx)("i", {
      className: "ri-settings-5-line"
    }),
    label: "Settings"
  }]
}, {
  label: "Group 2",
  items: [{
    href: "#",
    icon: /*#__PURE__*/(0, _jsxRuntime.jsx)("i", {
      className: "ri-user-3-line"
    }),
    label: "Profile"
  }, {
    href: "#",
    icon: /*#__PURE__*/(0, _jsxRuntime.jsx)("i", {
      className: "ri-logout-box-line"
    }),
    label: "Logout"
  }]
}];
var DefaultMenu = Template.bind({});
exports.DefaultMenu = DefaultMenu;
DefaultMenu.args = {
  label: "Dropdown",
  links: sampleLinks
};