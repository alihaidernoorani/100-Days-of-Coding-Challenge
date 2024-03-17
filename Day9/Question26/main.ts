/*Day 9
Question 26: Alien Colors #2: Choose a color for an alien, then write an if-else chain.*/

//The version where the if block is run
console.log("The version where the if block is run");
let alien_color: string = "green";

if (alien_color == "green"){
    console.log("You just earned 5 points!");
}
else{
    console.log("You just earned 10 points!");
}

//The version where the else block is run
console.log("\nThe version where the else block is run");
alien_color = "red"

if (alien_color == "green"){
    console.log("You just earned 5 points!");
}
else{
    console.log("You just earned 10 points!");
}
