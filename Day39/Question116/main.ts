/*Day 39
Question 116: Create a switch case that matches several cases to the same code block, representing seasons.*/

function getSeason (month: number): void{
    switch (month) {
        case 12: 
        case 1:
        case 2:
            console.log("Winter");
            break;
        case 3:
        case 4: 
        case 5:
            console.log("Spring");
            break;
        case 6:
        case 7: 
        case 8:
            console.log("Summer");
            break;
        case 9:   
        case 10:
        case 11: 
            console.log("Autumn");
            break;
        default:
            console.log("Invalid month");
            break;
    }
}

getSeason(2); 
getSeason(4);
getSeason(9);