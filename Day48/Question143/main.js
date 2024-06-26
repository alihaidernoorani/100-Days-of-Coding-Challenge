/* Day 48
Question 143: Show how to use the .then() and .catch() methods to handle Promise resolution and rejection. */
var conditionalPromise = new Promise(function (resolve, reject) {
    var success = Math.random() > 0.5; // Randomly choose success or failure
    if (success) {
        resolve("Success!");
    }
    else {
        reject(new Error("Failure"));
    }
});
conditionalPromise
    .then(function (result) { return console.log(result); }) // Handles a successful resolution
    .catch(function (error) { return console.log(error.message); }); // Handles a rejection
// This code will randomly log either "Success!" or "Failure" based on the outcome of the promise
