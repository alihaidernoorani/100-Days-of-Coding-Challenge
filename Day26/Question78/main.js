"use strict";
/*Day 26
Question 78: Function Expressions vs. Function Declarations:
Compare function expressions and declarations by
creating one of each that performs the same task, such as squaring a number.*/
function squareNumber(num1) {
    return num1 * num1;
}
let square = function (num1) {
    return num1 * num1;
};
console.log(`Using function declaration the square of the number is ${square(5)}`);
console.log(`Using function expression the square of the number is ${squareNumber(5)}`);
