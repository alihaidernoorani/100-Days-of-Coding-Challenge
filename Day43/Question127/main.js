/* Day 43
Question 127: Convert a traditional function expression to an arrow function. */
// Traditional function expression
var traditionalFunction = function (a, b) {
    return a + b;
};
// Converted to an arrow function
var arrowFunction = function (a, b) { return a + b; };
// Same output
console.log(traditionalFunction(5, 3)); // Output: 8
console.log(arrowFunction(5, 3)); // Output: 8
