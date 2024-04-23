/*Day 32
Question 96: Demonstrate how to use the .reduce() method to calculate the sum 
of all numbers in an array.*/

let numbers: number[] = [5,6,7,10,3];
let sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue,0);
console.log(sum);