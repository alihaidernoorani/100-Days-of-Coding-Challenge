/*Day 7
Question 19: Dinner Guests: Use one of your programs from Exercises 14 through 18 to print a message indicating the number
of people you are inviting to dinner.*/


//Using code from Question 17

let guests: string[] = ["Albert Einstein", "Marie Curie", "Muhammad Ali Jinnah", "John Adams", "Thomas Jefferson", "Queen Elizebeth"]

console.log("Unfortunately, I can only invite two people for dinner.\n");

for (let i = guests.length-1; i > 2; i--){
    console.log(`Sorry ${guests[i]}, I can't invite you for dinner.`);
    guests.pop();
}

console.log(`\nDear ${guests}, you're still invited to dinner.`); //Prints a message indicating the number of people invited to dinner