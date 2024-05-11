/*Day 24
Question 70: Understanding let in Loops: Write a function that uses a loop with the
let keyword to print numbers from 1 to 5. Explain how the let keyword affects
the visibility of the loop variable.*/
function printNumbers() {
    console.log("i within for loop");
    for (var i_1 = 1; i_1 < 6; i_1++) {
        console.log(i_1);
    }
    //`i` is not accessible here, outside the loop, because it's defined with `let`
    var i;
    console.log("i outside loop is " + i);
}
printNumbers();
