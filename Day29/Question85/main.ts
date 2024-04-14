/*Day 29
Question 85: Finding the Position of a Substring: 
Write a function that locates the first occurrence of the word "code" within 
any given string and returns its position.*/

function locateString (str: string): number{
    return str.indexOf("code");
}

console.log(locateString("Finding the word code within the sentence"));