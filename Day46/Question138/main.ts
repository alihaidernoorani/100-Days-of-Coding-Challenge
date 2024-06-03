/* Day 46
Question 138: Describe how to use breakpoints in browser developer tools to debug JavaScript code. */

function calculateSum(a: number, b: number): number {
    const result = a + b; // Set a breakpoint here to inspect 'a' and 'b'
    return result;
}

// Trigger the function to test
console.log(calculateSum(5, 3));

// To use breakpoints, open this code in your browser, open the developer tools, navigate to the Source tab,
// find this script, and click on the line number where you want to pause execution. 
// When you reload or run your page, execution will pause at the breakpoint.