/*Day 19
Question 55: Double Numbers in an Array: Make a list of numbers.
Then, use a trick to make a new list where each number is twice its original value.*/

let numbers: number[] = [6, 7, 5, 9, 10];

function doublenumber (numbers: number[]){
    let doublenumbers: number[] = [];
    for (let num of numbers){
        doublenumbers.push(num*2);
    }
    return doublenumbers;
}

console.log(doublenumber(numbers));