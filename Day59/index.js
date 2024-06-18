// Q: What is the last value alerted by this code? Why?

let i = 3;

while (i) {
  alert( i-- );
}

// Ans: The last output is 1 as the condition will turn false when i = 0 and the while loop stops



// Q: For every loop iteration, write down which value it outputs and then compare it with the solution. Both loops alert the same values, or not?

// 1) The prefix form ++i:

// let i = 0;
// while (++i < 5) alert( i );

// 2) The postfix form i++:

// let i = 0;
// while (i++ < 5) alert( i );

// The first loop returns 1, 2, 3, 4 because the prefix first increases the value and then checks the condition
// while the second loop returns 1, 2, 3, 4, 5 because the postfix first checks the condition and then increases the value



// Q: For each loop write down which values it is going to show. Then compare with the answer. Both loops alert same values or not?

// The postfix form:

for (let i = 0; i < 5; i++) alert( i );

// The prefix form:

for (let i = 0; i < 5; ++i) alert( i );

// Ans: Both the loops returns the value 0, 1, 2, 3, 4 because the increment happens after the loop body alert (i)



// Q: Use the for loop to output even numbers from 2 to 10.
// Ans:
for (let i = 2; i <= 10; i++) {
    if (i % 2 == 0) {
      alert( i );
    }
}

// Q: Rewrite the code changing the for loop to while without altering its behavior (the output should stay same).
// for (let i = 0; i < 3; i++) {
//    alert( `number ${i}!` );
// }

// let i = 0;

while (i <= 3 ){ 
    alert( `number ${i}!`); 
    i++;
}

// Q: Write a loop which prompts for a number greater than 100. 
// If the visitor enters another number – ask them to input again. 
// The loop must ask for a number until either the visitor enters a number greater than 100 or cancels the input/enters an empty line. 
// Here we can assume that the visitor only inputs numbers.
// There’s no need to implement a special handling for a non-numeric input in this task.


do {
    let num = prompt("Enter number greater than 100");
} while (number <= 100 && num)


// Q: An integer number greater than 1 is called a prime if it cannot be divided without a remainder by anything except 1 and itself. 
// In other words, n > 1 is a prime if it can’t be evenly divided by anything except 1 and n. 
// For example, 5 is a prime, because it cannot be divided without a remainder by 2, 3 and 4. 
// Write the code which outputs prime numbers in the interval from 2 to n. For n = 10 the result will be 2,3,5,7. P.S. 
// The code should work for any n, not be hard-tuned for any fixed value.


// Ans:

let n = 10;

nextPrime:
for (let i = 2; i <= n; i++) { // for each i...

  for (let j = 2; j < i; j++) { // look for a divisor..
    if (i % j == 0) continue nextPrime; // not a prime, go next i
  }

  console.log( i ); // a prime
}


// Q: Write the code using if..else which would correspond to the following switch:

switch (browser) {
    case 'Edge':
      alert( "You've got the Edge!" );
      break;
  
    case 'Chrome':
    case 'Firefox':
    case 'Safari':
    case 'Opera':
      alert( 'Okay we support these browsers too' );
      break;
  
    default:
      alert( 'We hope that this page looks ok!' );
  }

// Ans:

if (browser === "edge") {
    alert( "You've got the Edge!" );
}
else if (browser === "chrome" || browser === "firefox" || browser === "safari" || browser === "opera") {
    alert( 'Okay we support these browsers too' );
}
else {
    alert( 'We hope that this page looks ok!' );
}


// Q: Rewrite the code below using a single switch statement:

let a = +prompt('a?', '');

if (a == 0) {
  alert( 0 );
}
if (a == 1) {
  alert( 1 );
}

if (a == 2 || a == 3) {
  alert( '2,3' );
}

// Ans:

let a = +prompt('a?', '');

switch (a){
    case 0:
        alert( 0 );
        break;
    case 1:
        alert( 1 );
        break;
    case 2:
    case 3:
        alert( '2,3' );
        break;
}