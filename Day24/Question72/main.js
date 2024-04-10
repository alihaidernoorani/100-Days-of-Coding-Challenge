"use strict";
/*Day 24
Question 72: Block Scope with let and const: Demonstrate block scope by
creating a code block with {} that uses both let and const.
Show how variables declared inside the block are not accessible outside of it.*/
let fruit = "apple";
console.log(`Outside the code block fruit is ${fruit}`);
function fruits() {
    let fruit = "orange";
    const personName = "Ali";
    console.log(`let defined fruit is ${fruit} and const defined personName is ${personName}`);
}
fruits();
