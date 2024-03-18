// very similar to arrays, but duplicates are not allowed in sets

let mySet = new Set(['a', 'b', 'c', 4, 'e']);

mySet.add(6);               // Set(6) { 'a', 'b', 'c', 4, 'e', 6 }
console.log(mySet);
mySet.add(4);               // Set(6) { 'a', 'b', 'c', 4, 'e', 6 } - did not add because 4 already exists
console.log(mySet);
mySet.add('f');             // Set(7) { 'a', 'b', 'c', 4, 'e', 6, 'f' }
console.log(mySet);

mySet.delete('c');          // Set(6) { 'a', 'b', 4, 'e', 6, 'f' }
console.log(mySet.size);    // 6

// Iterate over set and print every element
for (let item of mySet) {
    console.log(item);
}

console.log(mySet.has('b'));  // true
console.log(mySet.has('d'));  // false

mySet.clear();
console.log(mySet);         // Set(0) {}
