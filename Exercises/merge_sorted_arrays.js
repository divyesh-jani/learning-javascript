// Merge two sorted arrays and return merged array

function mergeSortedArrays(arrayOne, arrayTwo) {
    if (!arrayOne || !arrayOne.length) {
        return arrayTwo;
    }
    if (!arrayTwo || !arrayTwo.length) {
        return arrayOne;
    }
    let mergedArray = [];
    let i = 0;
    let j = 0;
    let current = 0;
    while (current < (arrayOne.length + arrayTwo.length)) {
        const isOneEmpty = i === arrayOne.length;
        const isTwoEmpty = j === arrayTwo.length;

        if (!isOneEmpty && (isTwoEmpty || (arrayOne[i] < arrayTwo[j]))) {
            mergedArray[current] = arrayOne[i];
            i = i + 1;
        } else {
            mergedArray[current] = arrayTwo[j];
            j = j + 1;
        }
        current = current + 1;
    }
    return mergedArray;
}

function mergeSortedArraysOptimized(arrayOne, arrayTwo) {
    if (!arrayOne || !arrayOne.length) {
        return arrayTwo;
    }
    if (!arrayTwo || !arrayTwo.length) {
        return arrayOne;
    }
    let mergedArray = [];
    let i = 0;
    let j = 0;
    while ((i + j) < (arrayOne.length + arrayTwo.length)) {
        if ((i < arrayOne.length) && ((j >= arrayTwo.length) || (arrayOne[i] < arrayTwo[j]))) {
            mergedArray.push(arrayOne[i]);
            i = i + 1;
        } else {
            mergedArray.push(arrayTwo[j]);
            j = j + 1;
        }
    }
    return mergedArray;
}

let aOne = [-3, 0, 2, 2, 5];
let aTwo = [1, 1, 8];
console.log(mergeSortedArrays(aOne, aTwo));
// [ -3, 0, 1, 1, 2, 2, 5, 8 ]
console.log(mergeSortedArraysOptimized(aOne, aTwo));
// [ -3, 0, 1, 1, 2, 2, 5, 8 ]

let aThree = [2, 5, 6, 12];
let aFour = [0, 2, 8, 10, 15, 20, 25];
console.log(mergeSortedArrays(aThree, aFour));
// [ 0, 2, 2, 5, 6, 8, 10, 12, 15, 20, 25 ]
console.log(mergeSortedArraysOptimized(aThree, aFour));
// [ 0, 2, 2, 5, 6, 8, 10, 12, 15, 20, 25 ]

let aFive = [2, 5, 6, 12];
let aSix = [];
console.log(mergeSortedArrays(aFive, aSix));
// [ 2, 5, 6, 12 ]
console.log(mergeSortedArraysOptimized(aFive, aSix));
// [ 2, 5, 6, 12 ]

let aSeven = null;
let aEight = [0, 2, 8, 10, 15, 20, 25];
console.log(mergeSortedArrays(aSeven, aEight));
// [ 0, 2, 8, 10, 15, 20, 25 ]
console.log(mergeSortedArraysOptimized(aSeven, aEight));
// [ 0, 2, 8, 10, 15, 20, 25 ]

let aNine = [];
let aTen = [];
console.log(mergeSortedArrays(aNine, aTen));
// []
console.log(mergeSortedArraysOptimized(aNine, aTen));
// []
