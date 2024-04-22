/*Day 31
Question 93: Find the index of "Banana" in an array of fruits and replace it with "Mango".*/

function fruitReplacer (fruits: string[]){
    let fruitIndex: number = fruits.indexOf("Banana");
    if (fruitIndex != -1){
        fruits[fruitIndex] = "Mango";
    }
    return fruits;
}

let fruits: string[] = ["Apple", "Banana", "Cherry"];
console.log(fruitReplacer(fruits));