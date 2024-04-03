/*Day 20
Question 58: Average Score Calculator: Write a simple program that can take lots of scores and find their average.*/


function averageCalculator (...scores: number[]): number{
    let total: number = 0;
    scores.forEach(score => {
        total += score;
    })
    let average: number = total / scores.length;
    return average;
}

console.log(averageCalculator(110,107,64));