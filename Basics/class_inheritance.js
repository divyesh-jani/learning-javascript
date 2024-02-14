// class extends keyword does the same thing as prototypal inheritance, but is concise

class Person {
    constructor(first, last) {
        this.firstName = first;
        this.lastName = last;
        this.isActive = true;
    }

    getFullName() {
        console.log('My name is ' + this.firstName + ' ' + this.lastName);
    }

    getStatus() {
        console.log('I am available! Need help?');
    }
}

class SuperHero extends Person {
    constructor(first, last) {
        super(first, last);
        this.isSuperHero = true;
    }

    getFullName() {
        console.log('I am a SuperHero and my name is ' + this.firstName + ' ' + this.lastName);
    }
}



let s1 = new SuperHero('Bruce', 'Wayne');
console.log(s1);                // type: SuperHero
s1.getFullName();               // I am a SuperHero and my name is Bruce Wayne
console.log(s1.isActive);       // true
s1.getStatus()                  // I am available! Need help?


let s2 = new SuperHero('Diana', 'Prince');
console.log(s2);                // type: SuperHero
s2.getFullName();               // I am a SuperHero and my name is Diana Prince
console.log(s2.isActive);       // true
s2.getStatus();                 // I am available! Need help?
