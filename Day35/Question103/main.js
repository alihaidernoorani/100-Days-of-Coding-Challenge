/*Day 35
Question 103: Write a function that returns a random boolean value, true or false.*/
// This function returns a random boolean value
function checkBoolean() {
    return Math.random() > 0.5; // Returns true if the random number is greater than 0.5
}
console.log(checkBoolean()); // The output would be true or false at random
