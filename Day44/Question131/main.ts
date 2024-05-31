/*Day 44
Question 131: Create two modules; one that exports a class, and another that imports the class and creates an instance.*/

import {Person} from "./class"

const person = new Person();

console.log(`${person.firstName} ${person.lastName}`);