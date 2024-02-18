// Given a sorted array of integers arr, and an integer target, find the first and last position of target in arr.
// Return [-1, -1] if element cannot be found

// Generally best result time with binary search, but on testing 'findFirstAndLast' turns out more efficient
function findFirstAndLastBinarySearch(arr, target) {
    let targetLocation = [-1, -1];
    if (!arr && arr.length === 0) return targetLocation;
    let foundIndex = _binarySearchTarget(arr, target);
    if (foundIndex === -1) return targetLocation;
    let maxIndex = foundIndex;
    while (arr[maxIndex] === target) {  // when maxIndex goes out of bounds, arr[maxIndex] will be undefined
        targetLocation[1] = maxIndex;   // so not necessary but can check for (maxIndex <= arr.length - 1)
        maxIndex = maxIndex + 1;
    }
    let minIndex = foundIndex;
    while (arr[minIndex] === target) {  // when minIndex goes out of bounds, arr[minIndex] will be undefined
        targetLocation[0] = minIndex;   // so loop won't go forever but can check (minIndex >= 0)
        minIndex = minIndex - 1;
    }
    return targetLocation;
}

// binary search helper function
function _binarySearchTarget(arr, target) {
    let startIndex = 0;
    let endIndex = arr.length - 1;
    while (startIndex <= endIndex) {
        let middleIndex = Math.floor((startIndex + endIndex) / 2);
        if (arr[middleIndex] === target) {
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
console.log(findFirstAndLastBinarySearch(arrayOne, targetOne));    // [ 2, 6 ]

function findUsingBinaryOptimized(arr, target) {
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
        if (arr[middleIndex] === target && arr[middleIndex - 1] < target) { // Important, not only equal but is this smallest?
            return middleIndex;
        } else if (arr[middleIndex] >= target) { // Important, also check for equals
            endIndex = middleIndex - 1;
        } else {
            startIndex = middleIndex + 1;
        }
    }
    return -1;
}

function _findBinaryMax(arr, target) {
    let startIndex = 0;
    let endIndex = arr.length - 1;
    while (startIndex <= endIndex) {
        let middleIndex = Math.floor((startIndex + endIndex) / 2);
        if (arr[middleIndex] === target && arr[middleIndex + 1] > target) { // Important, not only equal but is this largest?
            return middleIndex;
        } else if (arr[middleIndex] > target) { // Important, equal case shouldn't go here since we need second half of arr
            endIndex = middleIndex - 1;
        } else {                                // if arr[middle] is equal or less, we need to search for max in second half
            startIndex = middleIndex + 1;
        }
    }
    return -1;
}

console.log(findUsingBinaryOptimized(arrayOne, targetOne));    // [ 2, 6 ]

// Very good approach, time complexity O(n) space complexity O(1)
// May or may not be as fast as binary search buy certainly be faster if elements are at beginning of array
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