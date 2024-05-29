/* Day 42
Question 125: Modify a method in an object to use the this keyword to access another property in the same object. */
// Create an object named rectangle that conforms to the Rectangle interface
var rectangle = {
    length: 50, // Set the length to 50
    width: 20, // Set the width to 20
    area: function () {
        // Calculate the area using the length and width properties
        return this.length * this.width;
    }
};
// Log the result of calling the area method on the rectangle object
console.log(rectangle.area()); // Outputs: 1000 (50 * 20)
