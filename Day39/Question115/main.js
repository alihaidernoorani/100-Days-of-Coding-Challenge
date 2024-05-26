/*Day 39
Question 115: Use a switch statement to log the days of the week based on a number (1-7).*/
function getDay(day) {
    switch (day) {
        case 1:
            console.log("Sunday");
            break;
        case 2:
            console.log("Monday");
            break;
        case 3:
            console.log("Tuesday");
            break;
        case 4:
            console.log("Wednesday");
            break;
        case 5:
            console.log("Thursday");
            break;
        case 6:
            console.log("Friday");
            break;
        case 7:
            console.log("Saturday");
            break;
        default:
            console.log("Invalid number");
            break;
    }
}
getDay(2);
getDay(4);
getDay(7);
