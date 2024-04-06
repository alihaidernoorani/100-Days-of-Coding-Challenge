"use strict";
/*Question 66: Logical AND Verification: Create a function that checks two boolean
(true or false) values. It should only say true if both are true, using the && operator.
For instance, checkBothTrue(true, false) should be false.*/
function checkBothTrue(value1, value2) {
    return value1 && value2; //Returns true if both of the values are true otherwise returns false
}
console.log(checkBothTrue(true, true));
