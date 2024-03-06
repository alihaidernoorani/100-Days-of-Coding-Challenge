"use strict";
/*Day 4
Question 10: Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each.
If the programs are straightforward at this point, just add your name and the current date at the top of each program file.
Then, write one sentence describing what the program does.*/
//Ali Haider Noorani
//06/03/2024
//Using Question 3 from Day 1
//This program stores the name in a variable and then prints it as uppercase, lowercase and titlecase
let person_Name = "Ali Haider Noorani"; //Stores person name
console.log(person_Name.toUpperCase()); //Shows name in uppercase
console.log(person_Name.toLowerCase()); //Shows name in lowercase
console.log(person_Name.replace(/\b\w/g, word => word.toUpperCase())); //Shows name in titlecase
console.log("\n");
//Ali Haider Noorani
//06/03/2024
//Using Question 9 from Day 3
//The program stores the favourite number in a variable and then prints a message revealing the favourit number
let favouriteNumber = 5; //Stores number in variable
console.log("My favourite number is", favouriteNumber); //Prints message revealing facourite number
