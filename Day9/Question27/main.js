"use strict";
/*Day 9
Question 27: Alien Colors #3: Convert your if-else chain to handle three colors: green, yellow, red.
*/
//The version where the alien colour is green
console.log("The version where the alien colour is green");
let alien_color = "green";
if (alien_color == "green") {
    console.log("You earned 5 points!");
}
else if (alien_color == "yellow") {
    console.log("You earned 10 points!");
}
else if (alien_color == "red") {
    console.log("You earned 15 points!");
}
//The version where the alien colour is yellow
console.log("\nThe version where the alien colour is yellow");
alien_color = "yellow";
if (alien_color == "green") {
    console.log("You earned 5 points!");
}
else if (alien_color == "yellow") {
    console.log("You earned 10 points!");
}
else if (alien_color == "red") {
    console.log("You earned 15 points!");
}
//The version where the alien colour is red
console.log("\nThe version where the alien colour is red");
alien_color = "red";
if (alien_color == "green") {
    console.log("You earned 5 points!");
}
else if (alien_color == "yellow") {
    console.log("You earned 10 points!");
}
else if (alien_color == "red") {
    console.log("You earned 15 points!");
}
