"use strict";
// Multiple named exports can exist in a module
Object.defineProperty(exports, "__esModule", { value: true });
exports.multiplyNumbers = exports.subtractNumbers = void 0;
function addNumbers(a, b) {
    return a + b;
}
exports.default = addNumbers;
function subtractNumbers(a, b) {
    return a - b;
}
exports.subtractNumbers = subtractNumbers;
function multiplyNumbers(a, b) {
    return a * b;
}
exports.multiplyNumbers = multiplyNumbers;
