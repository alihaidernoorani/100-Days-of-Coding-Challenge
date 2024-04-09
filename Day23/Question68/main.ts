/*Day 23
Question 68: Multiplying Decimals: Create a function that accepts two decimal numbers 
and returns their product. Round the result to two decimal places.*/

function multiplyDecimals(number1: number, number2: number){
    return (number1*number2).toFixed(2) //Rounds the product to 2 decimal places
}

console.log(multiplyDecimals(3.1455,2.45));