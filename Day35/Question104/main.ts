/*Day 35
Question 104: Create a function that generates a random hexadecimal color code.*/

function randomColorCode() {
    let colorNumber = "#" + Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(6, '0');
    return colorNumber;
}

console.log(randomColorCode());
