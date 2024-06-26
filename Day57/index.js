// Q: What will be the result for these expressions?

alert(5 > 4) // true
alert("apple" > "pineapple") // false
alert("2" > "12") //true
alert(undefined == null) //true
alert(undefined === null) //false
alert(null == "\n0\n")//false
alert(null === +"\n0\n") //false

// Q: Will alert be shown?

if ("0") { // yes
    alert( 'Hello' );
  }

// Q: Using the if..else construct, write the code which asks: ‘What is the “official” name of JavaScript?’
// If the visitor enters “ECMAScript”, then output “Right!”, otherwise – output: “You don’t know? ECMAScript!”

let answer = prompt("What is the official name of JavaScript?");

  if (answer == "ECMAScript") {
    alert("Right");
  }
  else {
    alert(`You don't know? 
    "ECMAScript"!`)
  }

// Q: Using if..else, write the code which gets a number via prompt and then shows in alert:

// 1, if the value is greater than zero,
// -1, if less than zero,
// 0, if equals zero.
// In this task we assume that the input is always a number.

let number = prompt("Enter number");

if (number > 0) {
    alert(1);
}
else if (number < 0){
    alert(-1);
}
else if (number === 0){
    alert(0);
}

// Q: Rewrite this if using the conditional operator '?':
// let result;

// if (a + b < 4) {
//      result = 'Below';
//    } else {
//      result = 'Over';
//    }

let result = a + b < 4 ? 'Below' : 'Over';

// Q: Rewrite if..else using multiple ternary operators '?'.

// For readability, it’s recommended to split the code into multiple lines.

// let message;

// if (login == 'Employee') {
//   message = 'Hello';
// } else if (login == 'Director') {
//   message = 'Greetings';
// } else if (login == '') {
//   message = 'No login';
// } else {
//   message = '';
// }

let login = '';
let message = login === 'Employee' ? 'Hello' :
     login == 'Director' ? 'Greetings' : 
     login == '' ? 'No login' : 
     '';

alert(message);