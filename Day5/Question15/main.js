"use strict";
/*Day 5
Question 15: Changing Guest List: One of your guests can't make it to the dinner, so you need to send out a new set of invitations
with a replacement guest.*/
let guests = ["Albert Einstein", "Allama Iqbal", "Muhammad Ali Jinnah"]; //Stores guests
//Letting people know that a guest can't come to dinner
let unableToAttend = "Allama Iqbal";
console.log(`${unableToAttend} can't make it to dinner\n`);
//Replacing the guest from the guest list
let newGuest = "Marie Curie";
guests[guests.indexOf(unableToAttend)] = newGuest;
//Prints the new guest list
for (let i = 0; i < guests.length; i++) {
    console.log(`Dear ${guests[i]}, I would like to invite you for dinner`);
}
