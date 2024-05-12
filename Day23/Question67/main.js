/*Day 23
Question 67: Arithmetic with Mixed Types: Write a function that takes two parameters:
a number and a string that represents a number (e.g., "5"). Return their sum as a number.*/
function mixedTypesArtithmetic(value1, value2) {
    return value1 + Number(value2); //Converts the string into a number and adds both numbers
}
console.log(mixedTypesArtithmetic(7, "5"));
