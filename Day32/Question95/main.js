"use strict";
/*Day 32
Question 95: Write a function that uses the .filter() method to return an array of numbers
greater than 10.*/
// This function filters an array, keeping only numbers greater than 10
function filterNumbers(...numbers) {
    return numbers.filter(number => number > 10);
}
console.log(filterNumbers(3, 5, 7, 15, 25));
