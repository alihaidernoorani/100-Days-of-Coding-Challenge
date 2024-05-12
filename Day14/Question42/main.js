"use strict";
/*Day 14
Question 42: Great Magicians: Add "the Great" to magician names.*/
let magicians = ["Harry Houdini", "David Copperfield", "Penn & Teller"]; //Saves the magicians name in an array
function show_magicians(magicians) {
    make_great(magicians); //Passes the array into the function make_great() and modifies the original array
    magicians.forEach(magician => {
        console.log(magician);
    });
}
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " the Great";
    }
}
show_magicians(magicians); //Modifies the original array
make_great(magicians); //Shows modified names
