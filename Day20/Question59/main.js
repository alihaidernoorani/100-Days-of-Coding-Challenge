"use strict";
/*Day 20
Question 59: Add a Special Number: Make a program that creates custom adders.
These adders can add a specific number to any other number you give them later.*/
function customAdder(num) {
    let specialNumber = 6;
    num = num + specialNumber;
    return num;
}
console.log(customAdder(5));
