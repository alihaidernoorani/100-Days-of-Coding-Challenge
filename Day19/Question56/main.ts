/*Day 19
Question 56: Keep Only Strings: Given a mix of different types of items, make a new list that has only the words.*/


let items = ["icecream", "cigaratte", "cold drink", 5 , true ]

let newitems = items.filter(item => typeof item === "string");
console.log(newitems);