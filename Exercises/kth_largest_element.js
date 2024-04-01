// Given an array of integers arr, and an integer k, find *UNIQUE* kth largest element.

function getLargest(arr, k) {
    arr.sort();
    if (k === 1) return arr.pop();
    // In a sorted array, largest k value will be kth unique pop
    // for k = 1, first pop is what we're looking for since it'll be unique
    // for k = 4, pop 3 unique numbers and 4th unique pop should be our result
    let lastPopped;
    let totalUniquePops = 0;
    while (totalUniquePops < k && arr.length > 0) {
        let popped = arr.pop();
        if (popped !== lastPopped) {
            lastPopped = popped;
            totalUniquePops = totalUniquePops + 1;
        }
    }
    return totalUniquePops === k ? lastPopped : null; // return null if we weren't able to get to k pops
}

function testGetLargest(k) {
    let arrayOne = [2,6,5,8,5,4,6,2,5,9,8,2,1,5,2,1,5]; // Sorted: // [ 1, 1, 2, 2, 2, 2, 4, 5, 5, 5, 5, 5, 6, 6, 8, 8, 9 ]
    return getLargest(arrayOne, k);
}

console.log(testGetLargest(1)); // 9
console.log(testGetLargest(2)); // 8
console.log(testGetLargest(3)); // 6
console.log(testGetLargest(4)); // 5
console.log(testGetLargest(5)); // 4
console.log(testGetLargest(6)); // 2
console.log(testGetLargest(7)); // 1
console.log(testGetLargest(8)); // null


// Given an array of integers arr, and an integer k, find kth largest element - does not have to be unique.

function getLargestKth (arr, k) {
    arr.sort();
    // if arr length is 10, index 0 to 9, 1st largest will be at index 9 (length - 1); 3rd largest will be at 7 (length - 3)
    return arr.length >= k ? arr[arr.length - k] : null;
}

function testGetLargestNonUnique(k) {
    let arrayOne = [2,6,5,8,5,4,6,2,5,9,8,2,1,5,2,1,5]; // Sorted: // [ 1, 1, 2, 2, 2, 2, 4, 5, 5, 5, 5, 5, 6, 6, 8, 8, 9 ]
    return getLargestKth(arrayOne, k);
}

console.log(testGetLargestNonUnique(1));    // 9
console.log(testGetLargestNonUnique(2));    // 8
console.log(testGetLargestNonUnique(5));    // 6
console.log(testGetLargestNonUnique(8));    // 5
console.log(testGetLargestNonUnique(10));   // 5
console.log(testGetLargestNonUnique(11));   // 4
console.log(testGetLargestNonUnique(12));   // 2
console.log(testGetLargestNonUnique(17));   // 1
console.log(testGetLargestNonUnique(18));   // null
console.log(testGetLargestNonUnique(19));   // null
