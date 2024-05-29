/* Day 42
Question 125: Modify a method in an object to use the this keyword to access another property in the same object. */

// Define an interface named Rectangle to specify the structure of a rectangle object
interface Rectangle {
    length: number; // Length of the rectangle
    width: number; // Width of the rectangle
    area: () => number; // Method to calculate the area of the rectangle
}

// Create an object named rectangle that conforms to the Rectangle interface
const rectangle: Rectangle = {
    length: 50, // Set the length to 50
    width: 20, // Set the width to 20
    area: function () {
        // Calculate the area using the length and width properties
        return this.length * this.width;
    }
}

// Log the result of calling the area method on the rectangle object
console.log(rectangle.area()); // Outputs: 1000 (50 * 20)
