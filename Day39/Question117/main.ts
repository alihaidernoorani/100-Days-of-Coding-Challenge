/*Day 39
Question 117: Implement a switch statement that evaluates an expression and uses the default case if none of the cases match.*/

function evaluateResult(result: string): void{
    switch (result) {
        case 'A':
            console.log("Excellent!");
            break;
        case 'B':
            console.log("Good!");
            break;
        case 'C':
            console.log("Average");
            break;
        case 'F':
            console.log("Fail");
            break;   
        default:
            console.log("Invalid Grade");
            break;
    }
}

evaluateResult('B'); // This will show the result of case 'B'
evaluateResult('E'); // This will show the result of default case as none of the cases match