/*Day 24
Question 71: Compare let and const: Create two examples where let allows reassignment
but const does not. Try to reassign a const-declared variable and catch the error.*/

let age = 53;
age = 63;
console.log(age); // Output: 63

const pi = 3.142;

try {
   //pi = 5; // This will throw an error
} catch (error) {
   console.log("Error: Can't reassign a `const`-declared variable.");
}
