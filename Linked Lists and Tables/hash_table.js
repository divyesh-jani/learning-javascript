// Objects and Maps are special implementations of hash tables

class HashTable {
    constructor(size) {
        this.table = new Array(size);
        this.size = size;
    }

    generateHash(key) {
        return ((key.length * 5) + 3) % this.size;
    }

    set(key, value) {
        let keyHash = this.generateHash(key);
        let valueAtHash = this.table[keyHash];
        if (!valueAtHash) {
            this.table[keyHash] = [[key, value]];
        } else {
            for (let i = 0; i < valueAtHash.length; i = i + 1) {
                if (valueAtHash[i][0] === key) {
                    valueAtHash[i][1] = value;
                    return;
                }
            }
            this.table[keyHash].push([key, value]);
        }
    }

    get(key) {
        let keyHash = this.generateHash(key);
        let valueAtHash = this.table[keyHash];
        if (!valueAtHash) return null;
        for (let pair of valueAtHash) {
            if (pair[0] === key) {
                return pair[1];
            }
        }
        return null;
    }

    remove(key) {
        let keyHash = this.generateHash(key);
        let valueAtHash = this.table[keyHash];
        if (!valueAtHash) return key + ' not found';
        for (let i = 0; i < valueAtHash.length; i = i + 1) {
            if (valueAtHash[i][0] === key) {
                this.table[keyHash].splice(i, 1);
                if (this.table[keyHash].length === 0) { // set null so we aren't left with an empty array
                    this.table[keyHash] = null;
                }
                return 'removed ' + key;
            }
        }
        return key + ' not found';
    }

    print() {
        for (let i = 0; i < this.size; i = i + 1) {
            if (this.table[i]) {
                let values = i + ' : ';
                for (let entry of this.table[i]) {
                    values = values + '[' + entry + ']';
                }
                console.log(values);
            }
        }
    }
}

// Testing
let myHash = new HashTable(100);
myHash.set('id', 50);
myHash.set('name', 'Adam');
myHash.set('data', 'None');

myHash.set('age', 95);
// 13 : [id,50]
// 18 : [age,95]
// 23 : [name,Adam][data,None]
myHash.print();

console.log(myHash.get('name'));        // Adam
console.log(myHash.get('age'));         // 95
console.log(myHash.get('address'));     // null
console.log(myHash.get('data'));        // none
myHash.set('age', 25);
// 13 : [id,50]
// 18 : [age,25]
// 23 : [name,Adam][data,None]
myHash.print();

console.log(myHash.remove('data'));     // removed data
console.log(myHash.remove('address'));  // address not found
console.log(myHash.remove('id'));       // removed id

// 18 : [age,25]
// 23 : [name,Adam]
myHash.print();
