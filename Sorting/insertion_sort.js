/* Insertion Sort
 * Select the smallest element in array and swap it with first element
 * Find and select second smallest element and swap with element at second place
 * Repeat finding next smallest element and swapping until array is sorted
 */

function insertionSort(arrayToSort) {
    return arrayToSort;
};

let arrayToSort = [ 23, 5, 15, 42, 68, 50, 0, 50, 95, 64];
console.log('Unsorted array:');
console.log(arrayToSort);                   // [ 23, 5, 15, 42, 68, 50, 0, 50, 95, 64 ]
console.log('Sorted array:');
console.log(insertionSort(arrayToSort));    // [ 0, 5, 15, 23, 42, 50, 50, 64, 68, 95 ]

/* For insertion sort
 * Time complexity: O(n2)
 * Space complexity: O(1)
 * Number of comparisons: 
 * Sort in place: Yes
 * Stable: Yes
 */