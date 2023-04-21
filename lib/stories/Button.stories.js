"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Small = exports.Secondary = exports.Primary = exports.Large = void 0;
var _Button = require("./Button");
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
var _default = {
  title: 'Example/Button',
  component: _Button.Button,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: {
      control: 'color'
    }
  }
}; // More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
exports.default = _default;
var Primary = {
  args: {
    primary: true,
    label: 'Button'
  }
};
exports.Primary = Primary;
var Secondary = {
  args: {
    label: 'Button'
  }
};
exports.Secondary = Secondary;
var Large = {
  args: {
    size: 'large',
    label: 'Button'
  }
};
exports.Large = Large;
var Small = {
  args: {
    size: 'small',
    label: 'Button'
  }
};
exports.Small = Small;