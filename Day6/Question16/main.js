"use strict";
/*Day 6
Question 16: More Guests: You've found a bigger dinner table, so there's room for more guests. */
let guestList = ["Albert Einstein", "Marie Curie", "Muhammad Ali Jinnah"];
console.log("We have found a bigger table");
let newGuests = ["John Adams", "Thomas Jefferson", "Queen Elizebeth"];
guestList.unshift(newGuests[0]);
guestList.push(newGuests[1]);
guestList.splice(guestList.length / 2, 0, newGuests[2]);
console.log(guestList);
