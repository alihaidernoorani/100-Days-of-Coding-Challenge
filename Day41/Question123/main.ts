/*Day 41
Question 123: Create a loop that iterates through a string and stops when it finds the first vowel.*/

let str = "TypeScript";

for (let letter of str){
    if(letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u"){
        break;
    }
    console.log(letter);
}