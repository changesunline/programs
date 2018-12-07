"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bar1 = bar1;
exports.bar2 = bar2;

function bar1() {
  console.log('bar1 module2');
}

function bar2() {
  console.log('bar2 module2');
}