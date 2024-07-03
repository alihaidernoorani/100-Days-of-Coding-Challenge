// Interface

// A basic example of interface definition:
interface PersonEx1 {
    name: string;
    age: number;
}

const John: PersonEx1 = {
    name: "John",
    age: 30,
};

// In this example, we define an interface PersonEx1 with two properties: name (a string) and age (a number). 
// We then create an object John that adheres to this interface.


// Interface Method and Parameters

// In TypeScript, interface can not only define the structure of an object but also the types and interfaces that objects adhering to the interface should have

// Define an interface 'Person' with a method 'greet'
interface PersonEx2 {
    name: string;
    age: number;
    greet(message: string): void;
}

const Sarah = {
    name: "Sarah",
    age: 30,
    greet (message: string) {
        console.log(`${this.name} says: ${message}`);
    },
}

Sarah.greet("Hello, TypeScript!"); // Output: Sarah says: Hello, TypeScript!


// ReOpen The Interface And Use Cases
// Homepage Interface Declaration
interface Settings {
    readonly theme: boolean;
    font: string;
}

// Articles Page Interface Reopening
interface Settings {
    sidebar: boolean;
}

// Contact Page Interface Reopening
interface Settings {
    external: boolean;
}

// Create an object 'userSettings' that adheres to the merged 'Settings' interface
let userSettings: Settings = {
    theme: true,
    font: "Open Sans",
    sidebar: false,
    external: true
};


// HTMLImageElement
// In TypeScript, HTMLImageElement is a built-in interface that represents an HTML <img> element. This interface extends the HTMLElement interface and provides additional properties and methods specifically related to images.
const imgElement: HTMLImageElement = document.createElement ("img");
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


// Interface vs. Type Aliases

// 1. Declaration Syntax

// Interface: Declared using the interface keyword.
interface PersonExInterface {
    name: string;
    age: number;
}

// Type Alias: Declared using the type keyword.
type PersonExType = {
    name: string;
    age: number;
};

// 2. Extending and Implementing

// Interface: Can be extended by other interfaces using the extends keyword and implemented by classes using the implements keyword.
interface Animal {
    type: string;
}

interface Dog extends Animal {
    bark(): void;
}

class Labrador implements Dog {
    type = "dog";
    bark(){
        console.log("Woof!");
    }
}

// Type Alias: Cannot be extended or implemented directly. However, you can achieve similar results using intersection types.
type AnimalExtype = {
    type: string;
};

type Monkey = AnimalExtype & {
    bark(): void;
};

const Labrador2: Monkey = {
    type: "monkey",
    bark() {
      console.log("Woof!");
    },
  };

// 3. Compatibility

// Interface: Supports declaration merging. When you declare multiple interfaces with the same name, TypeScript will merge them into a single interface.
interface Car {
    brand: string;
}

interface Car {
    model: string;
}

const myCar: Car = {
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


  