"use strict";

var _jquery = _interopRequireDefault(require("jquery"));

var _module = require("./module1");

var _module2 = require("./module2");

var _module3 = _interopRequireDefault(require("./module3"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _module.fn1)();
(0, _module.fn2)();
(0, _module2.bar1)();
(0, _module2.bar2)();

_module3.default.foo();

(0, _jquery.default)('body').css('backgroundColor', 'orange');