/* Day 48
Question 144: Explain the use of the Promise.all() method with an example. */

// Example using Promise.all to wait for multiple promises to resolve
const promise1 = new Promise((resolve) => setTimeout(resolve, 1000, 'First'));
const promise2 = new Promise((resolve) => setTimeout(resolve, 2000, 'Second'));
const promise3 = new Promise((resolve) => setTimeout(resolve, 3000, 'Third'));

// Use Promise.all() to handle all the defined promises
Promise.all([promise1, promise2, promise3])
    .then((results) => {
        // This block runs when all promises have resolved successfully
        console.log('All promises resolved:', results); // Output: ['First', 'Second', 'Third']
    })
    .catch((error) => {
        // This block runs if any of the promises reject
        console.error('One of the promises rejected:', error);
    });