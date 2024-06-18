// Q: What is the code below going to output?

alert( null || 2 || undefined );

// Ans: 2 


// Q:  What will the code below output?

alert( alert(1) || 2 || alert(3) );

// Ans: 1 and then 2


// Q: What is this code going to show?

alert( 1 && null && 2 );

// Ans: null


// Q: What will this code show?

alert( alert(1) && alert(2) );

// Ans: 1 and then undefined


// Q: What will the result be?

alert( null || 2 && 3 || 4 );

// Ans: 3


// Q: Write an if condition to check that age is between 14 and 90 inclusively.
// “Inclusively” means that age can reach the edges 14 or 90.

// Ans:

if (age >= 14 && age <= 90) alert(age)


// Q: Write an if condition to check that age is NOT between 14 and 90 inclusively.
// Create two variants: the first one using NOT !, the second one – without it.

// Ans:

if (!(age >= 14 && age <= 90)) alert(age) // first variant
if (age >= 14 && age <= 90) alert(age) // second variant


// Q: Write the code which asks for a login with prompt.
// If the visitor enters "Admin", then prompt for a password, if the input is an empty line or Esc – show “Canceled”, 
// if it’s another string – then show “I don’t know you”.
// The password is checked as follows:
// If it equals “TheMaster”, then show “Welcome!”,
// Another string – show “Wrong password”,
// For an empty string or cancelled input, show “Canceled”
// Please use nested if blocks. Mind the overall readability of the code.
// Hint: passing an empty input to a prompt returns an empty string ''. Pressing ESC during a prompt returns null.

// Ans:

let userName = prompt("Who's there?", '');

if (userName === "Admin"){
    let password = prompt("Password?", '')
    if (password === "TheMaster"){
        alert("Welcome!");
    }
    else if (password === "" || password === null){
        alert("Canceled");
    }
    else {
        alert("Wrong Password!");
    }
}

else if (userName === "" || userName === null) {
    alert("I don't know you!");
}
else {
    alert ("Canceled");
}