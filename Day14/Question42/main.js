/*Day 14
Question 42: Great Magicians: Add "the Great" to magician names.*/
var magicians = ["Harry Houdini", "David Copperfield", "Penn & Teller"]; //Saves the magicians name in an array
function show_magicians(magicians) {
    make_great(magicians); //Passes the array into the function make_great() and modifies the original array
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " the Great";
    }
}
show_magicians(magicians); //Modifies the original array
make_great(magicians); //Shows modified names
