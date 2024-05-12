/*Day 25
Question 74: Swapping Variables: Demonstrate how to swap the values of two variables.
Start with variables a = 5 and b = 10, then swap their values so that a becomes 10 and b becomes 5.*/
var a = 5;
var b = 10;
var c;
console.log("Before swap: a is ".concat(a, " and b is ").concat(b));
c = a;
a = b;
b = c;
console.log("After swap: a is ".concat(a, " and b is ").concat(b));
