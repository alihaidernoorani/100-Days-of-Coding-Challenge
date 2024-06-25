"use strict";
// Union Types
let myVar;
myVar = "Hello"; // Valid assignment
console.log(myVar);
myVar = 42; // Valid assignment
console.log(myVar);
// In this code, myVar is annotated with a union type of string | number, which means it can hold either string or number values.
// You can assign values of either type to it without causing a type error. 
// Literal Types
// You can define a literal type like this:
let direction;
// Here's an example of using a literal type in a function parameter:
function setColor(color) {
    // ...
}
// Nullable Types
// In TypeScript, you can create a nullable type by appending | null to an existing data type. For example:
let username = "Glitcher";
let age = null;
function greetUser(username) {
    if (username === null) {
        console.log("Hello, Guest!");
    }
    else {
        console.log(`Hello, ${username}!`);
    }
}
greetUser("Glitcher"); // Output: Hello, Glitcher!
greetUser(null); // Output: Hello, Guest!
// Use the type alias for string
let myName = "Glitcher";
// Use the type alias for the union type
let myValue = 10;
const alice = {
    name: "Alice",
    age: 30,
    email: "alice@example.com",
};
const bob = {
    name: "Bob",
    age: 25,
};
console.log(alice);
console.log(bob);
const person = {
    name: 'John Doe',
    age: 30,
    address: '123 Main St',
    phone: '123-456-7890'
};
