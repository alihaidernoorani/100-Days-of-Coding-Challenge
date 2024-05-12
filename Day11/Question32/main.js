"use strict";
/*Day 11
Question 32: Checking Usernames: Ensure uniqueness in usernames.*/
let current_users = ["Rodger", "ali", "Bilal", "Sajid", "Ramsha"];
let new_users = ["Hasan", "Princess", "Jenny", "Ali", "Bilal"];
for (let i = 0; i < new_users.length; i++) {
    let lowerCaseUsername = new_users[i].toLowerCase();
    if (current_users.some(user => user.toLowerCase() === lowerCaseUsername)) {
        console.log(`${new_users[i]} will need to enter a new username.`);
    }
    else {
        console.log(`The username ${new_users[i]} is available`);
    }
}
