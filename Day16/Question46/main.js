"use strict";
/*Day 16
Question 46: Enhanced Laptop Object: Construct an object for a laptop including properties make, model, year,
and a method describe() that logs a sentence about the laptop. */
Object.defineProperty(exports, "__esModule", { value: true });
let laptop = {
    make: "Dell",
    model: "XPS 13",
    year: 2023,
    describe: function () {
        console.log(`This laptop is ${this.year} ${this.make} ${this.model}`);
    }
};
laptop.describe();
