/*Day 35
Question 103: Write a function that returns a random boolean value, true or false.*/

function randomBoolean(): boolean {
    let variable: number = Math.random()
    return variable > 0.5;
}

console.log(randomBoolean());