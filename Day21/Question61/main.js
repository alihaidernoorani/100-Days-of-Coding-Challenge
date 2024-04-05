/*Day 21
Question 61: Making Enums for Vehicles: Let's create categories for vehicles like cars,
trucks, and motorcycles using enums, and show one example.*/
//Making a list (enums) for different vehicle type
var vehicles;
(function (vehicles) {
    vehicles[vehicles["cars"] = 0] = "cars";
    vehicles[vehicles["trucks"] = 1] = "trucks";
    vehicles[vehicles["motorcycles"] = 2] = "motorcycles";
})(vehicles || (vehicles = {}));
console.log(vehicles.cars); //It shows 0 because enums starts counting from 0
