/*Day 5
Question 15: Changing Guest List: One of your guests can't make it to the dinner, so you need to send out a new set of invitations
with a replacement guest.*/
var guests = ["Albert Einstein", "Allama Iqbal", "Muhammad Ali Jinnah"]; //Stores guests
//Letting people know that a guest can't come to dinner
var unableToAttend = "Allama Iqbal";
console.log("".concat(unableToAttend, " can't make it to dinner\n"));
//Replacing the guest from the guest list
var newGuest = "Marie Curie";
guests[guests.indexOf(unableToAttend)] = newGuest;
//Prints the new guest list
for (var i = 0; i < guests.length; i++) {
    console.log("Dear ".concat(guests[i], ", I would like to invite you for dinner"));
}
