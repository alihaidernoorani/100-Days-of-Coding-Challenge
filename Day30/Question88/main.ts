/*Day 30
Question 88: Rounding to the Nearest Integer: 
Write a function that takes a decimal number as input 
and returns the number rounded to the nearest integer.*/

function roundingInteger (int: number){
    return Math.round(int); //Rounds the integer
}
console.log(roundingInteger(2.74));
console.log(roundingInteger(2.45));