// Given a sorted array of integers arr, and an integer target, find the first and last position of target in arr.
// Return [-1, -1] if element cannot be found

// Generally best time complexity (O(log(n))) with binary search, but on testing 'findFirstAndLast' turns out more efficient on very small arrays
function findUsingBinarySearch(arr, target) {
    let targetLocation = [-1, -1];
    if (!arr && arr.length === 0) return targetLocation;
    let minIndex = _findBinaryMin(arr, target);
    let maxIndex;
    if (minIndex !== -1) {
        maxIndex = _findBinaryMax(arr, target);
    } else {
        maxIndex = minIndex;
    }
    return [minIndex, maxIndex];
}

function _findBinaryMin(arr, target) {
    let startIndex = 0;
    let endIndex = arr.length - 1;
    while (startIndex <= endIndex) {
        let middleIndex = Math.floor((startIndex + endIndex) / 2);
        if (arr[middleIndex] === target && (middleIndex === 0 || arr[middleIndex - 1] < target)) {
            return middleIndex;
        } else if (arr[middleIndex] < target) {
            startIndex = middleIndex + 1;
        } else {
            endIndex = middleIndex - 1;
        }
    }
    return -1;
}

function _findBinaryMax(arr, target) {
    let startIndex = 0;
    let endIndex = arr.length - 1;
    while (startIndex <= endIndex) {
        let middleIndex = Math.floor((startIndex + endIndex) / 2);
        if (arr[middleIndex] === target && (middleIndex === arr.length - 1 || arr[middleIndex + 1] > target)) {
            return middleIndex;
        } else if (arr[middleIndex] > target) {
            endIndex = middleIndex - 1;
        } else {
            startIndex = middleIndex + 1;
        }
    }
    return -1;
}

let arrayOne = [2,4,5,5,5,5,5,7,9,9];
let targetOne = 5;
console.log(findUsingBinarySearch(arrayOne, targetOne));    // [ 2, 6 ]

// Time complexity O(n) space complexity O(1)
// May or may not be as fast as binary search but certainly faster if elements are at beginning of array
function findFirstAndLast(arr, target) {
    let targetLocation = [-1, -1];
    if (!arr && arr.length === 0) return targetLocation;
    let startIndex = 0;
    while (startIndex < arr.length) {
        if (arr[startIndex] === target) {
            targetLocation[0] = startIndex;
            targetLocation[1] = startIndex;
            startIndex = startIndex + 1;
            break;
        }
        startIndex = startIndex + 1;
    }
    while (startIndex < arr.length) {
        if (arr[startIndex] !== target) {
            targetLocation[1] = startIndex - 1;
            break;
        }
        startIndex = startIndex + 1;
    }
    return targetLocation;
};

console.log(findFirstAndLast(arrayOne, targetOne));    // [ 2, 6 ]

// Can be done the following way but inefficient since we're not utilizing the fact that array is sorted
function findFirstAndLastIndex(arr, target) {
    let targetLocation = [-1, -1];
    if (!arr && arr.length === 0) return targetLocation;
    let firstFound = false;
    let lastFound = false;
    let i = 0;
    let j = arr.length - 1;
    while (i <= j) {
        if (!firstFound && arr[i] === target) {
            targetLocation[0] = i;
            firstFound = true;
        }
        if (!lastFound && arr[j] === target) {
            targetLocation[1] = j;
            lastFound = true;
        }
        if (firstFound && lastFound) break;
        if (!firstFound) i = i + 1;
        if (!lastFound) j = j - 1;
        if (i > j) {
            if (!firstFound && !lastFound) { // element not found in left or right
                return targetLocation;
            } else if (!lastFound) {    // element not found in right
                return [targetLocation[0], targetLocation[0]];
            } else {                    // element not found in left
                return [targetLocation[1], targetLocation[1]];
            }
        }
    }
    return targetLocation;
}

console.log(findFirstAndLastIndex(arrayOne, targetOne));    // [ 2, 6 ]
