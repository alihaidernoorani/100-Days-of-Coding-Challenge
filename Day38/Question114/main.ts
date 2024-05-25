/*Day 114
Question 114: Iterate over a Map of student IDs and names, and log each pair to the console.*/

const students = new Map<number, string>();
students.set(1250, "Ali");
students.set(5675, "Hammid");
students.set(4525, "Zain");

// Iterates over the Map and logs each student ID and name
students.forEach((name, id) => {
    console.log(`Student ID: ${id}, Name: ${name}`);
})