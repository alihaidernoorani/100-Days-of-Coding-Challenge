"use strict";
/*Day 6
Question 16: More Guests: You've found a bigger dinner table, so there's room for more guests. */
let guests = ["Albert Einstein", "Marie Curie", "Muhammad Ali Jinnah"];
console.log("We have found a bigger table");
let newGuests = ["John Adams", "Thomas Jefferson", "Queen Elizebeth"];
guests.unshift(newGuests[0]);
guests.push(newGuests[1]);
guests.splice(guests.length / 2, 0, newGuests[2]);
//Prints the new guest list
for (let i = 0; i < guests.length; i++) {
    console.log(`Dear ${guests[i]}, I would like to invite you for dinner`);
}
