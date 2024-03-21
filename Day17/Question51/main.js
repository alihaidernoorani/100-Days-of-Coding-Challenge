/*Day 17
Question 51: Refactoring to Arrow Functions: Take a simple function that calculates the area of a rectangle and
refactor it into an arrow function.*/
//Simple function that calculates the area of a rectangle
function simpleAreaFunction(length, width) {
    return length * width;
}
//Refractored into an arrow function
var areaArrow = function (length, width) { return length * width; };
console.log(areaArrow(6, 5));
