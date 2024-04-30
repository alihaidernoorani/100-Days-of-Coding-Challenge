"use strict";
/*Day 33
Question 97: Write a function that returns the current date in the format "DD-MM-YYYY".*/
function currentDate() {
    const date = new Date();
    const day = String(date.getUTCDate()).padStart(2, '0'); //Get day and pad with leading zero if necessary
    const month = String(date.getUTCMonth() + 1).padStart(2, '0'); //Get month (months are zero-based) and pad with leading zero if necessary
    const year = date.getUTCFullYear(); // Get full year
    return `${day}-${month}-${year}`; //Format as "DD-MM-YYYY"
}
console.log(currentDate()); //Output: Current date in the format "DD-MM-YYYY"
