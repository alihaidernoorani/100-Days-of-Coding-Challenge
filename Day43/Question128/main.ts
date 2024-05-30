/* Day 43
Question 128: Create an arrow function that takes multiple parameters and returns the product of all parameters. */

const product = (num1: number, ...num2: number[]): number => {
    return num2.reduce((acc, val) => acc * val, num1);
}

console.log(product(2,6,8,9)) // Output: 864