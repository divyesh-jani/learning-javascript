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
        this.table = new Map();
    }

    add(key, value) {
        this.table.delete(key);
        this.table.set(key, value);

    }

    get(key) {
        if (this.table.has(key)) {
            let value = this.table.get(key);
            this.table.delete(key);
            this.table.set(key, value);
            return value;
        } else {
            console.log(key + ' does not exist.')
        }
    }

    delete(key) {
        if (this.table.has(key)) {
            this.table.delete(key);
        }
    }

    print() {
        console.log(this.table);
    }

    peek() {
        if (this.table.size > 0) {
            return Array.from(this.table)[this.table.size - 1][0];
        }
        return null;
    }
}

let myCustomDS = new CustomDataStructure();
myCustomDS.add('a', 20);
console.log(myCustomDS.peek());     // a
myCustomDS.add('b', 40);
console.log(myCustomDS.peek());     // b
console.log(myCustomDS.get('b'));   // 40
myCustomDS.add('c', 80);
console.log(myCustomDS.peek());     // c
myCustomDS.add('d', 160);
console.log(myCustomDS.peek());     // d
myCustomDS.add('b', 25);
console.log(myCustomDS.peek());     // b
myCustomDS.delete('c');
console.log(myCustomDS.peek());     // b
console.log(myCustomDS.get('a'));   // 20
myCustomDS.add('a', 15);
console.log(myCustomDS.get('a'));   // 15
console.log(myCustomDS.peek());     // a
myCustomDS.delete('b');
console.log(myCustomDS.peek());     // a
myCustomDS.delete('a');
console.log(myCustomDS.peek());     // d
myCustomDS.delete('d');
console.log(myCustomDS.peek());     // null
