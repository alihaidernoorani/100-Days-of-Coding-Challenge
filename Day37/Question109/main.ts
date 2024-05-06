/*Day 37
Question 109: Write an if statement that logs "Good Morning" if the current time is before 12 PM.*/

const currentTime: number = new Date().getHours();
if (currentTime < 12){
    console.log("Good Morining");
}
