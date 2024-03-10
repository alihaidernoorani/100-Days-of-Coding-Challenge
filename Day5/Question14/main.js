/*Day 5
Question 14: Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite?
Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person,
inviting them to dinner.*/
var guests = ["Albert Einstein", "Allama Iqbal", "Muhammad Ali Jinnah"]; //Stores guests
for (var i = 0; i < guests.length; i++) {
    console.log("Dear ".concat(guests[i], ", I would like to invite you for dinner")); //Prints initation for each guest
}
