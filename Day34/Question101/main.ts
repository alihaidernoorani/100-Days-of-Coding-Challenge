/*Day 34
Question 101: Generate a random integer between 1 and 10.*/

function randomInteger() {
    let variable = Math.floor(Math.random() * 10) + 1; // Generate a random number between 1 and 10
    return variable;
}

console.log(randomInteger());