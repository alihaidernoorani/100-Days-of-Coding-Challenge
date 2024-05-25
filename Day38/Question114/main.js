/*Day 114
Question 114: Iterate over a Map of student IDs and names, and log each pair to the console.*/
var students = new Map();
students.set(1250, "Ali");
students.set(5675, "Hammid");
students.set(4525, "Zain");
// Iterates over the Map and logs each student ID and name
students.forEach(function (name, id) {
    console.log("Student ID: ".concat(id, ", Name: ").concat(name));
});
