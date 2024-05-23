/*Day 36
Question 108: Compare two strings to check if they are identical, ignoring case sensitivity.*/
function stringCheck(str1, str2) {
    return (str1.toLowerCase() === str2.toLowerCase()); // Converts both strings to lowercase and compares
}
console.log(stringCheck("ali", "Ali"));
console.log(stringCheck("Bilal", "Ali"));
