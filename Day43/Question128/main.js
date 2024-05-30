/* Day 43
Question 128: Create an arrow function that takes multiple parameters and returns the product of all parameters. */
var product = function (num1) {
    var num2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        num2[_i - 1] = arguments[_i];
    }
    return num2.reduce(function (acc, val) { return acc * val; }, num1);
};
console.log(product(2, 6, 8, 9)); // Output: 864
