/* Day 42
Question 124: Create a function inside an object that returns the object's own name property using the this keyword. */

// Define an interface named Student to specify the structure of a student object
interface Person {
    name: string; // A string property to hold the student's name
    getName: () => string; // A method that returns a string
}

// Create an object named student that conforms to the Student interface
const person: Person = {
    name: "Ali Khan", 
    getName: function () {  // A method named getName is created inside an object
        return this.name; // 'this' refers to the current object, so this.name returns "Ali Khan"
    }
}

// Log the result of calling the getName method on the student object to the console
console.log(person.getName()); // Outputs: Ali Khan
