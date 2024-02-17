/* Quick Sort
 * Select any pivot element, seperate elements that are greater than and less than pivot
 * and repeat the process until one or fewer elements remain.
 * Now rebuild the array, from left element to pivot to right for every recursive split
 */

function quickSort(arrayToSort) {
    if (arrayToSort.length < 2) return arrayToSort;
    let pivotElement = arrayToSort[arrayToSort.length - 1];
    let leftArr = [];
    let rightArr = [];
    for (let i = 0; i < arrayToSort.length - 1; i = i + 1) {
        arrayToSort[i] < pivotElement ? leftArr.push(arrayToSort[i]) : rightArr.push(arrayToSort[i]);
    }
    // return quickSort(leftArr).concat(pivotElement, quickSort(rightArr));
    // or use spread operator to concat
    return [...quickSort(leftArr), pivotElement, ...quickSort(rightArr)];
};

let arrayToSort = [ 23, 5, 15, 42, 68, 50, 0, 50, 95, 64];
console.log('Unsorted array:');
console.log(arrayToSort);                   // [ 23, 5, 15, 42, 68, 50, 0, 50, 95, 64 ]
console.log('Sorted array:');
console.log(quickSort(arrayToSort));        // [ 0, 5, 15, 23, 42, 50, 50, 64, 68, 95 ]

/* For quick sort:
 * Time complexity: worst case: O(n2), average O(n(log(n)))
 * Space complexity: 
 */
