"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Avatar = ({
  icon,
  image,
  text,
  tiny,
  small,
  large,
  xlarge
}) => {
  const getSizeClasses = () => {
    if (tiny) {
      return {
        avatar: "w-[16px] h-[16px] border-none border-white",
        font: "text-[6px]",
        icon: "text-[16px]"
      };
    } else if (small) {
      return {
        avatar: "w-[32px] h-[32px] border-2 border-white shadow-md ",
        font: "text-[10px]",
        icon: "text-[24px]"
      };
    } else if (large) {
      return {
        avatar: "w-[60px] h-[60px] border-4 border-white shadow-md ",
        font: "text-[20px]",
        icon: "text-[40px]"
      };
    } else if (xlarge) {
      return {
        avatar: "w-[80px] h-[80px] border-4 border-white shadow-md ",
        font: "text-[24px]",
        icon: "text-[60px]"
      };
    } else {
      return {
        avatar: "w-[40px] h-[40px] border-4 border-white shadow-md ",
        font: "text-[12px]",
        icon: "text-[28px]"
      };
    }
  };
  const sizeClasses = getSizeClasses();
  const renderContent = () => {
    if (icon) {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        className: `text-primary-base ${sizeClasses.icon}`,
        children: icon
      });
    } else if (image) {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        alt: "avatar",
        className: `w-full h-full bg-cover bg-center`,
        style: {
          backgroundImage: `url(${image})`
        }
      });
    } else if (text) {
      const truncatedText = text.length > 2 ? text.slice(0, 2) : text;
      return /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        className: `font-bold tracking-wider text-white ${sizeClasses.font}`,
        children: truncatedText
      });
    } else {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        className: `text-primary-base ${sizeClasses.icon}`,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("i", {
          className: "ri-account-circle-fill"
        })
      });
    }
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: `flex items-center justify-center overflow-hidden rounded-[100%] ${sizeClasses.avatar} ${text ? "bg-primary-base" : "bg-primary-muted"}`,
    children: renderContent()
  });
};
Avatar.propTypes = {
  icon: _propTypes.default.node,
  image: _propTypes.default.string,
  text: _propTypes.default.string,
  tiny: _propTypes.default.bool,
  small: _propTypes.default.bool,
  large: _propTypes.default.bool,
  xlarge: _propTypes.default.bool
};
Avatar.defaultProps = {
  icon: null,
  image: null,
  text: null,
  tiny: false,
  small: false,
  large: false,
  xlarge: false
};
var _default = Avatar;
exports.default = _default;