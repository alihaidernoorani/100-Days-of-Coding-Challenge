/*Day 29
Question 87: Extracting a Substring: Demonstrate how to extract the first 10 characters from a string.*/

function extractCharacters (str: string): string{
    return str.substring(0,10);
}

console.log(extractCharacters("Hello, JavaScript world!"));