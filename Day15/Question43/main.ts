/*Day 15
Question 43: Unchanged Magicians: Preserve the original magician names while creating a new "great" list. */

let magicians: string[] = ["Harry Houdini", "David Copperfield", "Penn & Teller"];

function show_magicians(magicians: string[]) {
    magicians.forEach(magician => {
        console.log(magician); 
    })
}

function make_great(magicians: string[]): string[] {
    let greatMagicians: string[] = [];
    magicians.forEach(magician => {
        greatMagicians.push(`${magician} the Great`);
    });
    return greatMagicians;
}

let greatMagicians = make_great(magicians.slice()); // Creates a new modified array

console.log("Original magicians:");
show_magicians(magicians); // Shows original names
console.log("\nGreat magicians:");
show_magicians(greatMagicians); // Shows modified names
