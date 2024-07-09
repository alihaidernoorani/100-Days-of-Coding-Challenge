// Generics

// A generic function that returns the input value as is
function returnType<T>(val: T): T {
    return val;
}

// Usage of the generic function with different types
const numValue: number = returnType<number>(100);
const strValue: string = returnType<string>("Elzero");
const boolValue: boolean = returnType<boolean>(true);
const arrValue: number[] = returnType<number[]>([1, 2, 3, 4]);

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
function returnTypeEx<T>(val: T): T {
    return val;
}

console.log(returnTypeEx<number>(100)); // Returns: 100 (number)
// Outputs: 100
console.log(returnTypeEx<string>("Elzero")); // Returns: "Elzero" (string)
// Outputs: "Elzero"

// Arrow Function with Generics `returnTypeArrowSyntax`
const returnTypeArrowSyntax = <T>(val: T): T => val;

console.log(returnTypeArrowSyntax<number>(100)); // Returns: 100 (number)
// Outputs: 100
console.log(returnTypeArrowSyntax<string>("Elzero")); // Returns: "Elzero" (string)
// Outputs: "Elzero"

// Generic Function `testType`
function testType<T>(val: T): string {
    return `The Value Is ${val} And Type Is ${typeof val}`;
}

console.log(testType<number>(100));
// Outputs: "The Value Is 100 And Type Is number"

console.log(testType<string>("Elzero"));
// Outputs: "The Value Is Elzero And Type Is string"

// Generic Function `multipleTypes`
function multipleTypes<T, S>(valueOne: T, valueTwo: S): string {
    return `The First Value Is ${valueOne} And Second Value ${valueTwo}`;
}

console.log(multipleTypes<string, number>("Osama", 100));
// Outputs: "The First Value Is Osama And Second Value 100"

console.log(multipleTypes<string, boolean>("Elzero", true));
// Outputs: "The First Value Is Elzero And Second Value true"



// Generics Classes

// Generic Class `User`
class User<T = string> {
    constructor(public value: T) {}
  
    // Method that takes a message of type `T` and displays it along with the `value` property
    show(msg: T): void {
        console.log(`${msg} - ${this.value}`);
    }
}

// Creating an instance of `User` with a specific type parameter (string)
let userOne = new User<string>("Elzero");
console.log(userOne.value); // Outputs: "Elzero"
userOne.show("Message"); // Outputs: "Message - Elzero"

// Creating an instance of `User` with a type parameter that can be a number or a string
let userTwo = new User<number | string>(100);
console.log(userTwo.value); // Outputs: 100
userTwo.show("Message"); // Outputs: "Message - 100"



// Generics And Interfaces

// Interface definitions for Book and Game
interface Book {
    itemType: string;
    title: string;
    isbn: number;
}

interface Game {
    itemType: string;
    title: string;
    style: string;
    price: number;
}

// Generic Class `Collection`
class Collection<T> {
    public data: T[] = [];

    // Method to add an item of type `T` to the collection
    add(item: T): void {
        this.data.push(item);
    }
}

// Creating an instance of `Collection` with type parameter `Book`
let itemOne = new Collection<Book>();
itemOne.add({ itemType: "Book", title: "Atomic Habits", isbn: 150510 });
itemOne.add({ itemType: "Book", title: "Follow Your Heart", isbn: 650650 });
console.log(itemOne);
// Outputs: Collection { data: [ { itemType: 'Book', title: 'Atomic Habits', isbn: 150510 }, { itemType: 'Book', title: 'Follow Your Heart', isbn: 650650 } ] }

// Creating an instance of `Collection` with type parameter `Game`
let itemTwo = new Collection<Game>();
itemTwo.add({ itemType: "Game", title: "Uncharted", style: "Action", price: 150 });
console.log(itemTwo);
// Outputs: Collection { data: [ { itemType: 'Game', title: 'Uncharted', style: 'Action', price: 150 } ] }
