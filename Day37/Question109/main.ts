/*Day 37
Question 109: Write an if statement that logs "Good Morning" if the current time is before 12 PM.*/

const currentTime: number = new Date().getHours(); // Get the current hour of the day (0-23)

if (typeof currentTime === 'number' && currentTime < 12) {
    console.log("Good Morning");  // Displays "Good Morning" only if the current time is before 12 PM
}