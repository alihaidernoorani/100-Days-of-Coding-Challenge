// Q: What are the final values of all variables a, b, c and d after the code below?

// let a = 1, b = 1;
// let c = ++a; 
// let d = b++; 

// Ans: a: 2      b: 2      c: 2       d: 1


// Q: What are the values of a and x after the code below?

// let a = 2;
// let x = 1 + (a *= 2);

// Ans: a: 4  x: 5


// Q: What are results of these expressions?

"" + 1 + 0 // Ans: "10"
"" - 1 + 0  // Ans: -1
true + false // Ans: 1
6 / "3" // Ans: 2
"2" * "3" // Ans: 6
4 + 5 + "px" // Ans: 9px
"$" + 4 + 5 // Ans: $45
"4" - 2 // Ans: 2
"4px" - 2 // Ans: NaN
"  -9  " + 5 // Ans: " -9 + 5"
"  -9  " - 5 // Ans: -14
null + 1 // Ans: 1
undefined + 1 // Ans: NaN
" \t \n" - 2 // Ans: -2


// Q: Here’s a code that asks the user for two numbers and shows their sum.
// It works incorrectly. The output in the example below is 12 (for default prompt values).
// Why? Fix it. The result should be 3.

// let a = prompt("First number?", 1);
// let b = prompt("Second number?", 2);

// alert(a + b); // 12

// Ans: 

let a = prompt("First number?", 1);
let b = prompt("Second number?", 2);

alert(+a + +b); 

// Using the unary operators converts the inputs into numbers

