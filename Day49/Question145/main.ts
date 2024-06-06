/* Day 49
Question 145: Create a function that accepts a callback and invokes it with some arguments. */

function sumOfRandomNumbers (){
    const num1 = Math.floor(Math.random() * 10);
    const num2 = Math.floor(Math.random() * 10);
    sumNumbers(num1, num2);
}

function sumNumbers (num1: number, num2: number){
   console.log(num1 + num2);
}

sumOfRandomNumbers();