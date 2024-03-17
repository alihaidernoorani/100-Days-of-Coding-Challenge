/*Day 6
Question 17: Shrinking Guest List: Unfortunately, your new table won’t arrive in time, and you can only invite two guests.*/
var guests = ["Albert Einstein", "Marie Curie", "Muhammad Ali Jinnah", "John Adams", "Thomas Jefferson", "Queen Elizebeth"];
console.log("Unfortunately, I can only invite two people for dinner.\n");
for (var i = guests.length - 1; i > 2; i--) {
    console.log("Sorry ".concat(guests[i], ", I can't invite you for dinner."));
    guests.pop();
}
console.log("\n");
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you're still invited to dinner."));
});
