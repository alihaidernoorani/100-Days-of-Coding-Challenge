/*Day 4
Question 12: Greetings: Use the array from Exercise 11. Instead of just printing each person’s name, print a message to them. 
The message should be the same for each person, but personalized with their name.*/

let friendNames: string[] = ["Ali", "Zeeshan", "Bilal"]; //Stores the name in an array
for (let i=0; i<friendNames.length; i++){
    console.log(`I hope you are having a new day, ${friendNames[i]}`); //Accesses each element using a for loop
}