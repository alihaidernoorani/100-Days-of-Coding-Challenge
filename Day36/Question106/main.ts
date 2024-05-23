/*Day 36
Question 106: Determine if a given year is a leap year using comparison operators.*/

function leapYear (year: number): boolean{
    return (year % 4 === 0 && year % 100 !== 0); // Checks condition for leap year
} 

console.log(leapYear(2024));
console.log(leapYear(2022));
console.log(leapYear(1900));