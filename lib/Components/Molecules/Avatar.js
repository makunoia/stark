"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _RemixIcon = _interopRequireDefault(require("./RemixIcon"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var Avatar = function Avatar(_ref) {
  var icon = _ref.icon,
    image = _ref.image,
    text = _ref.text,
    size = _ref.size;
  var getSizeClasses = function getSizeClasses() {
    switch (size) {
      case "tiny":
        return {
          avatar: "w-[16px] h-[16px] border-none border-white",
          font: "text-[6px]",
          icon: "text-[16px]"
        };
      case "small":
        return {
          avatar: "w-[32px] h-[32px] border-2 border-white shadow-md ",
          font: "text-[10px]",
          icon: "text-[24px]"
        };
      case "large":
        return {
          avatar: "w-[60px] h-[60px] border-4 border-white shadow-md ",
          font: "text-[20px]",
          icon: "text-[40px]"
        };
      case "xlarge":
        return {
          avatar: "w-[80px] h-[80px] border-4 border-white shadow-md ",
          font: "text-[24px]",
          icon: "text-[60px]"
        };
      default:
        return {
          avatar: "w-[40px] h-[40px] border-4 border-white shadow-md ",
          font: "text-[12px]",
          icon: "text-[28px]"
        };
    }
  };
  var sizeClasses = getSizeClasses();
  var renderContent = function renderContent() {
    if (icon) {
      return /*#__PURE__*/_react.default.createElement("span", {
        className: "text-primary-base ".concat(sizeClasses.icon)
      }, icon);
    } else if (image) {
      return /*#__PURE__*/_react.default.createElement("div", {
        alt: "avatar",
        className: "w-full h-full bg-cover bg-center",
        style: {
          backgroundImage: "url(".concat("image", ")")
        }
      });
    } else if (text) {
      var truncatedText = text.length > 2 ? text.slice(0, 2) : text;
      return /*#__PURE__*/_react.default.createElement("span", {
        className: "font-bold tracking-wider text-white ".concat(sizeClasses.font)
      }, truncatedText);
    } else {
      return /*#__PURE__*/_react.default.createElement("span", {
        className: "text-primary-base ".concat(sizeClasses.icon)
      }, /*#__PURE__*/_react.default.createElement(_RemixIcon.default, {
        name: "account-circle-fill"
      }));
    }
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "flex items-center justify-center overflow-hidden rounded-[100%] ".concat(sizeClasses.avatar, " ").concat(text ? "bg-primary-base" : "bg-primary-muted")
  }, renderContent());
};
Avatar.propTypes = {
  icon: _propTypes.default.node,
  image: _propTypes.default.string,
  text: _propTypes.default.string,
  size: _propTypes.default.oneOf(["tiny", "small", "large", "xlarge"])
};
Avatar.defaultProps = {
  icon: null,
  image: null,
  text: null,
  size: "default"
};
var _default = Avatar;
exports.default = _default;