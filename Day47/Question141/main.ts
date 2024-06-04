/* Day 47
Question 141: Discuss the significance of the await reserved word in asynchronous JavaScript. */

async function sayHiAfterDelay() {
  // Create a Promise that resolves after 1 second (simulating a delay)
  const delayPromise = new Promise(resolve => setTimeout(resolve, 1000));

  // Use await to pause execution until the delayPromise is fulfilled (1 second delay)
  await delayPromise;

  console.log("Hello!");
}
  
sayHiAfterDelay();