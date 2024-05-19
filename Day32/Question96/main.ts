/*Day 32
Question 96: Demonstrate how to use the .reduce() method to calculate the sum 
of all numbers in an array.*/

// This function calculates the sum of all numbers in an array
function calculateSum (numbers: number[]): number{
    return numbers.reduce((acc, curr) => acc + curr, 0);
}

const numbers: number[] = [5,4,7,8,5];

const sum = calculateSum(numbers);

console.log(sum);