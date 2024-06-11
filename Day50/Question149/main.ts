/* Day 50
Question 149: Explain the concept of the event loop in JavaScript with an example. */

console.log("Start");

// Asynchronous operation
setTimeout(() => {
    console.log("Hello, from setTimeout")
}, 2000);

console.log("end");
// Although the timeout is 0, "Hello, from setTimeout" is logged after "End" due to the event loop