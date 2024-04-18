"use strict";
/*Day 30
Question 89: Converting Strings to Numbers: Create a function that takes a string
representing a number (like "123") and converts it into an actual number type*/
function stringConverter(int) {
    return parseFloat(int); //Converts a string representing number into a number
}
console.log(stringConverter("123"));
console.log(stringConverter("98.5"));
