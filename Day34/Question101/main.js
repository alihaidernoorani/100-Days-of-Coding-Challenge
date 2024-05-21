/*Day 34
Question 101: Generate a random integer between 1 and 10.*/
// Generates a random integer between 1 and 10
function generateRandomInteger() {
    return Math.floor(Math.random() * 10) + 1;
}
console.log(generateRandomInteger());
// This function combines Math.random() with Math.floor() to create a random integer within our range.c
