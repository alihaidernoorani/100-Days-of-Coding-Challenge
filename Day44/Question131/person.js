"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
// In file: person.ts
class Person {
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }
}
exports.Person = Person;
// Exports the Person class
