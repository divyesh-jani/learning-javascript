/*
 * Create a data structure that supports following functions/methods:
 * add(a, 25) : should add key a with a corresponding value of 25
 * get(a) : should return corresponding value of a (25) if a exists
 * delete(a) : should remove a from data if a exists
 * peek() : should return the last checked/updated key - last added or last looked(get)
 * if last touched key is deleted, peek should return the last touched key from available keys
*/

class CustomDataStructure {
    constructor() {
        this.peekArray = [];
        this.table = {};
    }

    add(key, value) {
        this.table[key] = value;
        this.peekArray.push(key);
    }

    get(key) {
        if (this.table[key]) {
            this.peekArray.push(key);
            return this.table[key];
        }
    }

    delete(key) {
        if (this.table[key]) {
            delete this.table[key];
        }
    }

    print() {
        console.log(this.table);
    }

    peek() {
        for (let i = this.peekArray.length - 1; i >= 0; i = i - 1) {
            let lastTouched = this.peekArray[i];
            if (this.table[lastTouched]) {
                return lastTouched;
            } else {
                this.peekArray.pop();
            }
        }
    }
}

let myCustomDS = new CustomDataStructure();
myCustomDS.add('a', 20);
console.log(myCustomDS.peek());
myCustomDS.add('b', 40);
console.log(myCustomDS.peek());
myCustomDS.add('c', 80);
console.log(myCustomDS.peek());
myCustomDS.add('d', 160);
console.log(myCustomDS.peek());
myCustomDS.add('b', 25);
console.log(myCustomDS.peek());
myCustomDS.delete('c');
console.log(myCustomDS.peek());
myCustomDS.add('a', 15);
console.log(myCustomDS.peek());
myCustomDS.delete('b');
console.log(myCustomDS.peek());
myCustomDS.delete('a');
console.log(myCustomDS.peek());
myCustomDS.delete('d');
console.log(myCustomDS.peek());
// a b c d b b a a d undefined
