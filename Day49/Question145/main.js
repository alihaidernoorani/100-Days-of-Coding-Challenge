"use strict";
/* Day 49
Question 145: Create a function that accepts a callback and invokes it with some arguments. */
function sumOfRandomNumbers() {
    const num1 = Math.floor(Math.random() * 10);
    console.log(num1);
    const num2 = Math.floor(Math.random() * 10);
    console.log(num2);
    sumNumbers(num1, num2);
}
function sumNumbers(num1, num2) {
    console.log(num1 + num2);
}
sumOfRandomNumbers();
