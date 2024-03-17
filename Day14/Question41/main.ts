/*Day 14
Question 41: Magicians: Display magician names from an array.*/

let magicians: string[] = ["Harry Houdini", "David Copperfield", "Penn & Teller"]; //Saves the magicians name in an array

function show_magicians(magicians: string[]){
    magicians.forEach(magician => {
        console.log(magician); //Iterates over each magician name using forEach method and then display the names
    })
}

show_magicians(magicians); //Calls the function show_magicians() and passes the magicians array as an argument