"use strict";
/*Day 24
Question 71: Compare let and const: Create two examples where let allows reassignment
but const does not. Try to reassign a const-declared variable and catch the error.*/
// Example 1: Using let
let age = 30;
console.log("Initial age (using let):", age);
age = 35; // Reassigning the value of 'age'
console.log("Updated age (using let):", age);
// Example 2: Using const
const pi = 3.142;
console.log("Value of pi (using const):", pi);
try {
    // Trying to reassign 'pi' (will throw an error)
    pi = 3.14;
}
catch (error) {
    console.log("Error caught: Can't reassign a const-declared variable.");
}
