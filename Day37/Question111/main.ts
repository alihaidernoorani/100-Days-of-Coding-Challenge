/*Day 37
Question 111: Use an if-else-if chain to categorize a person's age group (child, teenager, adult).*/

const age: number = 25;

// Categorizes the age group
if (age < 13) {
    console.log("The person is a child");
}
else if (age <= 19) {
    console.log("The person is a teenager");
}
else {
    console.log("The person is an adult");
}