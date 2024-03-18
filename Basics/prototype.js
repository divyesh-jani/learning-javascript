// Prototype can help share properties and methods across instances
// Also very important to achieve prototypal inheritance if not using class keyword

function Person(first, last) {
    this.firstName = first;
    this.lastName = last;
    this.printFullName = function() {
        console.log('Full name: ' + this.firstName + ' ' + this.lastName + ' from initial method.');
    }
}

let p1 = new Person('John', 'Doe');
let p2 = new Person('Jane', 'Dean');

p1.printFullName();             // Full name: John Doe from initial method.
p2.printFullName();             // Full name: Jane Dean from initial method.

Person.prototype.printHyphenatedName = function() {
    console.log('Hyphenated name: ' + this.firstName + '-' + this.lastName + ' from added prototype method.');
}

p1.printHyphenatedName();   // Hyphenated name: John-Doe from added prototype method.
p2.printHyphenatedName();   // Hyphenated name: Jane-Dean from added prototype method.

Person.prototype.isActive = false;

console.log(p1.isActive);   // false
console.log(p2.isActive);   // false
p1.isActive = true;
console.log(p1.isActive);   // true
console.log(p2.isActive);   // false
