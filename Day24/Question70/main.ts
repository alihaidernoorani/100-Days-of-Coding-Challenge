/*Day 24
Question 70: Understanding let in Loops: Write a function that uses a loop with the
let keyword to print numbers from 1 to 5. Explain how the let keyword affects
the visibility of the loop variable.*/

function printNumbers (){
    console.log("i within for loop")
    for (let i = 1; i < 6; i++){
        console.log(i);
    }
    //`i` is not accessible here, outside the loop, because it's defined with `let`
    let i;
    console.log("i outside loop is " + i) 
}

printNumbers(); //This shows that let `i` to the loop 