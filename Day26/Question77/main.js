"use strict";
/*Day 26
Question 77: Default Parameters: Write a function that greets a user.
It should take the user's name as a parameter and say hello.
If no name is given, it should greet an anonymous user.*/
function greetUser(userName = "anonymous user") {
    console.log(`Greetings ${userName}`);
}
greetUser("Ali");
greetUser();
