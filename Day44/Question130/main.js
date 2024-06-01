"use strict";
/* Day 44
Question 130: Explain how to export a function from one JavaScript file and import it into another file. */
Object.defineProperty(exports, "__esModule", { value: true });
// In another file where you want to use the add function:
var mathfunction_1 = require("./mathfunction");
console.log((0, mathfunction_1.add)(5, 3));
// Demonstrates importing the add function from mathFunctions.ts and using it.
