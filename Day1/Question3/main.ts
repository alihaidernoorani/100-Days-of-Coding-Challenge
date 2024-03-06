/*Day 1
Question 3: Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.*/

let personName: string = "Ali Haider Noorani"; //Stores person name
console.log(personName.toUpperCase()); //Shows name in uppercase
console.log(personName.toLowerCase()); //Shows name in lowercase
console.log(personName.replace(/\b\w/g, word => word.toUpperCase())); //Shows name in titlecase