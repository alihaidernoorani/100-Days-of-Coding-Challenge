"use strict";
/*Day 8
Question 22: Intentional Error: Try to produce an array index error in one of your programs. Correct the error before finishing.
*/
let countries = ["Canada", "Brazil", "Germany", "Austrailia"]; //Stores the names of countries in an array
console.log("The last index item is", countries[4]); //Index error as arrays start with index 0 and there is no index 4 in the given array
console.log("The last index item is", countries[3]); //Should show Austrailia as index 4 is the last index item
