// Common array operations
// forEach(function(element, index, entireArray))
['a', true, 10, 50].forEach(function(a, b, c){
    console.log('Element is ' + a + ' at index ' + b + ' in array ' + c);
});

// same as above using arrow function
['a', true, 10, 50].forEach((a, b, c) => console.log('Element is ' + a + ' at index ' + b + ' in array ' + c));

// map(function(element, index, entireArray)); returns array with same number of elements
let squareArray = ['a', false, 10, 50].map(function(a, b, c){
    return (a * a);
});
console.log(squareArray);       // [ NaN, 0, 100, 2500 ]

// same using arrow function
let addIndex = ['a', false, 10, 50].map((a, b, c) =>  a + b);
console.log(addIndex);          // [ a0, 1, 12, 53 ]

// filter(function(element, index, entireArray)); will return only those that pass the condition
let filteredNumbers = ['a', true, 10, 50].filter(function(a, b, c){
    return typeof(a) === 'number';
});
console.log(filteredNumbers);           // [ 10, 50 ]

let extractedStringOrLast = ['a', true, 10, 50].filter((a, b, c) => (typeof(a) === 'string') || (b === c.length - 1));
console.log(extractedStringOrLast);     // [ 'a', 50 ]

// every() and some(); returns a boolean
// every and some stops running when the result is known, won't unnecessarily run for all elements
// every(function(element, index, entireArray))
let isEveryEntryNumber = [10, false, 30, 100].every(a => typeof(a) === 'number');
console.log(isEveryEntryNumber);        // false

// some(function(element, index, entireArray))
let isAnyEntryNumber = [10, false, 30, 100].some(a => typeof(a) === 'number');
console.log(isAnyEntryNumber);          // true

// reduce(function(accumulator, element, index, entireArray), initialValue)
// reduceRight is same as reduce, just starts with highest index
// reduce and reduceRight, unlike every and some, will run for all array elements
let sumOfNumbers = [10, 25, 60, 15].reduce(function(a, b, c, d){
    return a = a + b + c;
}, 0);
console.log(sumOfNumbers);              // 116 - because numbers 110 + indexes 6

let numbersSum = [100, 250, 600, 150].reduce((a, b, c) => a + b + c, 5);
console.log(numbersSum);                // 1111 - because numbers 1100 + indexes 6 + initial 5

// indexOf and lastIndexOf
// indexOf searches from the beginning of an array
// lastIndexOf searches from the end of array
let numberCollection = [5, 10, 10, 25, 50, 100, 100, 75, 40, 40];
console.log(numberCollection.indexOf(10));              // 1
console.log(numberCollection.indexOf(25));              // 3
console.log(numberCollection.indexOf(40));              // 8
console.log(numberCollection.indexOf(30));              // -1
console.log(numberCollection.indexOf(100));             // 5
console.log(numberCollection.lastIndexOf(10));          // 2
console.log(numberCollection.lastIndexOf(25));          // 3
console.log(numberCollection.lastIndexOf(40));          // 9
console.log(numberCollection.lastIndexOf(30));          // -1
console.log(numberCollection.lastIndexOf(100));         // 6

// isArray
console.log(Array.isArray());                           // false
console.log(Array.isArray([]));                         // true
console.log(Array.isArray([null]));                     // true
console.log(Array.isArray([undefined]));                // true
console.log(Array.isArray(['a', 2]));                   // true
console.log(Array.isArray([{}]));                       // true
console.log(Array.isArray({a: [2,5]}));                 // false
console.log(Array.isArray(new Array(0)));               // true
console.log(Array.isArray('abc'));                      // false
console.log(Array.isArray('abc'.split()));              // true

// string as array of characters
let testString = 'abcd';
console.log(testString.charAt(1));                      // b
console.log(testString[1]);                             // b
console.log(testString[4]);                             // undefined

// Using Array properties with strings
console.log(['a','b','c'].join('-'));                   // a-b-c
console.log(('abc').split('').join('-'));               // a-b-c
console.log(Array.prototype.join.call('abc', '-'));     // a-b-c
