"use strict";
/*Day 44
Question 132: Discuss the difference between default and named exports in JavaScript modules.*/
Object.defineProperty(exports, "__esModule", { value: true });
// There are multiple named exports in a module. They are shown in braces
var namedanddefaultexport_1 = require("./namedanddefaultexport");
var namedanddefaultexport_2 = require("./namedanddefaultexport");
// There is only a single default export in a module. It shows the most important functionality of the module
var namedanddefaultexport_3 = require("./namedanddefaultexport");
console.log((0, namedanddefaultexport_3.default)(5, 6));
console.log((0, namedanddefaultexport_1.subtractNumbers)(7, 6));
console.log((0, namedanddefaultexport_2.multiplyNumbers)(5, 6));
