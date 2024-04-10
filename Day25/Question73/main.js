/*Day 25
Question 73: Assigning and Updating Variables:
Create a function where you declare a variable using let and assign an initial value.
Then, update its value within the same function and log both the initial and updated values.*/
function updateVariable() {
    var name = "Ali";
    console.log("The initial value of the variable is ".concat(name));
    name = "Bilal";
    console.log("The updated value of the variable is ".concat(name));
}
updateVariable();
