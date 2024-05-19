/*Day 31
Question 93: Find the index of "Banana" in an array of fruits and replace it with "Mango".*/

function fruitReplacer (fruits: string[]){
    const fruitIndex: number = fruits.indexOf("Banana"); // Finds the index of the Banana in the array
    if (fruitIndex != -1){
        fruits[fruitIndex] = "Mango"; // If found, Replaces Banana with Mango
        console.log(`The index of Banana: ${fruitIndex}`); // Displays the index of Banana
        return fruits;
    }
    else{
        console.log("No Banana in array"); // The else block runs if no Banana is found in the array
    }
}

let fruits: string[] = ["Apple", "Cherry", "Banana"];
fruitReplacer(fruits);
console.log(fruits); // Displays the entire array after replacing Banana with Mango
