/*Day 11
Question 32: Checking Usernames: Ensure uniqueness in usernames.*/
var current_users = ["Rodger", "ali", "Bilal", "Sajid", "Ramsha"];
var new_users = ["Hasan", "Princess", "Jenny", "Ali", "Bilal"];
var _loop_1 = function (i) {
    var lowerCaseUsername = new_users[i].toLowerCase();
    if (current_users.some(function (user) { return user.toLowerCase() === lowerCaseUsername; })) {
        console.log("".concat(new_users[i], " will need to enter a new username."));
    }
    else {
        console.log("The username ".concat(new_users[i], " is available"));
    }
};
for (var i = 0; i < new_users.length; i++) {
    _loop_1(i);
}
