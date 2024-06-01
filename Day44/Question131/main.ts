/*Day 44
Question 131: Create two modules; one that exports a class, and another that imports the class and creates an instance.*/

// In another file:
import {Person} from "./person"

const person = new Person("Alice"); // Outputs: Hello, my name is Alice

person.greet();
// This snippet imports the Person class and uses it to create an instance.
