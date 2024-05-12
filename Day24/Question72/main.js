/*Day 24
Question 72: Block Scope with let and const: Demonstrate block scope by
creating a code block with {} that uses both let and const.
Show how variables declared inside the block are not accessible outside of it.*/
var fruit = "apple";
console.log("Outside the code block fruit is ".concat(fruit));
function fruits() {
    var fruit = "orange";
    var personName = "Ali";
    console.log("let defined fruit is ".concat(fruit, " and const defined personName is ").concat(personName));
}
fruits();
