/* Bubble Sort
 * Traverse through the list, compare adjacent values,
 * and swap them if they aren't in order
 * (large values bubble to top when sorting in ascending order)
 * Keep comparing and swapping until no more swapping is needed
 */

function bubbleSort(arrayToSort) {
    let sorted = false;
    while (!sorted) {
        sorted = true;
        let arrayLength = arrayToSort.length - 1;
        for (let i = 0; i < arrayLength; i = i + 1) {
            if (arrayToSort[i + 1] < arrayToSort[i]) {
                swapValueByIndex(arrayToSort, i + 1, i);
                sorted = false;
            }
        }
        arrayLength = arrayLength - 1; // because last element is sorted after each iteration, so no need to go over it again
    }
    return arrayToSort;
}

function swapValueByIndex(array, sourceIndex, destIndex) {
    [array[sourceIndex], array[destIndex]] = [array[destIndex], array[sourceIndex]];
    // or swap values the tradtitional way
    // let destinationValue = array[destIndex];
    // array[destIndex] = array[sourceIndex];
    // array[sourceIndex] = destinationValue;
}

let arrayToSort = [ 23, 5, 15, 42, 68, 50, 0, 50, 95, 64];
console.log('Unsorted array:');
console.log(arrayToSort);                   // [ 23, 5, 15, 42, 68, 50, 0, 50, 95, 64 ]
console.log('Sorted array:');
console.log(bubbleSort(arrayToSort));       // [ 0, 5, 15, 23, 42, 50, 50, 64, 68, 95 ]

/* For bubble sort
 * Time complexity: O(n2)
 * Space complexity: O(1)
 * Number of comparisons: 
 * Sort in place: 
 * Stable: Yes
 */

// Alternate approach
function bubbleSortAgain(arrayToSort) {
    for (let i = 0; i < arrayToSort.length - 1; i = i + 1) {    // can be arrayToSort.length but last element won't do anything because of next loop
        for (let j = 0; j < arrayToSort.length - 1 - i; j = j + 1) { // -i only so we do not go over already sorted last numbers, fewer iterations
            if (arrayToSort[j + 1] < arrayToSort[j]) {
                swapValueByIndex(arrayToSort, j + 1, j);
            }
        }
    }
    return arrayToSort;
}

let anotherArray = [ 23, 5, 15, 42, 68, 50, 0, 50, 95, 64];
console.log('Unsorted array:');
console.log(anotherArray);                      // [ 23, 5, 15, 42, 68, 50, 0, 50, 95, 64 ]
console.log('Sorted array:');
console.log(bubbleSortAgain(anotherArray));     // [ 0, 5, 15, 23, 42, 50, 50, 64, 68, 95 ]
