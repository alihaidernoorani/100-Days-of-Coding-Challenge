"use strict";
/*Day 6
Question 18: Seeing the World: Think of at least five places you’d like to visit.
*/
let places = ["Paris", "London", "New York", "Berlin", "Amsterdam"];
console.log("Original list of places: ", places);
//Sorts the list alphabetically using the spread operator. It has no effect on the original list
console.log("Alphabetical order:", [...places].sort());
console.log("Original list: ", places);
//Sorts the list in reversed alphabetical order using the spread operator. It has no effect on the original list
console.log("Reversed alphabetical order: ", [...places].sort().reverse());
console.log("Original list: ", places);
//Reverses the places list
console.log("Reversed order:", places.reverse());
//Reversing the reversed order bring back the original list
console.log("Original order:", places.reverse());
//Sorts the list aphabetically
console.log("Alphabetical order:", places.sort());
//Reverses the alphabetically sorted list
console.log("Reverse alphabetical order:", places.reverse());
