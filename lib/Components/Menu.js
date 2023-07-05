"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _react2 = require("@headlessui/react");
var _Button = _interopRequireDefault(require("./Button"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _DropdownMenuItem = _interopRequireDefault(require("./molecules/DropdownMenuItem"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var Menu = function Menu(_ref) {
  var label = _ref.label,
    links = _ref.links,
    menuPlacement = _ref.menuPlacement;
  return /*#__PURE__*/_react.default.createElement(_react2.Menu, null, /*#__PURE__*/_react.default.createElement("div", {
    as: _react.Fragment,
    className: "relative w-fit"
  }, /*#__PURE__*/_react.default.createElement(_react2.Menu.Button, null, /*#__PURE__*/_react.default.createElement(_Button.default, {
    label: label ? label : "Dropdown",
    primary: true,
    trailingIcon: /*#__PURE__*/_react.default.createElement("i", {
      className: "ri-arrow-down-s-line"
    })
  })), /*#__PURE__*/_react.default.createElement(_react2.Transition, {
    as: _react.Fragment,
    enter: "transition duration-100 ease-out",
    enterFrom: "transform scale-95 opacity-0",
    enterTo: "transform scale-100 opacity-100",
    leave: "transition duration-75 ease-in",
    leaveFrom: "transform scale-100 opacity-100",
    leaveTo: "transform scale-95 opacity-0"
  }, /*#__PURE__*/_react.default.createElement(_react2.Menu.Items, {
    className: "bg-white flex flex-col mt-8px rounded-4px h-fit min-w-[200px] focus:outline-none shadow-lg absolute origin-top-right border border-outline-default ".concat(menuPlacement === "right" ? "right-0" : "left-0")
  }, links.map(function (group, groupIndex) {
    return /*#__PURE__*/_react.default.createElement(_react.Fragment, {
      key: "group-".concat(groupIndex)
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "py-8px gap-4px"
    }, group.sectionTitle && /*#__PURE__*/_react.default.createElement("div", {
      className: "text-copy-caption font-bold tracking-wider text-[11px] uppercase px-16px py-4px"
    }, group.sectionTitle), group.items.map(function (link) {
      return (
        /*#__PURE__*/
        /* Use the `active` state to conditionally style the active item. */
        _react.default.createElement(_react2.Menu.Item, {
          key: link.href,
          href: link.href,
          as: _react.Fragment,
          disabled: link.disabled
        }, function (_ref2) {
          var active = _ref2.active;
          return /*#__PURE__*/_react.default.createElement(_DropdownMenuItem.default, {
            label: link.label,
            caption: link.caption,
            disabled: link.disabled,
            active: link.active,
            focused: active,
            danger: link.danger,
            leadingItem: link.leadingItem,
            link: link.href,
            trailingItem: link === null || link === void 0 ? void 0 : link.trailingItem
          });
        })
      );
    })), groupIndex < links.length - 1 && /*#__PURE__*/_react.default.createElement("div", {
      className: "border-t border-outline-default pb-4px"
    }));
  })))));
};
Menu.propTypes = {
  label: _propTypes.default.string,
  links: _propTypes.default.arrayOf(_propTypes.default.shape({
    sectionTitle: _propTypes.default.string,
    items: _propTypes.default.arrayOf(_propTypes.default.shape({
      href: _propTypes.default.string.isRequired,
      label: _propTypes.default.string.isRequired,
      caption: _propTypes.default.string,
      disabled: _propTypes.default.bool,
      active: _propTypes.default.bool,
      danger: _propTypes.default.bool,
      leadingItem: _propTypes.default.element,
      trailingItem: _propTypes.default.element
    })).isRequired
  })).isRequired,
  menuPlacement: _propTypes.default.oneOf(["left", "right"])
};
var _default = Menu;
exports.default = _default;