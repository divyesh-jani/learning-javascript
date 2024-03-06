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
    constructor(first, last, world) {
        super(first, last);
        this.virtualWorld = world || 'Reality';
        this.isSuperHero = true;
    }

    getFullName() {
        console.log('I am a SuperHero and my name is ' + this.firstName + ' ' + this.lastName);
    }

    get myWorld() {
        return 'My world is ' + this.virtualWorld + '!';
    }
}

let s1 = new SuperHero('Bruce', 'Wayne');
console.log(s1);                // type: SuperHero
s1.getFullName();               // I am a SuperHero and my name is Bruce Wayne
console.log(s1.isActive);       // true
s1.getStatus();                 // I am available! Need help?
console.log(s1.myWorld);        // My world is Reality!


let s2 = new SuperHero('Diana', 'Prince', 'DC');
s2.getFullName();               // I am a SuperHero and my name is Diana Prince
console.log(s2.isActive);       // true
s2.getStatus();                 // I am available! Need help?
console.log(s2.myWorld);        // My world is DC!

let s3 = new SuperHero('Bruce', 'Banner', 'Marvel');
s3.getFullName();               // I am a SuperHero and my name is Bruce Banner
console.log(s3.myWorld);        // My world is Marvel!
