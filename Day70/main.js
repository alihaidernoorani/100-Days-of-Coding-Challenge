"use strict";
// Interface
const John = {
    name: "John",
    age: 30,
};
const Sarah = {
    name: "Sarah",
    age: 30,
    greet(message) {
        console.log(`${this.name} says: ${message}`);
    },
};
Sarah.greet("Hello, TypeScript!"); // Output: Sarah says: Hello, TypeScript!
// Create an object 'userSettings' that adheres to the merged 'Settings' interface
let userSettings = {
    theme: true,
    font: "Open Sans",
    sidebar: false,
    external: true
};
// HTMLImageElement
// In TypeScript, HTMLImageElement is a built-in interface that represents an HTML <img> element. This interface extends the HTMLElement interface and provides additional properties and methods specifically related to images.
const imgElement = document.createElement("img");
imgElement.src = "image.jpg";
imgElement.alt = "My Image";
if (imgElement.complete) {
    console.log(`Image dimensions: ${imgElement.naturalWidth}x${imgElement.naturalHeight}`);
}
else {
    imgElement.addEventListener("load", () => {
        console.log(`Image dimensions: ${imgElement.naturalWidth}x${imgElement.naturalHeight}`);
    });
}
class Labrador {
    constructor() {
        this.type = "dog";
    }
    bark() {
        console.log("Woof!");
    }
}
const Labrador2 = {
    type: "monkey",
    bark() {
        console.log("Woof!");
    },
};
const myCar = {
    brand: "Toyota",
    model: "Camry"
};
// Type Alias: Does not support declaration merging. If you declare multiple type aliases with the same name, you'll get an error.
// 4. Extensibility:
// Interface: Use when you need to define the shape of objects and also when you need to implement them in classes. They are more suitable for defining contracts that classes must adhere to.
// Type Alias: Use when you want to create custom types that can be combined using union types, intersection types, or when defining complex types.
// 5. Readability and Style:
// Interface: Preferred when defining shapes of objects, especially for public APIs, as they convey the intent clearly. They also work well with code editors' IntelliSense for auto-completion and documentation generation.
// Type Alias: Useful for defining unions, intersections, and more complex types. They are often used to give descriptive names to specific combinations of types.
