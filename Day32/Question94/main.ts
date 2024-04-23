/*Day 32
Question 94: Use the .map() method to create a new array that contains the length of each word 
from an array of words.*/

let fruits = ["apple","orange", "banana", "grape", "apricot"];
let words = fruits.map(word => word.length)
console.log(words);