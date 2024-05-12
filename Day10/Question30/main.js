"use strict";
/*Day 10
Question 30: Hello Admin: Greet users differently, especially 'admin'.*/
let username = ["John", "Adam", "Constance", "Emily", "admin"];
for (let i = 0; i < username.length; i++) {
    if (username[i] == "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log(`Hello ${username[i]}, thank you for logging in again.`);
    }
}
