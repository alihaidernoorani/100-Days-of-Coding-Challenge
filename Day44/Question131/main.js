"use strict";
/*Day 44
Question 131: Create two modules; one that exports a class, and another that imports the class and creates an instance.*/
Object.defineProperty(exports, "__esModule", { value: true });
const class_1 = require("./class");
const person = new class_1.Person();
console.log(`${person.firstName} ${person.lastName}`);
