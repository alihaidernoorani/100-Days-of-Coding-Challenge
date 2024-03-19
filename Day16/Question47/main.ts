/*Day 16
Question 47: Combining Arrays with Spread Operator: Suppose you're comparing prices of two different sets of laptops.
Use the spread operator to combine these arrays into a single array sorted in ascending order, then log the result.*/

let laptops = [
  { make: "Dell", model: "XPS 15", year: 2021 },
  { make: "Apple", model: "MacBook Pro", year: 2020 },
  { make: "HP", model: "Spectre x360", year: 2021 }
];
let [laptop1, laptop2] = laptops;
console.log(laptop1);
console.log(laptop2);