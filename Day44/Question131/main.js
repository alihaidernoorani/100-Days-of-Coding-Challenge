"use strict";
/*Day 44
Question 131: Create two modules; one that exports a class, and another that imports the class and creates an instance.*/
Object.defineProperty(exports, "__esModule", { value: true });
// In another file:
var person_1 = require("./person");
var person = new person_1.Person("Alice"); // Outputs: Hello, my name is Alice
person.greet();
// This snippet imports the Person class and uses it to create an instance.
