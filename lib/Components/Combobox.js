"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _react2 = require("@headlessui/react");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _clsx = _interopRequireDefault(require("clsx"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const Combobox = ({
  label,
  id,
  labelAction,
  options,
  optional,
  helpText,
  placeholder,
  error,
  disabled,
  onChange //setState method
}) => {
  const [selectedOption, setSelectedOption] = (0, _react.useState)("");
  const [isFocused, setIsFocused] = (0, _react.useState)(false);
  const [searchValue, setSearchValue] = (0, _react.useState)("");
  (0, _react.useEffect)(() => {
    onChange(selectedOption);
  }, [selectedOption, onChange]);
  const handleFocus = () => {
    setIsFocused(true);
  };
  const handleBlur = () => {
    setIsFocused(false);
  };
  const handleSelectOption = value => {
    setSelectedOption(value);
    setSearchValue(options.find(option => option.value === value).label);
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_react2.Combobox, {
    value: selectedOption,
    onChange: handleSelectOption,
    className: "relative w-full text-left inline-flex flex-col gap-8px",
    as: "div",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "label-container text-body flex flex-row justify-between items-center",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_react2.Combobox.Label, {
        htmlFor: `${id}`,
        className: "label-text",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
          className: "font-medium capitalize text-black",
          children: label
        }), optional && /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
          className: "label-optional italic text-gray-800",
          children: [" ", "- optional"]
        })]
      }), labelAction && /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
        className: "hover:underline underline-offset-2 text-info-base hover:text-info-hover",
        onClick: labelAction.action,
        type: "button",
        children: labelAction.label
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "relative w-full",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_react2.Combobox.Input, {
        id: id,
        className: `p-12px w-full flex flex-row justify-between gap-4px overflow-clip text-body rounded-4px outline-none border transition-all ease-in ring ${isFocused ? error ? "ring-danger-base/40" : "ring-focusRing/40" : "ring-focusRing/0 "} ${error ? "border-danger-base bg-danger-muted text-danger-base placeholder-danger-base/30" : "border-outline-default  placeholder-copy-placeholder"} ${disabled ? "bg-fill-disabled text-copy-disabled cursor-not-allowed" : "bg-primitive-white text-black "} `,
        onFocus: handleFocus,
        onBlur: handleBlur,
        value: searchValue,
        onChange: e => setSearchValue(e.target.value),
        placeholder: placeholder
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_react2.Combobox.Button, {
        className: "absolute top-[0px] right-[16px] bottom-[0px] flex items-center justify-center px-2 cursor-pointer",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("i", {
          className: "ri-arrow-down-s-line font-bold text-[16px]"
        })
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_react2.Transition, {
      enter: "transition duration-100 ease-in",
      enterFrom: "transform opacity-0",
      enterTo: "transform opacity-100",
      leave: "transition duration-75 ease-in",
      leaveFrom: "transform opacity-100",
      leaveTo: "transform opacity-0",
      className: "absolute w-full z-10",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_react2.Combobox.Options, {
        className: "absolute top-[75px] transition-all z-10 p-8px max-h-[200px] overflow-y-auto scroll-smooth flex flex-col gap-4px bg-white rounded-4px border border-outline-default w-full focus:outline-none",
        children: options.filter(option => option.label.toLowerCase().includes(searchValue.toLowerCase())).map(option => /*#__PURE__*/(0, _jsxRuntime.jsxs)(_react2.Combobox.Option, {
          value: option.value,
          disabled: option?.disabled //you can add a disabled key-value pair
          ,
          className: ({
            active,
            selected
          }) => (0, _clsx.default)("cursor-pointer px-8px py-8px rounded-4px text-body relative", {
            "font-semibold text-black": selectedOption === option.value,
            "text-copy-disabled": option?.disabled,
            "bg-info-muted": active,
            "bg-primary-muted": selected
          }),
          children: [option.label, selectedOption === option.value && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "active-indicator absolute -left-[8px] bottom-[0px] h-full bg-primary-base w-[4px] rounded-e-4px"
          })]
        }, option.id))
      })
    }), (helpText || error) && /*#__PURE__*/(0, _jsxRuntime.jsxs)("p", {
      className: `flex flex-row gap-4px text-body ${error ? "text-danger-base" : "text-gray-800"}`,
      children: [error && /*#__PURE__*/(0, _jsxRuntime.jsx)("i", {
        className: "ri-alert-fill"
      }), error ? error : helpText]
    })]
  });
};
Combobox.propTypes = {
  label: _propTypes.default.string.isRequired,
  id: _propTypes.default.string.isRequired,
  options: _propTypes.default.arrayOf(_propTypes.default.shape({
    id: _propTypes.default.string.isRequired,
    label: _propTypes.default.string.isRequired,
    value: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]).isRequired
  })).isRequired,
  onChange: _propTypes.default.func.isRequired
};
var _default = Combobox;
exports.default = _default;