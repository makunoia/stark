"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
var _react2 = require("@headlessui/react");
var _Button = _interopRequireDefault(require("./Button"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var Menu = function Menu(_ref) {
  var label = _ref.label,
    links = _ref.links;
  return /*#__PURE__*/React.createElement(_react2.Menu, null, /*#__PURE__*/React.createElement("div", {
    as: _react.Fragment,
    className: "relative"
  }, /*#__PURE__*/React.createElement(_react2.Menu.Button, null, /*#__PURE__*/React.createElement(_Button.default, {
    label: label ? label : "Dropdown",
    primary: true,
    trailingIcon: /*#__PURE__*/React.createElement("i", {
      className: "ri-arrow-down-s-line"
    })
  })), /*#__PURE__*/React.createElement(_react2.Transition, {
    as: _react.Fragment,
    enter: "transition duration-100 ease-out",
    enterFrom: "transform scale-95 opacity-0",
    enterTo: "transform scale-100 opacity-100",
    leave: "transition duration-75 ease-in",
    leaveFrom: "transform scale-100 opacity-100",
    leaveTo: "transform scale-95 opacity-0"
  }, /*#__PURE__*/React.createElement(_react2.Menu.Items, {
    className: "absolute right-[0px] origin-top-right flex flex-col bg-white border py-12px mt-8px border-outline-default rounded-8px w-fit focus:outline-none"
  }, links.map(function (group, groupIndex) {
    return /*#__PURE__*/React.createElement(_react.Fragment, {
      key: "group-".concat(groupIndex)
    }, group.label && /*#__PURE__*/React.createElement("div", {
      className: "text-gray-800 font-bold tracking-wide text-caption uppercase mb-8px px-12px"
    }, group.label), group.items.map(function (link) {
      return (
        /*#__PURE__*/
        /* Use the `active` state to conditionally style the active item. */
        React.createElement(_react2.Menu.Item, {
          key: link.href,
          as: _react.Fragment
        }, function (_ref2) {
          var active = _ref2.active;
          return /*#__PURE__*/React.createElement("a", {
            href: link.href,
            className: "whitespace-nowrap px-12px pr-24px py-12px rounded-4px w-full text-body flex flex-row gap-4px items-center ".concat(active ? "bg-blue-500 bg-primary-muted text-black" : "bg-white text-black")
          }, link.icon && /*#__PURE__*/React.createElement("span", {
            className: "mr-4px text-primary-base text-[18px]"
          }, link.icon), link.label);
        })
      );
    }), groupIndex < links.length - 1 && /*#__PURE__*/React.createElement("div", {
      className: "border-t border-outline-default my-8px mb-12px"
    }));
  })))));
};
var _default = Menu;
exports.default = _default;