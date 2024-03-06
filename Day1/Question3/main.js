"use strict";
/*Day 1
Question 3: Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.*/
let personName1 = "Ali Haider Noorani"; //Stores person name
console.log(personName1.toUpperCase()); //Shows name in uppercase
console.log(personName1.toLowerCase()); //Shows name in lowercase
console.log(personName1.replace(/\b\w/g, word => word.toUpperCase())); //Shows name in titlecase
