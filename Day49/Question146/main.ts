/* Day 49
Question 146: Show an example of a callback function used to filter an array of numbers. */

// This array of numbers will be filtered
const numbers: number[] = [1,2,5,3,4,6,8,9];

// Uses .filter() with a callback function to filter out numbers greater than 5
const filteredNumbers: number[] = numbers.filter((number) => number > 5);

console.log(filteredNumbers);
// The callback function here checks each number, and .filter() creates a new array with numbers that meet the criteria