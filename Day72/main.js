"use strict";
// Generics
// A generic function that returns the input value as is
function returnType(val) {
    return val;
}
// Usage of the generic function with different types
const numValue = returnType(100);
const strValue = returnType("Elzero");
const boolValue = returnType(true);
const arrValue = returnType([1, 2, 3, 4]);
console.log(`Number Value: ${numValue}`);
// Outputs: "Number Value: 100"
console.log(`String Value: ${strValue}`);
// Outputs: "String Value: Elzero"
console.log(`Boolean Value: ${boolValue}`);
// Outputs: "Boolean Value: true"
console.log(`Array Value: ${arrValue}`);
// Outputs: "Array Value: 1,2,3,4"
// Generics Multiple Types
// Generic Function 'returnTypeEx'
function returnTypeEx(val) {
    return val;
}
console.log(returnTypeEx(100)); // Returns: 100 (number)
// Outputs: 100
console.log(returnTypeEx("Elzero")); // Returns: "Elzero" (string)
// Outputs: "Elzero"
// Arrow Function with Generics `returnTypeArrowSyntax`
const returnTypeArrowSyntax = (val) => val;
console.log(returnTypeArrowSyntax(100)); // Returns: 100 (number)
// Outputs: 100
console.log(returnTypeArrowSyntax("Elzero")); // Returns: "Elzero" (string)
// Outputs: "Elzero"
// Generic Function `testType`
function testType(val) {
    return `The Value Is ${val} And Type Is ${typeof val}`;
}
console.log(testType(100));
// Outputs: "The Value Is 100 And Type Is number"
console.log(testType("Elzero"));
// Outputs: "The Value Is Elzero And Type Is string"
// Generic Function `multipleTypes`
function multipleTypes(valueOne, valueTwo) {
    return `The First Value Is ${valueOne} And Second Value ${valueTwo}`;
}
console.log(multipleTypes("Osama", 100));
// Outputs: "The First Value Is Osama And Second Value 100"
console.log(multipleTypes("Elzero", true));
// Outputs: "The First Value Is Elzero And Second Value true"
// Generics Classes
// Generic Class `User`
class User {
    constructor(value) {
        this.value = value;
    }
    // Method that takes a message of type `T` and displays it along with the `value` property
    show(msg) {
        console.log(`${msg} - ${this.value}`);
    }
}
// Creating an instance of `User` with a specific type parameter (string)
let userOne = new User("Elzero");
console.log(userOne.value); // Outputs: "Elzero"
userOne.show("Message"); // Outputs: "Message - Elzero"
// Creating an instance of `User` with a type parameter that can be a number or a string
let userTwo = new User(100);
console.log(userTwo.value); // Outputs: 100
userTwo.show("Message"); // Outputs: "Message - 100"
// Generic Class `Collection`
class Collection {
    constructor() {
        this.data = [];
    }
    // Method to add an item of type `T` to the collection
    add(item) {
        this.data.push(item);
    }
}
// Creating an instance of `Collection` with type parameter `Book`
let itemOne = new Collection();
itemOne.add({ itemType: "Book", title: "Atomic Habits", isbn: 150510 });
itemOne.add({ itemType: "Book", title: "Follow Your Heart", isbn: 650650 });
console.log(itemOne);
// Outputs: Collection { data: [ { itemType: 'Book', title: 'Atomic Habits', isbn: 150510 }, { itemType: 'Book', title: 'Follow Your Heart', isbn: 650650 } ] }
// Creating an instance of `Collection` with type parameter `Game`
let itemTwo = new Collection();
itemTwo.add({ itemType: "Game", title: "Uncharted", style: "Action", price: 150 });
console.log(itemTwo);
// Outputs: Collection { data: [ { itemType: 'Game', title: 'Uncharted', style: 'Action', price: 150 } ] }
