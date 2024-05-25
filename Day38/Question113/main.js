/*Day 38
Question 113: Write a function that checks if a Map contains a key for "Canada" and logs the capital if it exists.*/
// This function checks for "Canada" in the Map and logs its capital
function checkMap(countries) {
    if (countries.has("Canada")) {
        console.log("The capital of Canada is ".concat(countries.get("Canada")));
    }
    else {
        console.log("Canada is not in the Map");
    }
}
var capitals = new Map();
capitals.set("Pakistan", "Islamabad"); // Adds Pakistan to the Map
capitals.set("France", "Paris"); // Adds France to the Map
capitals.set("Iran", "Tehran"); // Adds Iran to the Map
checkMap(capitals);
