"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _Checkbox = _interopRequireDefault(require("./Molecules/Checkbox"));
var _RadioButton = _interopRequireDefault(require("./Molecules/RadioButton"));
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
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
        newSelectedValues = [].concat(_toConsumableArray(selectedValues), [id]);
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
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "flex flex-col gap-16px ".concat(className)
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "flex items-start ".concat(horizontal ? "flex-row gap-16px " : "flex-col gap-12px ")
  }, options.map(function (option) {
    var isChecked = selectedValues.includes(option.id);
    if (type === "radio") {
      return /*#__PURE__*/_react.default.createElement(_RadioButton.default, {
        key: option.id,
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
      });
    } else {
      return /*#__PURE__*/_react.default.createElement(_Checkbox.default, {
        key: option.id,
        id: option.id,
        name: option.name,
        label: option.label,
        helpText: option.helpText,
        disabled: disabled,
        onChange: function onChange(e) {
          return handleChange(option.id, e.target.checked);
        },
        checked: isChecked
      });
    }
  })), error && /*#__PURE__*/_react.default.createElement("p", {
    className: "flex flex-row gap-4px text-body text-danger-base"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "ri-alert-fill"
  }), error));
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