/*Day 30
Question 90: Checking if a Value is NaN: Demonstrate how to
check if a variable's value is NaN (Not a Number)
and return a boolean result.*/
function checkValue(value) {
    return isNaN(value); //Returns true if the variable is not a number otherwise returns false
}
console.log(checkValue("Hello"));
console.log(checkValue(123));
