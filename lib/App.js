"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = require("react");
var _Button = _interopRequireDefault(require("./components/Button"));
var _IconButton = _interopRequireDefault(require("./components/IconButton"));
var _InputField = _interopRequireDefault(require("./components/InputField"));
var _Checkbox = _interopRequireDefault(require("./components/molecules/Checkbox"));
var _OptionList = _interopRequireDefault(require("./components/OptionList"));
var _Switch = _interopRequireDefault(require("./components/molecules/Switch"));
var _Avatar = _interopRequireDefault(require("./components/molecules/Avatar"));
var _Badge = _interopRequireDefault(require("./components/molecules/Badge"));
var _StatusIndicator = _interopRequireDefault(require("./components/molecules/StatusIndicator"));
var _Select = _interopRequireDefault(require("./components/Select"));
var _Combobox = _interopRequireDefault(require("./components/Combobox"));
var _Menu = _interopRequireDefault(require("./components/Menu"));
var _jsxRuntime = require("react/jsx-runtime");
function App() {
  var _useState = (0, _react.useState)(["radio-1"]),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    selectedRadioValues = _useState2[0],
    setSelectedRadioValues = _useState2[1];
  var _useState3 = (0, _react.useState)(["checkbox-1", "checkbox-2"]),
    _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
    selectedCheckboxValues = _useState4[0],
    setSelectedCheckboxValues = _useState4[1];
  var _useState5 = (0, _react.useState)(false),
    _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
    switchToggled = _useState6[0],
    setSwitchToggled = _useState6[1];
  var _useState7 = (0, _react.useState)(false),
    _useState8 = (0, _slicedToArray2.default)(_useState7, 2),
    checkTerms = _useState8[0],
    setCheckTerms = _useState8[1];
  var _useState9 = (0, _react.useState)(null),
    _useState10 = (0, _slicedToArray2.default)(_useState9, 2),
    selectedOption = _useState10[0],
    setSelectedOption = _useState10[1];
  var options = [{
    id: "1",
    value: "rizalPark",
    label: "Rizal Park"
  }, {
    id: "2",
    value: "intramuros",
    label: "Intramuros",
    disabled: true
  }, {
    id: "3",
    value: "fortSantiago",
    label: "Fort Santiago"
  }, {
    id: "4",
    value: "chocolateHills",
    label: "Chocolate Hills"
  }, {
    id: "5",
    value: "tubbatahaReef",
    label: "Tubbataha Reef"
  }, {
    id: "6",
    value: "mayonVolcano",
    label: "Mayon Volcano"
  }, {
    id: "7",
    value: "banaueRiceTerraces",
    label: "Banaue Rice Terraces"
  }, {
    id: "8",
    value: "puertoPrincesaSubterraneanRiver",
    label: "Puerto Princesa Subterranean River"
  }];
  var handleSelectChange = function handleSelectChange(value) {
    setSelectedOption(value);
  };
  var submitHandler = function submitHandler(e) {
    e.preventDefault();
    e.stopPropagation();
    console.log(e.target.username.value);
    console.log(e.target.password.value);
    console.log(checkTerms);
    console.log(selectedRadioValues);
    console.log(selectedCheckboxValues);
    console.log(switchToggled);
    console.log(selectedOption.value);
  };
  var handleLabelAction = function handleLabelAction(e) {
    alert("Label action fired");
  };
  var radioOptions = [{
    id: "radio-1",
    label: "Radio Option 1"
  }, {
    id: "radio-2",
    label: "Radio Option 2"
  }, {
    id: "radio-3",
    label: "Radio Option 3",
    helpText: "You can also provide a helpText"
  }];
  var checkboxOptions = [{
    id: "checkbox-1",
    label: "Checkbox Option 1"
  }, {
    id: "checkbox-2",
    label: "Checkbox Option 2"
  }, {
    id: "checkbox-3",
    label: "Checkbox Option 3",
    helpText: "You can also provide a helpText"
  }];
  var links = [{
    label: "User",
    items: [{
      href: "/account-settings",
      label: "My Account",
      icon: /*#__PURE__*/(0, _jsxRuntime.jsx)("i", {
        className: "ri-user-line"
      })
    }, {
      href: "/sign-out",
      label: "Sign out",
      icon: /*#__PURE__*/(0, _jsxRuntime.jsx)("i", {
        className: "ri-login-box-line"
      })
    }]
  }, {
    label: "Info",
    items: [{
      href: "/support",
      label: "Support",
      icon: /*#__PURE__*/(0, _jsxRuntime.jsx)("i", {
        className: "ri-lifebuoy-line"
      })
    }, {
      href: "/license",
      label: "License",
      icon: /*#__PURE__*/(0, _jsxRuntime.jsx)("i", {
        className: "ri-article-line"
      })
    }]
  }];
  var _useState11 = (0, _react.useState)(["molecules", "buttons", "option", "switch", "inputfields", "indicator", "badge", "avatar", "select", "combobox", "menu", "richtext", "maskedinput"]),
    _useState12 = (0, _slicedToArray2.default)(_useState11, 2),
    finishedComponents = _useState12[0],
    setFinishedComponents = _useState12[1];
  var componentsList = [{
    id: "molecules",
    label: "Molecules (Color and Spacing Tokens)"
  }, {
    id: "buttons",
    label: "Button (Solid, Ghost, Text, and Icon)"
  }, {
    id: "option",
    label: "OptionList (Radio and Checkbox)"
  }, {
    id: "switch",
    label: "Switch"
  }, {
    id: "inputfields",
    label: "Input Field (Text/Text Area)"
  }, {
    id: "indicator",
    label: "Indicator"
  }, {
    id: "badge",
    label: "Badge"
  }, {
    id: "avatar",
    label: "Avatar"
  }, {
    id: "select",
    label: "Select"
  }, {
    id: "combobox",
    label: "Combobox"
  }, {
    id: "menu",
    label: "Menu"
  }, {
    id: "richtext",
    label: "Input Field (Rich Text)"
  }, {
    id: "maskedinput",
    label: "Input Field (Masked)"
  }, {
    id: "cards",
    label: "Card Variants"
  }, {
    id: "modal",
    label: "Modal (with Hooks)"
  }, {
    id: "alert",
    label: "Alert (with Hooks)"
  }, {
    id: "media",
    label: "Upload (File/Media)"
  }, {
    id: "table",
    label: "Table"
  }, {
    id: "breadcrumbs",
    label: "Breadcrumbs"
  }, {
    id: "tab",
    label: "Tab"
  }, {
    id: "navbar",
    label: "Navbar"
  }, {
    id: "ProgressBar",
    label: "Progress Bar"
  }, {
    id: "step",
    label: "Step"
  }, {
    id: "map",
    label: "Location Field"
  }, {
    id: "empty",
    label: "EmptyState"
  }, {
    id: "layout-table",
    label: "Page Layout: Table List"
  }, {
    id: "layout-wizard",
    label: "Page Layout: Add Wizard"
  }, {
    id: "layout-profile",
    label: "Page Layout: Profile"
  }];
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "App",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h1", {
      className: "text-display font-bold text-black p-24px font-default flex flex-row gap-40px w-full px-[170px]",
      children: "Stark Design System"
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "flex flex-row gap-40px w-full px-[170px] mb-40px",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "flex flex-col gap-16px",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h1", {
          className: "text-paragraph-title w-fit text-black font-default font-bold",
          children: "Snug Text Block"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
          className: "text-body leading-snug font-default",
          children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex dolorem nihil vel, pariatur perferendis cum officiis eligendi aliquid facere natus, tenetur officia ab architecto obcaecati amet, illo accusamus. Nihil, perferendis."
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, {
          small: true,
          primary: true
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "flex flex-col gap-16px",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h1", {
          className: "text-paragraph-title w-fit text-black font-default font-bold",
          children: "Relaxed Text Block"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
          className: "text-body leading-relaxed font-default",
          children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex dolorem nihil vel, pariatur perferendis cum officiis eligendi aliquid facere natus, tenetur officia ab architecto obcaecati amet, illo accusamus. Nihil, perferendis."
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "flex flex-row gap-4px",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, {
            small: true,
            primary: true
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_IconButton.default, {
            icon: /*#__PURE__*/(0, _jsxRuntime.jsx)("i", {
              className: "ri-menu-line"
            }),
            small: true
          })]
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "flex flex-col gap-16px",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h1", {
          className: "text-paragraph-title w-fit text-black font-default font-bold",
          children: "Loose Text Block"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
          className: "text-body leading-loose font-default",
          children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex dolorem nihil vel, pariatur perferendis cum officiis eligendi aliquid facere natus, tenetur officia ab architecto obcaecati amet, illo accusamus. Nihil, perferendis."
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, {
          small: true,
          primary: true
        })]
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: " flex flex-row gap-40px w-full px-[170px]",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "flex flex-col gap-24px w-full",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "p-40px border border-outline-default rounded-8px w-full flex flex-col items-start gap-24px",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h1", {
            className: "text-section-title font-bold pb-24px text-black",
            children: "Dropdown"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "flex flex-row gap-8px items-center justify-center",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Menu.default, {
              links: links,
              label: "Main Menu"
            })
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "p-40px border border-outline-default rounded-8px w-full",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h1", {
            className: "text-section-title font-bold pb-24px text-black",
            children: "Sample Form"
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("form", {
            className: " flex flex-col gap-24px",
            onSubmit: submitHandler,
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_InputField.default, {
              email: true,
              label: "Username",
              id: "username",
              placeholder: "Enter your username",
              attachedButton: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, {
                label: "Check"
              }),
              leadingItem: /*#__PURE__*/(0, _jsxRuntime.jsx)("i", {
                className: "ri-user-fill"
              }),
              trailingItem: /*#__PURE__*/(0, _jsxRuntime.jsx)("i", {
                className: "ri-check-line"
              }),
              labelAction: {
                label: "Action",
                action: handleLabelAction
              },
              helpText: "This can either be your username or email"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_InputField.default, {
              type: "password",
              label: "Password",
              id: "password"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_InputField.default, {
              type: "number",
              label: "Quantity",
              id: "number"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_InputField.default, {
              type: "email",
              label: "Email",
              id: "email",
              placeholder: "Enter your email",
              helpText: "Use your Google email",
              error: "Enter a valid email address"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_InputField.default, {
              label: "Contact Number",
              id: "contactnumber",
              mask: "9999 999 9999",
              placeholder: "-",
              value: "09"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_InputField.default, {
              type: "richtext",
              label: "Description",
              id: "description"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_InputField.default, {
              type: "textarea",
              label: "State Reason",
              id: "reason"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Select.default, {
              label: "My Select Label",
              id: "my-select",
              options: options,
              value: selectedOption,
              onChange: handleSelectChange,
              placeholder: "Choose an option",
              labelAction: {
                label: "Action",
                action: handleLabelAction
              },
              multiple: true
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Combobox.default, {
              label: "Example Combobox",
              id: "example-combobox",
              options: options,
              onChange: handleSelectChange,
              placeholder: "Your favorite place to go to date"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "flex flex-row gap-16px",
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Checkbox.default, {
                name: "terms-conditions",
                id: "terms-conditions",
                label: "I accept the terms and conditions",
                onChange: function onChange() {
                  return setCheckTerms(!checkTerms);
                },
                checked: checkTerms
              })
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
              className: "flex flex-row items-center gap-8px",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, {
                small: true,
                primary: true,
                label: "Login",
                submit: true
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                className: "text-body text-copy-caption font-semibold",
                children: "or"
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, {
                text: true,
                label: "Register now",
                onClick: function onClick() {
                  return alert("Clicked!");
                }
              })]
            })]
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "p-40px border border-outline-default rounded-8px w-full",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h1", {
            className: "text-section-title font-bold pb-24px text-black",
            children: "Checkbox, Radio, Switch, Option List"
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "flex flex-col gap-24px",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
              className: "flex flex-col gap-12px justify-start",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h3", {
                className: "text-paragraph-title font-semibold text-black",
                children: "Radio Option List"
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_OptionList.default, {
                id: "radioList",
                type: "radio",
                options: radioOptions,
                selectedValues: selectedRadioValues,
                onChange: setSelectedRadioValues,
                name: "example-radio-group"
              })]
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
              className: "flex flex-col gap-12px justify-start",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h3", {
                className: "text-paragraph-title font-semibold text-black",
                children: "Checkbox Option List"
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_OptionList.default, {
                id: "checkboxList",
                type: "checkbox",
                options: checkboxOptions,
                selectedValues: selectedCheckboxValues,
                onChange: setSelectedCheckboxValues
              })]
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
              className: "flex flex-col gap-12px justify-start",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h3", {
                className: "text-paragraph-title font-semibold text-black",
                children: "Switch"
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Switch.default, {
                id: "product-switch",
                checked: switchToggled,
                label: "This is turned on",
                helpText: switchToggled ? "Turned on" : "Turned off",
                onChange: function onChange() {
                  return setSwitchToggled(!switchToggled);
                }
              })]
            })]
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "p-40px border border-outline-default rounded-8px w-full",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h1", {
            className: "text-section-title font-bold pb-24px text-black",
            children: "Buttons"
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "flex flex-col gap-24px",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
              className: "flex flex-col gap-8px",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                className: "text-caption font-semibold uppercase tracking-wide text-copy-caption",
                children: "Types"
              }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                className: "flex flex-row gap-8px items-center",
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, {
                  label: "Solid Button",
                  primary: true
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, {
                  label: "Outline Button",
                  outline: true,
                  primary: true
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, {
                  label: "Text Button",
                  text: true,
                  secondary: true
                })]
              })]
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
              className: "flex flex-col gap-8px",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                className: "text-caption font-semibold uppercase tracking-wide text-copy-caption",
                children: "Colors"
              }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                className: "flex flex-row gap-8px items-center",
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, {
                  label: "default"
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, {
                  primary: true,
                  label: "primary"
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, {
                  secondary: true,
                  label: "secondary"
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, {
                  info: true,
                  label: "info"
                })]
              }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                className: "flex flex-row gap-8px items-center",
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, {
                  success: true,
                  label: "success"
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, {
                  danger: true,
                  label: "danger"
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, {
                  warning: true,
                  label: "warning"
                })]
              })]
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
              className: "flex flex-col gap-8px items-start",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                className: "text-caption font-semibold uppercase tracking-wide text-copy-caption",
                children: "Sizes"
              }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                className: "flex flex-row gap-8px",
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, {
                  small: true,
                  label: "Small Button"
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, {
                  label: "Medium Button",
                  primary: true
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, {
                  label: "Large Button",
                  large: true,
                  secondary: true
                })]
              })]
            })]
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "p-40px border border-outline-default rounded-8px w-full flex flex-col items-start gap-24px",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h1", {
            className: "text-section-title font-bold pb-24px text-black",
            children: "Avatar"
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "flex flex-row gap-8px items-center justify-center",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Avatar.default, {
              tiny: true,
              text: "MN"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Avatar.default, {
              small: true,
              text: "MN"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Avatar.default, {
              default: true,
              text: "MN"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Avatar.default, {
              large: true,
              text: "MN"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Avatar.default, {
              xlarge: true,
              text: "MN"
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "flex flex-row gap-8px items-center justify-center",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Avatar.default, {
              tiny: true,
              icon: /*#__PURE__*/(0, _jsxRuntime.jsx)("i", {
                className: "ri-account-circle-fill"
              })
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Avatar.default, {
              small: true
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Avatar.default, {
              default: true
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Avatar.default, {
              large: true
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Avatar.default, {
              xlarge: true
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "flex flex-row gap-8px items-center justify-center",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Avatar.default, {
              tiny: true,
              image: "https://images.unsplash.com/photo-1546994372-f636adc59e4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Avatar.default, {
              small: true,
              image: "https://images.unsplash.com/photo-1546994372-f636adc59e4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Avatar.default, {
              default: true,
              image: "https://images.unsplash.com/photo-1546994372-f636adc59e4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Avatar.default, {
              large: true,
              image: "https://images.unsplash.com/photo-1546994372-f636adc59e4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Avatar.default, {
              xlarge: true,
              image: "https://images.unsplash.com/photo-1546994372-f636adc59e4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            })]
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "p-40px border border-outline-default rounded-8px w-full flex flex-col items-start gap-24px",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h1", {
            className: "text-section-title font-bold pb-24px text-black",
            children: "Badge"
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "flex flex-row gap-8px items-center justify-center",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Badge.default, {
              label: "Badge",
              circular: true
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Badge.default, {
              label: "Available",
              outline: true,
              success: true,
              leadingItem: /*#__PURE__*/(0, _jsxRuntime.jsx)(_StatusIndicator.default, {
                medium: true,
                status: "online"
              }),
              circular: true
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Badge.default, {
              label: "Unavailable",
              outline: true,
              danger: true,
              leadingItem: /*#__PURE__*/(0, _jsxRuntime.jsx)(_StatusIndicator.default, {
                medium: true,
                status: "away"
              })
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Badge.default, {
              label: "Badge",
              secondary: true,
              dismissible: true
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "flex flex-row gap-8px items-center justify-center",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Badge.default, {
              label: "Badge"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Badge.default, {
              label: "Badge",
              secondary: true
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Badge.default, {
              label: "Badge",
              info: true
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Badge.default, {
              label: "Badge",
              success: true
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Badge.default, {
              label: "Badge",
              warning: true
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Badge.default, {
              label: "Badge",
              danger: true
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "flex flex-row gap-8px items-center justify-center",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Badge.default, {
              label: "Noya, Mark",
              outline: true,
              leadingItem: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Avatar.default, {
                tiny: true
              }),
              circular: true
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Badge.default, {
              label: "Badge",
              outline: true,
              secondary: true
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Badge.default, {
              label: "Badge",
              outline: true,
              info: true
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Badge.default, {
              label: "Badge",
              outline: true,
              success: true
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Badge.default, {
              label: "Badge",
              outline: true,
              warning: true
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Badge.default, {
              label: "Badge",
              outline: true,
              danger: true
            })]
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "p-40px border border-outline-default rounded-8px w-full flex flex-col items-start gap-24px",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h1", {
            className: "text-section-title font-bold pb-24px text-black",
            children: "Status Indicator"
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "flex flex-row gap-8px items-center justify-center",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_StatusIndicator.default, {
              medium: true,
              status: "online"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_StatusIndicator.default, {
              medium: true,
              status: "offline"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_StatusIndicator.default, {
              medium: true,
              status: "busy"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_StatusIndicator.default, {
              medium: true,
              status: "away"
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "flex flex-row gap-8px items-center justify-center",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_StatusIndicator.default, {
              small: true,
              status: "online"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_StatusIndicator.default, {
              medium: true,
              status: "offline"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_StatusIndicator.default, {
              large: true,
              status: "busy"
            })]
          })]
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "p-40px w-full h-fit border border-outline-default rounded-8px",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h1", {
          className: "text-section-title font-bold text-black",
          children: "Foundations and Components"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_OptionList.default, {
          type: "checkbox",
          id: "components-list",
          options: componentsList,
          selectedValues: finishedComponents,
          onChange: function onChange() {
            return setFinishedComponents;
          },
          name: "Components",
          className: "mt-20px"
        })]
      })]
    })]
  });
}
var _default = App;
exports.default = _default;