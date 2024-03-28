/*Day 19
Question 57: Find the Average Grade: Given a list of grades, calculate the average grade. */
var grades = [65, 75, 85, 10];
var total = 0;
for (var _i = 0, grades_1 = grades; _i < grades_1.length; _i++) {
    var grade = grades_1[_i];
    total += grade;
}
var average = total / grades.length;
console.log(average);
