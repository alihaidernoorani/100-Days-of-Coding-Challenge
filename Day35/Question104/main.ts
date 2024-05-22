/*Day 35
Question 104: Create a function that generates a random hexadecimal color code.*/

// Function to generate a random hex color code
function generateColorCode(): string {
    let color: string = "#"; // Initialize color with the hash symbol
    const hexCode: string = "0123456789ABCDEF"; // String containing all possible hex digits
    
    // Loop to generate a 6-digit hex color code
    for (let i: number = 0; i < 6; i++) {
        // Append a random hex digit to the color string
        color += hexCode[Math.floor(Math.random() * hexCode.length)];
    }
    
    return color; // Return the generated color code
}

// Log the generated color code to the console
console.log(generateColorCode());
