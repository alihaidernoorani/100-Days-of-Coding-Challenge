"use strict";
/*Day 20
Question 60: Self-Running User Profile: Create a quick, self-setup profile
for a user that can tell you the user's name and age.*/
let userProfile = (function () {
    let name = "Ali";
    let age = 25;
    return {
        displayInfo: function () {
            console.log(`Name: ${name}, Age: ${age}`);
        }
    };
})();
userProfile.displayInfo();
