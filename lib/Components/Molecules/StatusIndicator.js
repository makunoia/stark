"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _clsx = _interopRequireDefault(require("clsx"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var StatusIndicator = function StatusIndicator(_ref) {
  var status = _ref.status,
    _ref$small = _ref.small,
    small = _ref$small === void 0 ? false : _ref$small,
    _ref$medium = _ref.medium,
    medium = _ref$medium === void 0 ? false : _ref$medium,
    _ref$large = _ref.large,
    large = _ref$large === void 0 ? false : _ref$large,
    className = _ref.className;
  var statusColors = {
    online: "bg-success-base",
    offline: "bg-gray-500",
    busy: "bg-warning-base",
    away: "bg-danger-base"
  };
  var sizeClasses = {
    small: "w-[4px] h-[4px]",
    medium: "w-[8px] h-[8px]",
    large: "w-[16px] h-[16px]"
  };
  var size = small ? "small" : medium ? "medium" : large ? "large" : "small";
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: (0, _clsx.default)("rounded-full", statusColors[status], sizeClasses[size], className)
  });
};
StatusIndicator.propTypes = {
  status: _propTypes.default.oneOf(["online", "offline", "busy", "away"]).isRequired,
  small: _propTypes.default.bool,
  medium: _propTypes.default.bool,
  large: _propTypes.default.bool,
  className: _propTypes.default.string
};
var _default = StatusIndicator;
exports.default = _default;