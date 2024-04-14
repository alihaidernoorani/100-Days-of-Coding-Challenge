"use strict";
/*Day 29
Question 86: Checking for Text Presence:
Create a function that checks if the word "JavaScript" is present in a given string.
It should return true if found, otherwise false.*/
function JavaScriptChecker(str) {
    return str.indexOf("JavaScript") != -1;
}
console.log(JavaScriptChecker("JavaScript is the best programming language"));
