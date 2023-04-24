"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _react2 = require("@headlessui/react");
var _Button = _interopRequireDefault(require("./Button"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var Menu = function Menu(_ref) {
  var label = _ref.label,
    links = _ref.links;
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
    className: "bg-white border absolute right-[0px] origin-top-right flex flex-col py-12px mt-8px border-outline-default rounded-8px h-fit w-fit overflow-clip focus:outline-none"
  }, links.map(function (group, groupIndex) {
    return /*#__PURE__*/_react.default.createElement(_react.Fragment, {
      key: "group-".concat(groupIndex)
    }, group.label && /*#__PURE__*/_react.default.createElement("div", {
      className: "text-gray-800 font-bold tracking-wide text-caption uppercase mb-4px px-12px"
    }, group.label), group.items.map(function (link) {
      return (
        /*#__PURE__*/
        /* Use the `active` state to conditionally style the active item. */
        _react.default.createElement(_react2.Menu.Item, {
          key: link.href,
          as: _react.Fragment
        }, function (_ref2) {
          var active = _ref2.active;
          return /*#__PURE__*/_react.default.createElement("a", {
            href: link.href,
            className: "whitespace-nowrap px-12px pr-24px py-12px rounded-4px w-full text-body flex flex-row gap-4px items-center ".concat(active ? "bg-blue-500 bg-primary-muted text-black" : "bg-white text-black")
          }, link.icon && /*#__PURE__*/_react.default.createElement("span", {
            className: "mr-4px text-primary-base text-[18px]"
          }, link.icon), link.label);
        })
      );
    }), groupIndex < links.length - 1 && /*#__PURE__*/_react.default.createElement("div", {
      className: "border-t border-outline-default mb-12px"
    }));
  })))));
};
var _default = Menu;
exports.default = _default;