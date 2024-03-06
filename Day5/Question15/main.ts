/*Day 5
Question 15: Changing Guest List: One of your guests can't make it to the dinner, so you need to send out a new set of invitations 
with a replacement guest.*/

let guest: string[] = ["Albert Einstein", "Allama Iqbal", "Muhammad Ali Jinnah"]; //Stores guests

//Letting people know that a guest can't come to dinner
let unableToAttend: string = "Allama Iqbal";
console.log(`${unableToAttend} can't make it to dinner\n`);

//Replacing the guest from the guest list
let newGuest: string = "Marie Curie";
guest[guest.indexOf(unableToAttend)] = newGuest;

//Prints the new guest list
for (let i = 0; i < guest.length; i++){
    console.log(`Dear ${guest[i]}, I would like to invite you for dinner`);
}
