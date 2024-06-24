// Union Types

let myVar: string | number;

myVar = "Hello"; // Valid assignment
console.log(myVar);

myVar = 42;       // Valid assignment
console.log(myVar);

// In this code, myVar is annotated with a union type of string | number, which means it can hold either string or number values.
// You can assign values of either type to it without causing a type error. 


// Literal Types

// You can define a literal type like this:
let direction: "left" | "right" | "up" | "down";

// Here's an example of using a literal type in a function parameter:
function setColor(color: "red" | "green" | "blue") {
    // ...
}


// Nullable Types

// In TypeScript, you can create a nullable type by appending | null to an existing data type. For example:
let username: string | null = "Glitcher";
let age: number | null = null;

function greetUser(username: string | null) {
    if (username === null) {
        console.log("Hello, Guest!");
    } else {
        console.log(`Hello, ${username}!`);
    }
}

greetUser("Glitcher"); // Output: Hello, Glitcher!
greetUser(null);     // Output: Hello, Guest!


// Type Alias

// Define a type alias for string
type MyString = string;

// Use the type alias for string
let myName: MyString = "Glitcher";

// Define a type alias for a union of string or number
type MyStringOrNumber = string | number;

// Use the type alias for the union type
let myValue: MyStringOrNumber = 10;

// let's explore another example, this time using a Type Alias with objects.
type Person = {
    name: string;
    age: number;
    email?: string;
};
  
const alice: Person = {
    name: "Alice",
    age: 30,
    email: "alice@example.com",
};

const bob: Person = {
    name: "Bob",
    age: 25,
};

console.log(alice);
console.log(bob);
  
// another example
//   type Employee = {
//     name: string;
//     age: number;
//     email?: string;
//   };
  
//   const alice: Employee = {
//     name: "Alice",
//     age: 30,
//     email: "alice@example.com",
//   };
  
//   const bob: Employee = {
//     name: "Bob",
//     age: 25,
//   };
  
//   console.log(alice);
//   console.log(bob);


// Intersection Type

type FirstType = {
    name: string;
    age: number;
};
  
type SecondType = {
    address: string;
    phone: string;
};
  
type CombinedType = FirstType & SecondType;
  
const person: CombinedType = {
    name: 'John Doe',
    age: 30,
    address: '123 Main St',
    phone: '123-456-7890'
};
  
  
