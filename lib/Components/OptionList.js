"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _react = _interopRequireDefault(require("react"));
var _Checkbox = _interopRequireDefault(require("./molecules/Checkbox"));
var _RadioButton = _interopRequireDefault(require("./molecules/RadioButton"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _jsxRuntime = require("react/jsx-runtime");
var OptionList = function OptionList(_ref) {
  var _ref$type = _ref.type,
    type = _ref$type === void 0 ? "radio" : _ref$type,
    options = _ref.options,
    _ref$selectedValues = _ref.selectedValues,
    selectedValues = _ref$selectedValues === void 0 ? [] : _ref$selectedValues,
    onChange = _ref.onChange,
    disabled = _ref.disabled,
    name = _ref.name,
    error = _ref.error,
    horizontal = _ref.horizontal,
    className = _ref.className;
  var handleChange = function handleChange(id, isChecked) {
    var newSelectedValues;
    if (type === "radio") {
      newSelectedValues = isChecked ? [id] : [];
    } else {
      if (isChecked) {
        newSelectedValues = [].concat((0, _toConsumableArray2.default)(selectedValues), [id]);
      } else {
        newSelectedValues = selectedValues.filter(function (value) {
          return value !== id;
        });
      }
    }
    if (onChange) {
      onChange(newSelectedValues);
    }
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "flex flex-col gap-16px ".concat(className),
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "flex items-start ".concat(horizontal ? "flex-row gap-16px " : "flex-col gap-12px "),
      children: options.map(function (option) {
        var isChecked = selectedValues.includes(option.id);
        if (type === "radio") {
          return /*#__PURE__*/(0, _jsxRuntime.jsx)(_RadioButton.default, {
            id: option.id,
            name: name,
            label: option.label,
            helpText: option.helpText,
            value: option.id,
            checked: isChecked,
            onChange: function onChange() {
              return handleChange(option.id, !isChecked);
            },
            disabled: disabled
          }, option.id);
        } else {
          return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Checkbox.default, {
            id: option.id,
            name: option.name,
            label: option.label,
            helpText: option.helpText,
            disabled: disabled,
            onChange: function onChange(e) {
              return handleChange(option.id, e.target.checked);
            },
            checked: isChecked
          }, option.id);
        }
      })
    }), error && /*#__PURE__*/(0, _jsxRuntime.jsxs)("p", {
      className: "flex flex-row gap-4px text-body text-danger-base",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("i", {
        className: "ri-alert-fill"
      }), error]
    })]
  });
};
OptionList.propTypes = {
  type: _propTypes.default.oneOf(["radio", "checkbox"]),
  options: _propTypes.default.arrayOf(_propTypes.default.shape({
    id: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]).isRequired,
    label: _propTypes.default.string.isRequired,
    helpText: _propTypes.default.string,
    name: _propTypes.default.string
  })).isRequired,
  selectedValues: _propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])),
  onChange: _propTypes.default.func.isRequired,
  disabled: _propTypes.default.bool,
  name: _propTypes.default.string,
  error: _propTypes.default.string,
  horizontal: _propTypes.default.bool
};
OptionList.defaultProps = {
  type: "radio",
  selectedValues: [],
  disabled: false,
  horizontal: false
};
var _default = OptionList;
exports.default = _default;