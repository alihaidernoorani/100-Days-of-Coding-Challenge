/*Day 20
Question 58: Average Score Calculator: Write a simple program that can take lots of scores and find their average.*/
function averageCalculator() {
    var scores = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        scores[_i] = arguments[_i];
    }
    var total = 0;
    scores.forEach(function (score) {
        total += score;
    });
    var average = total / scores.length;
    return average;
}
console.log(averageCalculator(110, 107, 64));
