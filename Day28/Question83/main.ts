/*Day 28
Question 83: Converting to Upper and Lower Case: 
Create a function that takes a string, converts it to uppercase, then to lowercase, and logs both.*/

function caseConverter (input: string){
    console.log(`In uppercase: ${input.toUpperCase()}`);
    console.log(`In lowercase: ${input.toLowerCase()}`);
}

caseConverter("Hello World");