/* Day 42
Question 126: Explain how the this keyword changes its value when used inside a nested function within a method. */

// Define an interface for the object to specify its structure
interface MyObject {
  property: string;
  outerMethod: () => void;
}

// Create an object named myObject that conforms to the MyObject interface
const myObject: MyObject = {
    property: "Value",
    outerMethod: function () {
      console.log(this.property); // Works as expected, logs "Value"
  
      const innerMethod = () => {
        console.log(this.property); // Still accesses myObject's 'property' due to arrow function capturing 'this' from outer scope
      };
  
      innerMethod();  // Calling the arrow function
    },
  };
  
  myObject.outerMethod();
  // This example shows that using an arrow function for the inner method preserves the 'this' context from the outer method.