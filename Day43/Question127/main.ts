/* Day 43
Question 127: Convert a traditional function expression to an arrow function. */

// Traditional function expression
const traditionalFunction = function (a: number, b: number): number {
    return a + b;
}

// Converted to an arrow function
const arrowFunction = (a: number, b: number) => a + b;

// Same output
console.log(traditionalFunction(5,3)); // Output: 8
console.log(arrowFunction(5,3)); // Output: 8
