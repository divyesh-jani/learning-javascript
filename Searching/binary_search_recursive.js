// Use recursion in binary search

function recursiveBinarySearch(array, element, start, end) {
    if (array.length === 0) return -1;
    if (!start) start = 0;
    if (!end) end = array.length - 1;
    if (start > end) return -1;
    let middle = Math.floor((start + end)/2);
    if (array[middle] === element) return middle;
    if (array[middle] > element) {
        end = middle - 1;
    } else {
        start = middle + 1;
    }
    return recursiveBinarySearch(array, element, start, end);
}

let arrayToSearch = [0, 4, 10, 12, 15, 15, 24, 30, 30, 30, 40, 50];
let searchForElements = [0, 10, 15, 24, 30, 40, 50, -2, 20, 45, 55];
// [0, 2, 5, 6, 8, 10, 11, -1, -1, -1, -1]
let resultArray = searchForElements.map((a) => recursiveBinarySearch(arrayToSearch, a));
console.log(resultArray);
