"use strict";
/*Day 33
Question 98: Create a JavaScript snippet that calculates and logs how many days are left until New Year.*/
let currentDate = new Date(); //Gets the current date
let currentYear = currentDate.getFullYear();
let nextYear = currentYear + 1;
let daysLeft = Math.floor((Number(new Date(nextYear, 0, 1)) - Number(currentDate)) / (24 * 60 * 60 * 1000));
console.log(daysLeft);
