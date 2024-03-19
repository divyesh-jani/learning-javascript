/* Selection Sort
 * Select the smallest element in array and swap it with first element
 * Find and select second smallest element and swap with element at second place
 * Repeat finding next smallest element and swapping until array is sorted
 */

function selectionSort(arrayToSort) {
    for (let i = 0; i < arrayToSort.length - 1; i = i + 1) {
        let smallestIndex = i;
        for (let j = i + 1; j < arrayToSort.length; j = j + 1) {
            if (arrayToSort[j] < arrayToSort[smallestIndex]) {
                smallestIndex = j;
            }
        }
        if (smallestIndex !== i) {
            swapValueByIndex(arrayToSort, smallestIndex, i);
        }
    }
    return arrayToSort;
};

function swapValueByIndex(array, sourceIndex, destIndex) {
    let destinationValue = array[destIndex];
    array[destIndex] = array[sourceIndex];
    array[sourceIndex] = destinationValue;
    // or swap values the fancy way
    // [array[sourceIndex], array[destIndex]] = [array[destIndex], array[sourceIndex]];
};

let arrayToSort = [ 23, 5, 15, 42, 68, 50, 0, 50, 95, 64];
console.log('Unsorted array:');
console.log(arrayToSort);                   // [ 23, 5, 15, 42, 68, 50, 0, 50, 95, 64 ]
console.log('Sorted array:');
console.log(selectionSort(arrayToSort));    // [ 0, 5, 15, 23, 42, 50, 50, 64, 68, 95 ]

/* For selection sort
 * Time complexity: O(n2)
 * Space complexity: O(n)
 * Number of comparisons: n(n - 1)/2
 * Sort in place: Yes
 * Stable: No
 */
