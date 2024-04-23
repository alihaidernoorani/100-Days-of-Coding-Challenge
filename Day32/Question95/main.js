"use strict";
/*Day 32
Question 95: Write a function that uses the .filter() method to return an array of numbers
greater than 10.*/
function numberSorter(numbers) {
    return numbers.filter(number => number > 10);
}
console.log(numberSorter([2, 5, 7, 5, 20, 30, 150]));
