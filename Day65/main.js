"use strict";
// Type Annotations with Function
// Simple example illustrating type annotations with functions:
// Function to calculate the area of a rectangle
function calculateRectangleArea(long, width) {
    return long * width;
}
// Calling the function with valid arguments
const long = 5;
const width = 3;
const area = calculateRectangleArea(long, width);
console.log(`The area of the rectangle is: ${area}`);
// Optional Parameters
function greetOptional(name, age) {
    if (age !== undefined) {
        console.log(`Hello, ${name}! You are ${age} years old.`);
    }
    else {
        console.log(`Hello, ${name}!`);
    }
}
greetOptional("Alice"); // Output: "Hello, Alice!"
greetOptional("Bob", 30); // Output: "Hello, Bob! You are 30 years old."
// Default Parameters
function greetDefault(name, age = 25) {
    console.log(`Hello, ${name}! You are ${age} years old.`);
}
greetDefault("Alice"); // Output: "Hello, Alice! You are 25 years old."
greetDefault("Bob", 30); // Output: "Hello, Bob! You are 30 years old."
// Function with a rest parameter and type annotations
function addAll(...nums) {
    let result = 0;
    for (let i = 0; i < nums.length; i++) {
        result += nums[i];
    }
    return result;
}
// Calling the function with various numeric arguments
console.log(addAll(10, 20, 30, 100, 10.5, +"2")); // Output: 170.5
// pro tip +true in JavaScript is a unary plus operator (+) applied to the boolean true, resulting in the numeric value 1
// Arrow Function
const addWithArrow = (num1, num2) => num1 + num2;
console.log(addWithArrow(10, 20)); // Output: 30
const add = function (num1, num2) {
    return num1 + num2;
};
console.log(add(10, 20)); // Output: 30
// void & never
// void
function greet(name) {
    console.log(`Hello, ${name}!`);
}
function noReturnValue() {
    // This function doesn't return a value (implicitly returns undefined).
}
// never
function throwError(message) {
    throw new Error(message);
}
function infiniteLoop() {
    while (true) {
        // This function never exits (infinite loop).
    }
}
