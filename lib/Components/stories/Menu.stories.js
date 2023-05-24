"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.GroupedSections = exports.DefaultMenu = void 0;
var _react = _interopRequireDefault(require("react"));
var _Menu = _interopRequireDefault(require("../Menu"));
require("remixicon/fonts/remixicon.css");
var _RemixIcon = _interopRequireDefault(require("../molecules/RemixIcon"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _default = {
  title: "Button/Menu",
  component: _Menu.default
};
exports.default = _default;
var Template = function Template(args) {
  return /*#__PURE__*/_react.default.createElement(_Menu.default, args);
};
var Items = [{
  sectionTitle: "Home",
  items: [{
    href: "#",
    leadingItem: /*#__PURE__*/_react.default.createElement(_RemixIcon.default, {
      name: "share-fill"
    }),
    trailingItem: "CTRL+S",
    label: "Share..."
  }, {
    href: "#",
    leadingItem: /*#__PURE__*/_react.default.createElement(_RemixIcon.default, {
      name: "arrow-right-circle-fill"
    }),
    label: "Move..."
  }, {
    href: "#",
    leadingItem: /*#__PURE__*/_react.default.createElement(_RemixIcon.default, {
      name: "pencil-fill"
    }),
    label: "Rename..."
  }]
}, {
  sectionTitle: "Your account",
  items: [{
    href: "#",
    leadingItem: /*#__PURE__*/_react.default.createElement(_RemixIcon.default, {
      name: "account-circle-fill"
    }),
    label: "My Profile"
  }, {
    href: "#",
    leadingItem: /*#__PURE__*/_react.default.createElement(_RemixIcon.default, {
      name: "delete-bin-fill"
    }),
    label: "Delete",
    caption: "This can't be undone",
    danger: true
  }]
}];
var GroupedItems = [{
  label: "Group 1",
  items: [{
    href: "#",
    icon: /*#__PURE__*/_react.default.createElement("i", {
      className: "ri-home-4-line"
    }),
    label: "Home"
  }, {
    href: "#",
    icon: /*#__PURE__*/_react.default.createElement("i", {
      className: "ri-settings-5-line"
    }),
    label: "Settings"
  }]
}, {
  label: "Group 2",
  items: [{
    href: "#",
    icon: /*#__PURE__*/_react.default.createElement("i", {
      className: "ri-user-3-line"
    }),
    label: "Profile"
  }, {
    href: "#",
    icon: /*#__PURE__*/_react.default.createElement("i", {
      className: "ri-logout-box-line"
    }),
    label: "Logout"
  }]
}];
var DefaultMenu = Template.bind({});
exports.DefaultMenu = DefaultMenu;
DefaultMenu.args = {
  label: "Dropdown",
  links: Items
};
var GroupedSections = Template.bind({});
exports.GroupedSections = GroupedSections;
GroupedSections.args = {
  label: "Dropdown",
  links: GroupedItems
};