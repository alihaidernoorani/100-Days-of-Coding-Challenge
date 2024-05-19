/*Day 32
Question 96: Demonstrate how to use the .reduce() method to calculate the sum
of all numbers in an array.*/
// This function calculates the sum of all numbers in an array
function calculateSum(numbers) {
    return numbers.reduce(function (acc, curr) { return acc + curr; }, 0);
}
var numbers = [5, 4, 7, 8, 5];
var sum = calculateSum(numbers);
console.log(sum);
