/*Day 44
Question 132: Discuss the difference between default and named exports in JavaScript modules.*/

// There are multiple named exports in a module. They are shown in braces
import { subtractNumbers } from "./namedanddefaultexport";
import { multiplyNumbers } from "./namedanddefaultexport";

// There is only a single default export in a module. It shows the most important functionality of the module
import addNumbers from "./namedanddefaultexport";

console.log(addNumbers(5,6));
console.log(subtractNumbers(7,6));
console.log(multiplyNumbers(5,6));





