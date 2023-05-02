"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _clsx = _interopRequireDefault(require("clsx"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var StatusIndicator = function StatusIndicator(_ref) {
  var status = _ref.status,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? "default" : _ref$size,
    className = _ref.className;
  var statusColors = {
    online: "bg-success-base",
    offline: "bg-gray-500",
    busy: "bg-warning-base",
    away: "bg-danger-base"
  };
  var sizeClasses = {
    small: "w-[4px] h-[4px]",
    default: "w-[8px] h-[8px]",
    large: "w-[16px] h-[16px]"
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _clsx.default)("rounded-full", statusColors[status], sizeClasses[size], className)
  });
};
StatusIndicator.propTypes = {
  status: _propTypes.default.oneOf(["online", "offline", "busy", "away"]).isRequired,
  size: _propTypes.default.oneOf(["small", "default", "large"]),
  className: _propTypes.default.string
};
var _default = StatusIndicator;
exports.default = _default;