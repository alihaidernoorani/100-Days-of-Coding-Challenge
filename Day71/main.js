"use strict";
// Clas Type Annotations
Object.defineProperty(exports, "__esModule", { value: true });
class Product {
    constructor(id, name, price) {
        // Constructor parameter type annotations
        this.id = id;
        this.name = name;
        this.price = price;
    }
    // Method type annotations
    getProductInfo() {
        return `ID: ${this.id}, Name: ${this.name}, Price: $${this.price}`;
    }
}
// Create an instance of the product class
const product = new Product(1, "widget", 20.0);
// Access class properties and call a method
console.log(product.getProductInfo()); // Output: ID: 1, Name: Widget, Price: $20
// Class Access Modifiers
// public: Members declared as public are accessible from anywhere, both within and outside the class. This is the default modifier if you don't explicitly specify one.
class MyClassPublic {
    constructor(name) {
        this.name = name;
    }
}
const instancePublic = new MyClassPublic("John");
console.log(instancePublic.name); // Accessing the public property
// private: Members declared as private are only accessible from within the class they are defined in. You cannot access private members from outside the class.
class MyClassPrivate {
    constructor(secret) {
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
    constructor(name) {
        this.familyName = name;
    }
}
class Child extends Parent {
    introduceFamily() {
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
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this._price = 0;
    }
    // 'public' getter for price
    get price() {
        return this._price;
    }
    // 'public' setter for price
    set price(newPrice) {
        if (newPrice >= 0) {
            this._price = newPrice;
        }
        else {
            console.log("Price cannot be negative.");
        }
    }
    getProductInfo() {
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
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    static generateNextId() {
        return ProductStaticMembers.nextId++;
    }
    getProductInfo() {
        return `ID: ${this.id}, Name: ${this.name}`;
    }
}
// 'private' property
ProductStaticMembers.nextId = 1;
// Generate unique IDs for products using the static method
const product1static = new ProductStaticMembers(ProductStaticMembers.generateNextId(), "Widget");
const product2static = new ProductStaticMembers(ProductStaticMembers.generateNextId(), "Gadget");
console.log(product1static.getProductInfo()); // ID: 1, Name: Widget
console.log(product2static.getProductInfo()); // ID: 2, Name: Gadget
class Product1 {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    static generateNextId() {
        return Product1.nextId++;
    }
    getProductInfo() {
        return `ID: ${this.id}, Name: ${this.name}`;
    }
}
// 'private' property
Product1.nextId = 1;
// Generate unique IDs for products using the static method
const product1 = new Product1(Product1.generateNextId(), "Widget");
const product2 = new Product1(Product1.generateNextId(), "Gadget");
console.log(product1.getProductInfo()); // ID: 1, Name: Widget
console.log(product2.getProductInfo()); // ID: 2, Name: Gadget
// Abstract Classes and Members
// Abstract classes are used as blueprints for other classes. They cannot be instantiated on their own but can be subclassed by other classes. Abstract classes can also contain abstract methods, which are declared but not implemented in the abstract class itself. Subclasses are required to provide implementations for these abstract methods.
class AbstractItem {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    static generateNextId() {
        return AbstractItem.nextId++;
    }
}
AbstractItem.nextId = 1;
class Item extends AbstractItem {
    constructor(id, name) {
        super(id, name);
    }
    getItemInfo() {
        return `ID: ${this.id}, Name: ${this.name}`;
    }
}
const item1 = new Item(AbstractItem.generateNextId(), "Widget");
const item2 = new Item(AbstractItem.generateNextId(), "Gadget");
console.log(item1.getItemInfo()); // ID: 1, Name: Widget
console.log(item2.getItemInfo()); // ID: 2, Name: Gadget
// Polymorphism & Method Override
// This code example demonstrates the concept of polymorphism and method override in TypeScript, which is commonly used in object-oriented programming. It defines abstract classes and concrete subclasses to illustrate these concepts.
// Define an abstract class
class AbstractEntity {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    } // Change 'private' to 'protected'
    static generateNextId() {
        return AbstractEntity.nextId++;
    }
}
AbstractEntity.nextId = 1;
// Create a concrete subclass
class Entity extends AbstractEntity {
    constructor(id, name) {
        super(id, name);
    }
    getEntityInfo() {
        return `ID: ${this.id}, Name: ${this.name}`;
    }
}
// Create another concrete subclass
class AnotherEntity extends AbstractEntity {
    constructor(id, name) {
        super(id, name);
    }
    getEntityInfo() {
        return `ID: ${this.id}, Name: ${this.name}, Additional Info: ...`;
    }
}
// Generate unique IDs for entities using the static method
const entity1 = new Entity(AbstractEntity.generateNextId(), "Widget");
const entity2 = new AnotherEntity(AbstractEntity.generateNextId(), "Gadget");
// Polymorphism: Call 'getEntityInfo' method on different concrete subclasses
console.log(entity1.getEntityInfo()); // ID: 1, Name: Widget
console.log(entity2.getEntityInfo()); // ID: 2, Name: Gadget, Additional Info: ...
