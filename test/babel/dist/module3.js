"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  foo: function foo() {
    console.log('我是默认暴露的 module3');
  }
};
exports.default = _default;