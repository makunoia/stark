"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
var _react2 = require("@headlessui/react");
var _Button = _interopRequireDefault(require("./Button"));
var _jsxRuntime = require("react/jsx-runtime");
var Menu = function Menu(_ref) {
  var label = _ref.label,
    links = _ref.links;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_react2.Menu, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      as: _react.Fragment,
      className: "relative w-fit",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_react2.Menu.Button, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, {
          label: label ? label : "Dropdown",
          primary: true,
          trailingIcon: /*#__PURE__*/(0, _jsxRuntime.jsx)("i", {
            className: "ri-arrow-down-s-line"
          })
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_react2.Transition, {
        as: _react.Fragment,
        enter: "transition duration-100 ease-out",
        enterFrom: "transform scale-95 opacity-0",
        enterTo: "transform scale-100 opacity-100",
        leave: "transition duration-75 ease-in",
        leaveFrom: "transform scale-100 opacity-100",
        leaveTo: "transform scale-95 opacity-0",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_react2.Menu.Items, {
          className: "bg-white border absolute right-[0px] origin-top-right flex flex-col  mt-8px border-outline-default rounded-8px h-fit w-fit overflow-clip focus:outline-none",
          children: links.map(function (group, groupIndex) {
            return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_react.Fragment, {
              children: [group.label && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                className: "text-gray-800 font-bold tracking-wide text-caption uppercase mb-4px px-12px",
                children: group.label
              }), group.items.map(function (link) {
                return (
                  /*#__PURE__*/
                  /* Use the `active` state to conditionally style the active item. */
                  (0, _jsxRuntime.jsx)(_react2.Menu.Item, {
                    as: _react.Fragment,
                    children: function children(_ref2) {
                      var active = _ref2.active;
                      return /*#__PURE__*/(0, _jsxRuntime.jsxs)("a", {
                        href: link.href,
                        className: "whitespace-nowrap px-12px pr-24px py-12px rounded-4px w-full text-body flex flex-row gap-4px items-center ".concat(active ? "bg-blue-500 bg-primary-muted text-black" : "bg-white text-black"),
                        children: [link.icon && /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                          className: "mr-4px text-primary-base text-[18px]",
                          children: link.icon
                        }), link.label]
                      });
                    }
                  }, link.href)
                );
              }), groupIndex < links.length - 1 && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                className: "border-t border-outline-default mb-12px"
              })]
            }, "group-".concat(groupIndex));
          })
        })
      })]
    })
  });
};
var _default = Menu;
exports.default = _default;