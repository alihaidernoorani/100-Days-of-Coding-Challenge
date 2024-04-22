"use strict";
/*Day 31
Question 93: Find the index of "Banana" in an array of fruits and replace it with "Mango".*/
function fruitReplacer(fruits) {
    let fruitIndex = fruits.indexOf("Banana");
    if (fruitIndex != -1) {
        fruits[fruitIndex] = "Mango";
    }
    return fruits;
}
let fruits = ["Apple", "Banana", "Cherry"];
console.log(fruitReplacer(fruits));
