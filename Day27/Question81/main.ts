/*Day 27
Question 81: Iterating Over Object Properties: 
Write a function that takes an object as an argument and logs all of its properties and values.*/

function iteratingObject (obj: { [key: string]: any }){
    for (let key in obj){
        console.log(`${key}: ${obj[key]}`)
    }
}

let car: {make: string, model: string, year: number, color?: string} = {
    make: "Suzuki",
    model: "Cultus",
    year: 2015
};

iteratingObject(car);