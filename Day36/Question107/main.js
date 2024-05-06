"use strict";
/*Day 36
Question 107: Write a condition using logical operators that checks if a number is divisible by
both 2 and 3.*/
function divisibilityCheck(num) {
    return (num % 2 === 0 && num % 3 === 0);
}
console.log(divisibilityCheck(12));
console.log(divisibilityCheck(7));
console.log(divisibilityCheck(6));
