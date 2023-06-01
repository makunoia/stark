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
  sectionTitle: "Choose Item",
  items: [{
    href: "#",
    leadingItem: /*#__PURE__*/_react.default.createElement(_RemixIcon.default, {
      name: "share-fill"
    }),
    trailingItem: "CTRL+S",
    label: "Share...",
    active: true
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
    label: "Rename...",
    disabled: true
  }]
}];
var GroupedItems = [{
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