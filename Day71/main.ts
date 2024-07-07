// Clas Type Annotations

import { log } from "console";

class Product {
    // Property type annotations
    id: number;
    name: string;
    price: number;

    constructor(id: number, name: string, price: number) {
        // Constructor parameter type annotations
        this.id = id;
        this.name = name;
        this.price = price;
    }

    // Method type annotations
    getProductInfo () {
        return `ID: ${this.id}, Name: ${this.name}, Price: $${this.price}`;
    }
}

// Create an instance of the product class
const product = new Product(1, "widget" ,20.0)

// Access class properties and call a method
console.log(product.getProductInfo()) // Output: ID: 1, Name: Widget, Price: $20




// Class Access Modifiers

// public: Members declared as public are accessible from anywhere, both within and outside the class. This is the default modifier if you don't explicitly specify one.

class MyClassPublic {
    public name: string;

    constructor(name: string) {
        this.name = name
    }
}

const instancePublic = new MyClassPublic("John");
console.log(instancePublic.name) // Accessing the public property


// private: Members declared as private are only accessible from within the class they are defined in. You cannot access private members from outside the class.

class MyClassPrivate {
    private secret: string;

    constructor(secret: string) {
        this.secret = secret;
    }

    revealSecret() {
        console.log(this.secret); // Accessing the private property from within the class
    }
}

const instancePrivate = new MyClassPrivate("My secret");
// console.log(instancePrivate.secret) // This would result in an error because secret is private
instancePrivate.revealSecret(); // This is a valid way to access the private property


// protected: Members declared as protected are accessible from within the class they are defined in and from subclasses (derived classes). You cannot access protected members from outside the class or unrelated classes.

class Parent {
    protected familyName: string;

    constructor(name: string) {
        this.familyName = name;
    }
}

class Child extends Parent {
    introduceFamily(){
        console.log(`Our family name is ${this.familyName}`);
    }
}

const parent = new Parent("Smith");
const child = new Child("Johnson");

// console.log(parent.familyName); // This would result in an error because familyName is protected
child.introduceFamily(); // This is a valid way to access the protected property



// Class Accessors

// Class accessors, also known as getters and setters, are a way to control access to the properties of a class. They allow you to get and set the values of class properties while providing additional control and logic if needed. Accessors are defined using the get and set keywords.

class ProductExAccessors {
    // 'Private' property
    private  _price: number;

    constructor(private id: number, private name: string) {
        this._price = 0;
    }

    // 'public' getter for price
    get price(): number {
        return this._price;
    }

    // 'public' setter for price
    set price(newPrice: number) {
        if (newPrice >= 0) {
            this._price = newPrice;
        } else {
            console.log("Price cannot be negative.");
        }
    }
    getProductInfo(): string {
        return `ID: ${this.id}, Name: ${this.name}, Price: $${this._price}`;
    }
}

// Create an instance of the ProductExAccessors class
const productEx = new ProductExAccessors(1, "Widget");

console.log(productEx.getProductInfo()); // Default price: ID: 1, Name: Widget, Price: $0

// Use the 'setter' to update the price
productEx.price = 20.0;

console.log(productEx.getProductInfo()); // Updated price: ID: 1, Name: Widget, Price: $20

// Attempting to set a negative price triggers the setter logic
productEx.price = -5; // Price cannot be negative.



// Class Static Members

// Static members in a class are properties or methods that belong to the class itself, rather than to instances of the class. This means you can access them without creating an instance of the class. They are defined using the static keyword in TypeScript. In this case, the static member nextId is used to manage unique IDs for all instances of the ProductStaticMembers class.

class ProductStaticMembers {
    // 'private' property
    private static nextId: number = 1;
  
    constructor(private id: number, private name: string) {}
  
    static generateNextId(): number {
      return ProductStaticMembers.nextId++;
    }
  
    getProductInfo(): string {
      return `ID: ${this.id}, Name: ${this.name}`;
    }
}

// Generate unique IDs for products using the static method
const product1static = new ProductStaticMembers(ProductStaticMembers.generateNextId(), "Widget");
const product2static = new ProductStaticMembers(ProductStaticMembers.generateNextId(), "Gadget");

console.log(product1static.getProductInfo()); // ID: 1, Name: Widget
console.log(product2static.getProductInfo()); // ID: 2, Name: Gadget



// Class Implement Interface

// The class ensures that it provides the properties and methods required by that interface. It helps enforce a consistent structure for objects created from that class.

interface ProductInterface {
    id: number;
    name: string;
    getProductInfo(): string;
}
  
class Product1 implements ProductInterface {
    // 'private' property
    private static nextId: number = 1;
  
    constructor(public id: number, public name: string) {}
  
    static generateNextId(): number {
      return Product1.nextId++;
    }
  
    getProductInfo(): string {
      return `ID: ${this.id}, Name: ${this.name}`;
    }
}

// Generate unique IDs for products using the static method
const product1 = new Product1(Product1.generateNextId(), "Widget");
const product2 = new Product1(Product1.generateNextId(), "Gadget");
  
console.log(product1.getProductInfo()); // ID: 1, Name: Widget
console.log(product2.getProductInfo()); // ID: 2, Name: Gadget
  



// Abstract Classes and Members

// Abstract classes are used as blueprints for other classes. They cannot be instantiated on their own but can be subclassed by other classes. Abstract classes can also contain abstract methods, which are declared but not implemented in the abstract class itself. Subclasses are required to provide implementations for these abstract methods.

abstract class AbstractItem {
    private static nextId: number = 1;
  
    constructor(public id: number, protected name: string) {}
  
    static generateNextId(): number {
      return AbstractItem.nextId++;
    }
  
    abstract getItemInfo(): string;
}
  
class Item extends AbstractItem {
    constructor(id: number, name: string) {
        super(id, name);
    }

    getItemInfo(): string {
        return `ID: ${this.id}, Name: ${this.name}`;
    }
}

const item1: AbstractItem = new Item(AbstractItem.generateNextId(), "Widget");
const item2: AbstractItem = new Item(AbstractItem.generateNextId(), "Gadget");

console.log(item1.getItemInfo()); // ID: 1, Name: Widget
console.log(item2.getItemInfo()); // ID: 2, Name: Gadget



// Polymorphism & Method Override

// This code example demonstrates the concept of polymorphism and method override in TypeScript, which is commonly used in object-oriented programming. It defines abstract classes and concrete subclasses to illustrate these concepts.

// Define an abstract class
abstract class AbstractEntity {
    private static nextId: number = 1;
    protected constructor(public id: number, protected name: string) {} // Change 'private' to 'protected'
    static generateNextId(): number {
      return AbstractEntity.nextId++;
    }
    abstract getEntityInfo(): string;
}
  
// Create a concrete subclass
class Entity extends AbstractEntity {
    constructor(id: number, name: string) {
        super(id, name);
    }
    getEntityInfo(): string {
        return `ID: ${this.id}, Name: ${this.name}`;
    }
}

// Create another concrete subclass
class AnotherEntity extends AbstractEntity {
    constructor(id: number, name: string) {
        super(id, name);
    }
    getEntityInfo(): string {
        return `ID: ${this.id}, Name: ${this.name}, Additional Info: ...`;
    }
}

// Generate unique IDs for entities using the static method
const entity1: AbstractEntity = new Entity(AbstractEntity.generateNextId(), "Widget");
const entity2: AbstractEntity = new AnotherEntity(AbstractEntity.generateNextId(), "Gadget");

// Polymorphism: Call 'getEntityInfo' method on different concrete subclasses
console.log(entity1.getEntityInfo()); // ID: 1, Name: Widget
console.log(entity2.getEntityInfo()); // ID: 2, Name: Gadget, Additional Info: ...