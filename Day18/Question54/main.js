"use strict";
/*Day 18
Question 54: Making Flexible Object Keys: Learn how to set up a list where you can change the name of each section
based on what you need at that moment, like adjusting labels based on user choices.*/
//Function to create a dynamic object with a single key-value pair
function changingDynamicObject(key, value) {
    let dynamicObject = {}; //Initialize an empty object
    dynamicObject[key] = value; //Assign the provided key and value to the dynamic object
    return dynamicObject; //Return the dynamic object
}
// Log the result of the function with a key "theme" and value "dark"
console.log(changingDynamicObject("theme", "dark"));
