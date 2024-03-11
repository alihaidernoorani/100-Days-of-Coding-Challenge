/*Day 8
Question 24: More Conditional Tests: Expand your conditional tests to cover a wider range of comparisons.*/
//Comparisons using logical operators
console.log("Comparisons using the logical operators && (AND) and || (OR)");
console.log(7 > 5 && 7 < 9); //True
console.log(true || false); //True
//String comparisons
console.log("String comparisons");
console.log("apple" == "apple"); //True
console.log("apple" == "Apple".toLowerCase()); //True
//Numerical comparisons
console.log("Numerical comparisons using >= and <=");
console.log(7 >= 8); //False 
console.log(7 <= 8); //True
//Comparison of arrays
var fruits1 = ["apple", "banana", "grape"];
var fruits2 = ["orange", "banana", "grape"];
console.log("Comparison of arrays");
console.log(fruits1 != fruits2); //True
//Testing to see if an item is in an array
console.log("Is orange in fruits2?");
console.log(fruits2.includes("orange")); //True
