// very similar to objects, but in map keys can be of any type (in objects keys can only be string or symbol)
// Objects are not iterable but maps are iterables
// Size property can tell us amount of data in map
// Maps can store only data, not functions

let myMap = new Map([['a', 10],['b', 20]]);
console.log(myMap);             // Map(2) { 'a' => 10, 'b' => 20 }
myMap.set('c', 30);
console.log(myMap);             // Map(3) { 'a' => 10, 'b' => 20, 'c' => 30 }
myMap.delete('a');
console.log(myMap);             // Map(2) { 'b' => 20, 'c' => 30 }

console.log(myMap.has('b'));    // true
console.log(myMap.has('d'));    // false

console.log(myMap.size);        // 2

// Iterate over map and print all key value pairs
for (let [key, value] of myMap) {
    console.log(key + ': ' + value);
}

myMap.clear();
console.log(myMap);             // Map(0) {}
