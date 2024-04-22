// Better than other sort methods since this uses divide and conquer.
// Improves time complexity to O(nlog(n)) but does not sort in place so space complexity is O(n)

function mergeSort(unsortedArray) {
    if (unsortedArray.length < 2) return unsortedArray;
    let middleIndex = Math.floor(unsortedArray.length / 2);
    let left = mergeSort(unsortedArray.slice(0, middleIndex));
    let right = mergeSort(unsortedArray.slice(middleIndex));
    return sortAndMergeHalvedArrays(left, right);
}

function sortAndMergeHalvedArrays(left, right) {
    let i = 0;
    let j = 0;
    let mergedArray = [];

    // We can do what we do to merge two sorted arrays
    while ((i + j) < (left.length + right.length)) {
        let isLeftEmpty = i === left.length;
        let isRightEmpty = j === right.length;
        if (!isLeftEmpty && (isRightEmpty || (left[i] <= right[j]))) {
            mergedArray.push(left[i]);
            i = i + 1;
        } else {
            mergedArray.push(right[j]);
            j = j + 1;
        }
    }
    return mergedArray;
}

let arrayToSort = [ 23, 5, 15, 42, 68, 50, 0, 50, 95, 64];
console.log('Unsorted array:');
console.log(arrayToSort);                   // [ 23, 5, 15, 42, 68, 50, 0, 50, 95, 64 ]
console.log('Sorted array:');
console.log(mergeSort(arrayToSort));        // [ 0, 5, 15, 23, 42, 50, 50, 64, 68, 95 ]

let arrayToSortTwo = [ 23, -5, 15, 42, 20, 68, 50, 0, 42, 50, 95, 64, 100];
console.log('Unsorted array:');
console.log(arrayToSortTwo);                // [ 23, -5, 15, 42, 20, 68, 50, 0, 42, 50, 95, 64, 100 ]
console.log('Sorted array:');
console.log(mergeSort(arrayToSortTwo));     // [ -5, 0, 15, 20, 23, 42, 42, 50, 50, 64, 68, 95, 100 ]

/* For merge sort:
 * Time complexity: O(n(log(n)))
 * Space complexity: 
 */
