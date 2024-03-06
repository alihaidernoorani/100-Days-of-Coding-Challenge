/*Day 4
Question 11: Names: Store the names of a few of your friends in an array called names.
Print each person’s name by accessing each element in the list, one at a time.*/

let names: string[] = ["Ali", "Zeeshan", "Bilal"]; //Stores the name in an array
for (let i=0; i<names.length; i++){
    console.log(names[i]); //Accesses each element using a for loop
}