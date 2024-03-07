/*Day 6
Question 16: More Guests: You've found a bigger dinner table, so there's room for more guests. */

let guest: string[] = ["Albert Einstein", "Marie Curie", "Muhammad Ali Jinnah"];
console.log("We have found a bigger table");
let newGuests: string[] = ["John Adams", "Thomas Jefferson", "Queen Elizebeth"];
guest.unshift(newGuests[0]);
guest.push(newGuests[1]);
guest.splice(guest.length/2, 0, newGuests[2]);

//Prints the new guest list
for (let i = 0; i < guest.length; i++){
    console.log(`Dear ${guest[i]}, I would like to invite you for dinner`);
}
