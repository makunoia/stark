"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.LoggedOut = exports.LoggedIn = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _testingLibrary = require("@storybook/testing-library");
var _Page = require("./Page");
var _default = {
  title: 'Example/Page',
  component: _Page.Page,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen'
  }
};
exports.default = _default;
var LoggedOut = {};

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
exports.LoggedOut = LoggedOut;
var LoggedIn = {
  play: function () {
    var _play = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(_ref) {
      var canvasElement, canvas, loginButton;
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            canvasElement = _ref.canvasElement;
            canvas = (0, _testingLibrary.within)(canvasElement);
            _context.next = 4;
            return canvas.getByRole('button', {
              name: /Log in/i
            });
          case 4:
            loginButton = _context.sent;
            _context.next = 7;
            return _testingLibrary.userEvent.click(loginButton);
          case 7:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    function play(_x) {
      return _play.apply(this, arguments);
    }
    return play;
  }()
};
exports.LoggedIn = LoggedIn;