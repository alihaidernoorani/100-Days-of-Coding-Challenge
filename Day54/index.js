// Q: Declare two variables: admin and name.
// Assign the value "John" to name.
// Copy the value from name to admin.
// Show the value of admin using alert (must output “John”).

// Ans:

let admin;
let name;
name = "John";
admin = name;
alert(admin);

// Q: Create a variable with the name of our planet. How would you name such a variable?
// Create a variable to store the name of a current visitor to a website. How would you name that variable?

// Ans:

let ourPlanetName = "Earth";
let currentUserName = "John";



// Q: Examine the following code:

// const birthday = '18.04.1982';

// const age = someCode(birthday);
// Here we have a constant birthday for the date, and also the age constant.

// The age is calculated from birthday using someCode(), which means a function call that we didn’t explain yet (we will soon!), but the details don’t matter here, the point is that age is calculated somehow based on the birthday.

// Would it be right to use upper case for birthday? For age? Or even for both?

// const BIRTHDAY = '18.04.1982'; // make birthday uppercase?

// const AGE = someCode(BIRTHDAY); // make age uppercase?


// Ans:
// It would be alright to use the uppercase for birthday but not for age as birthday would remain the same but age would change every year