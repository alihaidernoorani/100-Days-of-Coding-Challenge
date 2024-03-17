/*Day 6
Question 17: Shrinking Guest List: Unfortunately, your new table won’t arrive in time, and you can only invite two guests.*/

let guests: string[] = ["Albert Einstein", "Marie Curie", "Muhammad Ali Jinnah", "John Adams", "Thomas Jefferson", "Queen Elizebeth"]

console.log("Unfortunately, I can only invite two people for dinner.\n");

for (let i = guests.length-1; i > 2; i--){

    console.log(`Sorry ${guests[i]}, I can't invite you for dinner.`);
    guests.pop();
}

console.log("\n");

guests.forEach(guest => {
    console.log(`Dear ${guest}, you're still invited to dinner.`);
});