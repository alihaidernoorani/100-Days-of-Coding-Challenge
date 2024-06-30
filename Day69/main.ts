// We create an enum called Days with a list of constant values, starting from 0 by default.
// Enums allow us to assign meaningful names to these values.
enum Days {
    Sunday,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday
}

// We assign the value Days.Wednesday to the variable today.
const today: Days = Days.Wednesday; 

// We use Days[today] to retrieve and display the name of the day associated with the value in today.
console.log(`Today is ${Days[today]}`); // Output: Today is Wednesday