/*Day 33
Question 98: Create a JavaScript snippet that calculates and logs how many days are left until New Year.*/
var currentDate = new Date(); //Gets the current date
var currentYear = currentDate.getFullYear();
var nextYear = currentYear + 1;
var daysLeft = Math.floor((Number(new Date(nextYear, 0, 1)) - Number(currentDate)) / (24 * 60 * 60 * 1000));
console.log(daysLeft);
