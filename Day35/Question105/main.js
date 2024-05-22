/*Day 35
Question 105: Simulate a dice roll using JavaScript and return a random integer between 1 and 6.*/
// This function simulates rolling a dice and returns a number between 1 and 6
function generateDiceRoll() {
    return (Math.floor(Math.random() * 6)) + 1; // Calculates a random integer from 1 to 6
}
console.log(generateDiceRoll()); // Outputs a random number between 1 and 6
