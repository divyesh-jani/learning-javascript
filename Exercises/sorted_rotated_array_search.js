// Search in a sorted, rotated array in O(log(n)) time

function searchInSortedRotated(arr, target) {
    if (!arr || !arr.length) return -1;
    let startIndex = 0;
    let endIndex = arr.length - 1;
    while (startIndex <= endIndex) {
        let midIndex = Math.floor((startIndex + endIndex)/2);
        if (arr[midIndex] === target) return midIndex;
        if (arr[midIndex] > arr[startIndex]) {
            if (target >= arr[startIndex] && target < arr[midIndex]) {
                endIndex = midIndex - 1;
            } else {
                startIndex = midIndex + 1;
            }
        } else {
            if (target > arr[midIndex] && target <= arr[endIndex]) {
                startIndex = midIndex + 1;
            } else {
                endIndex = midIndex - 1;
            }
        }
    }
    return -1;
}

console.log(searchInSortedRotated([4,5,6,7,0,1,2], 1)); // 5
console.log(searchInSortedRotated([4,5,6,7,0,1,2], 5)); // 1
console.log(searchInSortedRotated([4,5,6,7,0,1,2], 3)); // -1
console.log(searchInSortedRotated([0,1,2,4,5,6,7], 4)); // 3
console.log(searchInSortedRotated([1], 0)); // -1
console.log(searchInSortedRotated([1], 1)); // 0
