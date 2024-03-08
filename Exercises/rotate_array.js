// Given an integer array, rotate the array to the right by k steps, where k is non-negative.

// Straightforward way, not the most efficient though
function rotateArray(array, k) {
    if (k === 0 || k % array.length === 0) return array;
    let shifts = k % array.length;
    while (shifts > 0) {
        array.unshift(array.pop());
        shifts = shifts - 1;
    }
    return array;
}

let arrayToRotate = [1,2,3,5,8,13,21];
console.log(rotateArray(arrayToRotate, 0));     // [1,2,3,5,8,13,21]
arrayToRotate = [1,2,3,5,8,13,21];
console.log(rotateArray(arrayToRotate, 1));     // [21,1,2,3,5,8,13]
arrayToRotate = [1,2,3,5,8,13,21];
console.log(rotateArray(arrayToRotate, 2));     // [13,21,1,2,3,5,8]
arrayToRotate = [1,2,3,5,8,13,21];
console.log(rotateArray(arrayToRotate, 5));     // [3,5,8,13,21,1,2]
arrayToRotate = [1,2,3,5,8,13,21];
console.log(rotateArray(arrayToRotate, 8));     // [21,1,2,3,5,8,13]
arrayToRotate = [1,2,3,5,8,13,21];
console.log(rotateArray(arrayToRotate, 7));     // [1,2,3,5,8,13,21]


// Alternate approach which swaps values instead of pushing and popping
function rotateArrayBySwapping(array, k) {
    if (k === 0 || k % array.length === 0) return array;
    let shifts = k % array.length;
    let lastIndex = array.length - 1;
    function reversePartOfArray(start, end) {
        while (start < end) {
            [array[start], array[end]] = [array[end], array[start]];
            start = start + 1;
            end = end - 1;
        }
    }
    reversePartOfArray(0, lastIndex);           // Reverse entire array
    reversePartOfArray(0, shifts - 1);          // Reverse everything before shifts (k)
    reversePartOfArray(shifts, lastIndex);      // Reverse from shifts (k) to end
    return array;
}

// Testing
let testArray = [1,2,3,5,8,13,21];
console.log(rotateArrayBySwapping(testArray, 0));     // [1,2,3,5,8,13,21]
testArray = [1,2,3,5,8,13,21];
console.log(rotateArrayBySwapping(testArray, 1));     // [21,1,2,3,5,8,13]
testArray = [1,2,3,5,8,13,21];
console.log(rotateArrayBySwapping(testArray, 2));     // [13,21,1,2,3,5,8]
testArray = [1,2,3,5,8,13,21];
console.log(rotateArrayBySwapping(testArray, 5));     // [3,5,8,13,21,1,2]
testArray = [1,2,3,5,8,13,21];
console.log(rotateArrayBySwapping(testArray, 8));     // [21,1,2,3,5,8,13]
testArray = [1,2,3,5,8,13,21];
console.log(rotateArrayBySwapping(testArray, 7));     // [1,2,3,5,8,13,21]


// Swapping in an array without explicitly creating an additional variable
let testSwapping = [2,4,6,8,10];
[testSwapping[1], testSwapping[2]] = [testSwapping[2], testSwapping[1]];
console.log(testSwapping);  // [ 2, 6, 4, 8, 10 ]
