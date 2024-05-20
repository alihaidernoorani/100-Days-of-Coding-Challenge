/*Day 33
Question 97: Write a function that returns the current date in the format "DD-MM-YYYY".*/
function currentDate() {
    var date = new Date();
    var day = String(date.getUTCDate()).padStart(2, '0'); //Get day and pad with leading zero if necessary
    var month = String(date.getUTCMonth() + 1).padStart(2, '0'); //Get month (months are zero-based) and pad with leading zero if necessary
    var year = date.getUTCFullYear(); // Get full year
    return "".concat(day, "-").concat(month, "-").concat(year); //Format as "DD-MM-YYYY"
}
console.log(currentDate()); //Output: Current date in the format "DD-MM-YYYY"
