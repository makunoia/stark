"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactInputMask = _interopRequireDefault(require("react-input-mask"));
var _reactQuill = _interopRequireDefault(require("react-quill"));
require("react-quill/dist/quill.snow.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
// Import the styles

var InputField = function InputField(_ref) {
  var label = _ref.label,
    id = _ref.id,
    labelAction = _ref.labelAction,
    _ref$type = _ref.type,
    type = _ref$type === void 0 ? "text" : _ref$type,
    name = _ref.name,
    disabled = _ref.disabled,
    readOnly = _ref.readOnly,
    _ref$optional = _ref.optional,
    optional = _ref$optional === void 0 ? false : _ref$optional,
    _ref$required = _ref.required,
    required = _ref$required === void 0 ? false : _ref$required,
    helpText = _ref.helpText,
    placeholder = _ref.placeholder,
    error = _ref.error,
    leadingItem = _ref.leadingItem,
    trailingItem = _ref.trailingItem,
    attachedButton = _ref.attachedButton,
    mask = _ref.mask,
    value = _ref.value;
  var _useState = (0, _react.useState)(value ? value : ""),
    _useState2 = _slicedToArray(_useState, 2),
    inputValue = _useState2[0],
    setInputValue = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isFocused = _useState4[0],
    setIsFocused = _useState4[1];
  var _useState5 = (0, _react.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    showPassword = _useState6[0],
    setShowPassword = _useState6[1];
  var handleChange = function handleChange(event) {
    setInputValue(event.target.value);
  };
  var handleFocus = function handleFocus() {
    setIsFocused(true);
  };
  var handleBlur = function handleBlur() {
    setIsFocused(false);
  };
  var togglePasswordVisibility = function togglePasswordVisibility() {
    setShowPassword(!showPassword);
  };
  var inputField = /*#__PURE__*/_react.default.createElement("input", {
    type: showPassword ? "text" : type,
    required: required,
    placeholder: placeholder ? placeholder : "",
    disabled: disabled,
    readOnly: readOnly,
    onChange: handleChange,
    onFocus: handleFocus,
    onBlur: handleBlur,
    name: name,
    value: inputValue,
    id: id,
    className: "input grow outline-none h-full py-12px bg-transparent ".concat(disabled ? "cursor-not-allowed" : "", " ").concat(!leadingItem && "pl-12px")
  });
  var textArea = /*#__PURE__*/_react.default.createElement("textarea", {
    rows: "3",
    warp: "soft",
    type: type,
    required: required,
    placeholder: placeholder ? placeholder : "",
    disabled: disabled,
    readOnly: readOnly,
    onChange: handleChange,
    onFocus: handleFocus,
    onBlur: handleBlur,
    name: name,
    value: inputValue,
    id: id,
    className: "resize-none input p-12px rounded-4px text-body outline-none border transition-all ease-in ring  ".concat(isFocused ? error ? "ring-danger-base/40" : "ring-focusRing/40" : "ring-focusRing/0", " ").concat(error ? "border-danger-base bg-danger-muted text-danger-base placeholder-danger-base/30" : "border-outline-default  placeholder-copy-placeholder", " ").concat(disabled ? "bg-fill-disabled text-copy-disabled cursor-not-allowed" : "bg-primitive-white text-black ", " ")
  });
  var maskedInput = /*#__PURE__*/_react.default.createElement(_reactInputMask.default, {
    mask: mask,
    value: inputValue,
    onChange: handleChange,
    onFocus: handleFocus,
    onBlur: handleBlur,
    disabled: disabled,
    maskChar: placeholder
  }, function (inputProps) {
    return /*#__PURE__*/_react.default.createElement("input", _extends({}, inputProps, {
      type: "text",
      required: required,
      placeholder: placeholder ? placeholder : "",
      disabled: disabled,
      readOnly: readOnly,
      name: name,
      id: id,
      className: "input grow outline-none h-full py-12px bg-transparent ".concat(disabled ? "cursor-not-allowed" : "", " ").concat(!leadingItem && "pl-12px")
    }));
  });
  var richTextField = /*#__PURE__*/_react.default.createElement("div", {
    className: "rich-text-editor",
    style: {
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/_react.default.createElement(_reactQuill.default, {
    value: inputValue,
    onChange: setInputValue,
    readOnly: readOnly,
    theme: "snow",
    modules: {
      toolbar: [["bold", "italic", "underline", "strike"], [{
        list: "ordered"
      }, {
        list: "bullet"
      }], ["link", "image"]]
    },
    className: "quill-editor ".concat(isFocused ? error ? "ring-danger-base/40" : "ring-focusRing/40" : "ring-focusRing/0", " ").concat(error ? "border-danger-base bg-danger-muted text-danger-base placeholder-danger-base/30" : "border-outline-default  placeholder-copy-placeholder", " ").concat(disabled ? "bg-fill-disabled text-copy-disabled cursor-not-allowed" : "bg-primitive-white text-black ")
  }), /*#__PURE__*/_react.default.createElement("style", null, "\n          .rich-text-editor .ql-toolbar {\n            display: flex;\n            flex-wrap: nowrap;\n            overflow-x: auto;\n          }\n\n          .ql-toolbar.ql-snow .ql-formats {\n            display: flex;\n            margin: 0px\n          }\n\n          .ql-toolbar.ql-snow {\n            border-radius: 4px 4px 0 0;\n            border: solid 1px #E4E4E4\n          }\n  \n          .rich-text-editor .ql-container {\n            border-top: none !important;\n            border-radius: 0 0 4px 4px;\n            height: 200px;\n            border: solid 1px #E4E4E4\n          }\n        "));
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "text-field flex flex-col gap-8px"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "label-container text-body flex flex-row justify-between items-center"
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "".concat(id),
    className: "label-text"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "font-medium capitalize text-black"
  }, label), optional && /*#__PURE__*/_react.default.createElement("span", {
    className: "label-optional italic text-gray-800"
  }, " ", "- optional")), labelAction && /*#__PURE__*/_react.default.createElement("button", {
    className: "hover:underline underline-offset-2 text-info-base hover:text-info-hover",
    onClick: labelAction.action,
    type: "button"
  }, labelAction.label)), type === "textarea" ? textArea : type === "richtext" ? richTextField : /*#__PURE__*/_react.default.createElement("div", {
    className: "flex flex-row gap-4px overflow-clip justify-center items-center rounded-4px text-body outline-none border transition-all ease-in ring  ".concat(isFocused ? error ? "ring-danger-base/40" : "ring-focusRing/40" : "ring-focusRing/0", " ").concat(error ? "border-danger-base bg-danger-muted text-danger-base placeholder-danger-base/30" : "border-outline-default  placeholder-copy-placeholder", " ").concat(disabled ? "bg-fill-disabled text-copy-disabled cursor-not-allowed" : "bg-primitive-white text-black ", " ")
  }, leadingItem &&
  /*#__PURE__*/
  //prioritize Leading Icon
  _react.default.createElement("div", {
    className: "w-16px h-16px font-semibold text-body ml-12px"
  }, leadingItem), mask ? maskedInput : inputField, type !== "password" ? /*#__PURE__*/_react.default.createElement("div", {
    className: "flex flex-row justify-center items-center ".concat(attachedButton ? "gap-12px " : "pr-12px")
  }, trailingItem && /*#__PURE__*/_react.default.createElement("div", {
    className: "w-16px h-16px font-semibold text-body min-w-fit"
  }, trailingItem), attachedButton && /*#__PURE__*/_react.default.createElement("div", {
    className: "rounded-r-4px"
  }, /*#__PURE__*/_react.default.cloneElement(attachedButton, {
    attached: true
  }))) : /*#__PURE__*/_react.default.createElement("div", {
    className: "w-16px h-16px font-semibold text-body min-w-fit pr-12px cursor-pointer",
    onClick: togglePasswordVisibility
  }, showPassword ? /*#__PURE__*/_react.default.createElement("i", {
    className: "ri-eye-line"
  }) : /*#__PURE__*/_react.default.createElement("i", {
    className: "ri-eye-close-line"
  }))), (helpText || error) && /*#__PURE__*/_react.default.createElement("p", {
    className: "flex flex-row gap-4px text-caption tracking-wide ".concat(error ? "text-danger-base" : "text-gray-800")
  }, error && /*#__PURE__*/_react.default.createElement("i", {
    className: "ri-alert-fill"
  }), error ? error : helpText));
};
InputField.propTypes = {
  label: _propTypes.default.string.isRequired,
  id: _propTypes.default.string.isRequired,
  labelAction: _propTypes.default.shape({
    label: _propTypes.default.string.isRequired,
    action: _propTypes.default.func.isRequired
  }),
  type: _propTypes.default.oneOf(["text", "password", "number", "email", "textarea"]),
  name: _propTypes.default.string,
  disabled: _propTypes.default.bool,
  readOnly: _propTypes.default.bool,
  optional: _propTypes.default.bool,
  required: _propTypes.default.bool,
  helpText: _propTypes.default.string,
  placeholder: _propTypes.default.string,
  error: _propTypes.default.string,
  leadingItem: _propTypes.default.oneOfType([_propTypes.default.node, _propTypes.default.string]),
  trailingItem: _propTypes.default.oneOfType([_propTypes.default.node, _propTypes.default.string]),
  attachedButton: _propTypes.default.element
};
InputField.defaultProps = {
  type: "text",
  optional: false,
  required: false
};
var _default = InputField;
exports.default = _default;