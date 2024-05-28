/*Day 41
Question 123: Create a loop that iterates through a string and stops when it finds the first vowel.*/
var str = "TypeScript";
for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
    var letter = str_1[_i];
    if (letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u") {
        break;
    }
    console.log(letter);
}
