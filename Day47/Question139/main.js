/* Day 47
Question 139: List three reserved words in JavaScript and create a valid use case for each. */
// Reserved word: for - used to create a loop that runs a block of code a specified number of times
for (var i = 0; i < 5; i++) {
    console.log("Iteration number: ".concat(i));
}
// Reserved word: let - used to declare a block scoped local variable
var num = 6;
// Reserved word: if - used to execute a block of code if the statement is true
if (num < 5) {
    console.log("The number is less than 5");
}
else {
    console.log("The number is greater than 5");
}
// Demonstrates valid use cases for the reserved words 'for', 'let', and 'if'
