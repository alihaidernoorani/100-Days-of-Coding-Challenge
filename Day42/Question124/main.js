/* Day 42
Question 124: Create a function inside an object that returns the object's own name property using the this keyword. */
// Create an object named student that conforms to the Student interface
var person = {
    name: "Ali Khan",
    getName: function () {
        return this.name; // 'this' refers to the current object, so this.name returns "Ali Khan"
    }
};
// Log the result of calling the getName method on the student object to the console
console.log(person.getName()); // Outputs: Ali Khan
