// Iterate

// for-in can be used for arrays and objects
// for-of can be used only for arrays
// for-of = array; for-in = object
function useForInArray(input) {
    for (let i in input) {
        console.log("Index is " + i + ", Value is " + input[i]);
    }
}
useForInArray([10,20,30,40,50]);

function useForOfArray(input) {
    for (let i of input) {
        console.log("Value is " + i);
    }
}
useForOfArray([10,20,30,40,50]);

// Arrays can be used as object (keys can be aplhanumeric)
let objectLikeArray = [];
objectLikeArray[5.6] = 20;
objectLikeArray[1] = 10;
objectLikeArray['a'] = 50;
console.log(objectLikeArray); // [ undefined, 10, '5.6': 20, a: 50 ]

let allValues = [];
for (let i = 0; i < objectLikeArray.length; i = i + 1) {
    allValues.push(objectLikeArray[i]);
}
console.log(allValues); // [ undefined, 10 ]

let keys = Object.keys(objectLikeArray);
console.log(keys); // [ '1', '5.6', 'a' ]

let keyValues = [];
for (let i = 0; i < keys.length; i = i + 1) {
    keyValues.push(objectLikeArray[keys[i]]);
}
console.log(keyValues); // [ 10, 20, 50 ]
// or
let keyValuesForEach = [];
keys.forEach(key => keyValuesForEach.push(objectLikeArray[key]));
console.log(keyValuesForEach); // [ 10, 20, 50 ]

// Using continue to eliminate some array entries
for (let i = 1; i < 10; i = i + 1) {
    if (i % 2 !== 0) {
        continue;
    }
    console.log(i);
}

// Array Methods
// Join
let testArray = [1,2,3,4,5,6,7,8,9];
console.log(testArray.join());          // 1,2,3,4,5,6,7,8,9
console.log(testArray.join(''));        // 123456789
console.log(testArray.join('-'));       // 1-2-3-4-5-6-7-8-9
let testArrayEmpty = new Array(5);
console.log(testArrayEmpty.join('-'));  // ----
console.log(testArray);                 // Original not changed - [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

// Reverse
let testReverse = [1,3,5,6,8];
console.log(testReverse.reverse());     // [ 8, 6, 5, 3, 1 ]
console.log(testReverse);               // Original CHANGED - [ 8, 6, 5, 3, 1 ]

// Sort
let testSort = [3,1,8,6];
console.log(testSort.sort());           // [ 1, 3, 6, 8 ]
console.log(testSort);                  // Original CHANGED - [ 1, 3, 6, 8 ]

// Concat
let testConcat = [1,3,5,6,8];
let testNext = [10,12];
console.log(testConcat.concat('+'));        // [ 1, 3, 5, 6, 8, '+' ]
console.log(testConcat.concat(testNext));   // [ 1, 3, 5, 6, 8, 10, 12 ]
console.log(testConcat);                    // Originals not changed - [ 1, 3, 5, 6, 8 ]
console.log(testNext);                      // Originals not changed - [ 10, 12 ]

// Slice returns a part of array and does not change the array
// someArray.slice(startIndex, endIndex) // include start index in result but not end index
// someArray.slice(startIndex) // all elements to the right of array including element at startIndex
let testSlice = [1,3,5,6,8,10,12];
console.log(testSlice.slice());       // [ 1, 3, 5, 6, 8, 10, 12 ] - removed nothing and returned original array
console.log(testSlice.slice(2));      // [ 5, 6, 8, 10, 12 ] - removed first 2 elements and returned remaining
console.log(testSlice.slice(-2));     // [ 10, 12 ] - returned last 2
console.log(testSlice.slice(2, 3));   // [ 5 ] - returned index 2 and stops at 3 (does not include 3)
console.log(testSlice.slice(2, -2));  // [ 5, 6, 8 ] - returned from index 2 and did not include last 2
console.log(testSlice);               // [ 1, 3, 5, 6, 8, 10, 12 ]

// Splice alters the original array
// splice(start)
// splice(start, deleteCount)
let testSplice = [1,3,5,6,8,10,12];
console.log(testSplice.splice());       // [] - nothing returned
console.log(testSplice.splice(3));      // [ 6, 8, 10, 12 ] - same as slice, returned all but first 3 elements
console.log(testSplice.splice(-2));     // [ 10, 12 ] - returned last 2
console.log(testSplice.splice(2, 3));   // [ 5, 6, 8 ] - returns 3 elements from index 2, including 2
console.log(testSplice.splice(-2, 2));  // [ 10, 12 ] - returned last 2

// Push and Pop
let testPushPop = [1,3,5,6,8];
console.log(testPushPop.pop());         // 8 - returned last element
console.log(testPushPop);               // [ 1, 3, 5, 6 ] - changed original array
console.log(testPushPop.push(10));      // 5 - pushes element but returns array length
console.log(testPushPop);               // [ 1, 3, 5, 6, 10 ]

// Shift and Unshift
// Unshift is push at the beginning; shift is pop from the beginning
let testShiftUnshift = [5];
console.log(testShiftUnshift.unshift(3));   // 2 - unshift = pushes element but returns array length
console.log(testShiftUnshift.unshift(1));   // 3 - unshift = pushes element but returns array length
console.log(testShiftUnshift);              // [ 1, 3, 5 ]
console.log(testShiftUnshift.shift());      // 1 - shift = pop;  returns removed element
console.log(testShiftUnshift.shift());      // 3 - shift = pop;  returns removed element
console.log(testShiftUnshift);              // [5]

// Flatten array
// flat(depth)
// default depth is 1
let nestedArray = [1, 2, [3, 4, [5, [6, 7, 8, [9], 10, 11], 12], 13, 14, [15, 16, [17, [18, 19, [20]], 21]]]];
console.log(nestedArray.flat());
// [ 1, 2, 3, 4, [ 5, [ 6, 7, 8, [Array], 10, 11 ], 12 ], 13, 14, [ 15, 16, [ 17, [Array], 21 ] ] ]
console.log(nestedArray.flat(2));
// [ 1, 2, 3, 4, 5, [ 6, 7, 8, [ 9 ], 10, 11 ], 12, 13, 14, 15, 16, [ 17, [ 18, 19, [Array] ], 21 ] ]
console.log(nestedArray.flat(Infinity));
// [ 1,  2,  3,  4,  5,  6,  7, 8,  9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21 ]
