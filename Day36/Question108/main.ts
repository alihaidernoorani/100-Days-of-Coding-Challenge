/*Day 36
Question 108: Compare two strings to check if they are identical, ignoring case sensitivity.*/

function stringCheck (str1: string, str2: string): boolean{
    return (str1.toLowerCase() === str2.toLowerCase());
}

console.log(stringCheck("ali", "Ali"));
console.log(stringCheck("Bilal", "Ali"));