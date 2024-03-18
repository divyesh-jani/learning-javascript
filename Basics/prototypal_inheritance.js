// Prototypal Inheritance

// Defining parent
function Person(first, last) {
    this.firstName = first;
    this.lastName = last;
    this.getFullName = function() {
        console.log('My name is ' + this.firstName + ' ' + this.lastName);
    }
}

Person.prototype.isActive = true;
Person.prototype.getStatus = function() {
    console.log('I am available! Need help?');
};

// Defining child
function SuperHero(first, last) {
    // Inherit from Person
    // Inherits all initial properties and methods but not prototype ones
    // So will inherit firstName, lastName, and getFullName
    Person.call(this, first, last);
    this.isSuperHero = true;
    // getFullName from Person gets overridden here
    this.getFullName = function() {
        console.log('I am a SuperHero and my name is ' + this.firstName + ' ' + this.lastName);
    }
}

let s1 = new SuperHero('Bruce', 'Wayne');
console.log(s1);                // type: SuperHero
s1.getFullName();               // I am a SuperHero and my name is Bruce Wayne
console.log(s1.isActive);       // undefined
console.log(s1.getStatus);      // undefined

// Inherit isActive and getStatus by creating prototype chain
SuperHero.prototype = Object.create(Person.prototype);
let s2 = new SuperHero('Clark', 'Kent');
console.log(s2);                // type: Person
s2.getFullName();               // I am a SuperHero and my name is Clark Kent
console.log(s2.isActive);       // true
s2.getStatus();                 // I am available! Need help?

// Tell JS to fix the type, not get confused with inheritance
SuperHero.prototype.constructor = SuperHero;
let s3 = new SuperHero('Diana', 'Prince');
console.log(s3);                // type: SuperHero
s3.getFullName();               // I am a SuperHero and my name is Diana Prince
console.log(s3.isActive);       // true
s3.getStatus();                 // I am available! Need help?
