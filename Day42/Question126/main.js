/* Day 42
Question 126: Explain how the this keyword changes its value when used inside a nested function within a method. */
// Create an object named myObject that conforms to the MyObject interface
var myObject = {
    property: "Value",
    outerMethod: function () {
        var _this = this;
        console.log(this.property); // Works as expected, logs "Value"
        var innerMethod = function () {
            console.log(_this.property); // Still accesses myObject's 'property' due to arrow function capturing 'this' from outer scope
        };
        innerMethod(); // Calling the arrow function
    },
};
myObject.outerMethod();
// This example shows that using an arrow function for the inner method preserves the 'this' context from the outer method.
