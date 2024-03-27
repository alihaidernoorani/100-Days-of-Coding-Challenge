/*Day 13
Question 37: Large Shirts: Default values in make_shirt().*/
function make_shirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I love TypeScript"; }
    console.log("Making a ".concat(size, " t-shirt with the message \"").concat(message, "\" printed on it."));
}
make_shirt(); //Calls function make_shirt() which uses the default values of shirt and message
make_shirt("medium"); //Calls function make_shirt() which uses the default value of message and medium shirt
make_shirt("small", "Code is Life"); //Calls function make_shirt() which uses small as the size and Code is Life as the message
