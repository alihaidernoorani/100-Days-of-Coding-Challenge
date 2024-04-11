/*Day 27
Question 79: Creating and Accessing Object Properties: 
Construct an object representing a car with properties for make, model, and year. 
Then, show how you can access the model property of the car.*/

let car: {make: string, model: string, year: number} = {
    make: "Suzuki",
    model: "Cultus",
    year: 2015
};

console.log(`model of the car: ${car.model}`)