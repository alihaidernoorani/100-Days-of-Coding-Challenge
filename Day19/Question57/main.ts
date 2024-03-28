/*Day 19
Question 57: Find the Average Grade: Given a list of grades, calculate the average grade. */

let grades = [65, 75, 85, 10];

let total = 0;
for (let grade of grades){
    total += grade;
}
let average = total/grades.length;

console.log(average);