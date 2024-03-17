/*Day 9
Question 25: Alien Colors #1: Imagine an alien was just shot down in a game. Assign 'green', 'yellow', or 'red'
to a variable called alien_color. */
var alien_color = "green";
//The version that passes
if (alien_color == "green") {
    console.log("You just earned 5 points!");
}
//The version that fails
alien_color = "red";
if (alien_color == "green") {
    //No output because the condition is false
}
