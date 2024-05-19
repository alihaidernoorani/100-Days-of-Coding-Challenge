/*Day 32
Question 94: Use the .map() method to create a new array that contains the length of each word
from an array of words.*/
var fruits = ["Apple", "Orange", "Grape", "Banana"];
var fruitLength = fruits.map(function (fruit) { return fruit.length; }); // Uses .map() to create a new array with the length of each fruit
console.log(fruitLength);
