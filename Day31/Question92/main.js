"use strict";
/*Day 31
Question 92: Write a function to remove the last element from an array and return the removed element.*/
function removeLastElement(str) {
    return str.pop();
}
let cities = ["Karachi", "Lahore", "Islamabad"];
console.log(removeLastElement(cities));
