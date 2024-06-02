/* Day 45
Question 135: Explain how you can format a JSON string with proper indentation for readability. */

let person = {
    name: "Ali",
    age: "25",
    city: "Karachi"
}

console.log(JSON.stringify(person, null, 2))