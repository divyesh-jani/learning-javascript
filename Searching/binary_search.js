// Much faster than linear search, but only works for sorted arrays!

function binarySearch(array, value) {
    if (array.length === 0) return false;
    let start = 0;
    let end = array.length - 1;
    let middle = Math.floor((start + end) / 2);
    while (array[middle] !== value && start <= end) {
        if (array[middle] > value) {    // our value is in first half
            end = middle - 1;
        } else {                        // our value is in second half
            start = middle + 1;
        }
        middle = Math.floor((start + end) / 2);
    }
    return array[middle] === value ? true : false;
}

let arrayToSearch = [0, 4, 10, 12, 15, 15, 24, 30, 30, 30, 40, 50];
let searchForElements = [-2,0,1,4,5,10,11,12,14,15,20,24,25,29,30,35,40,45,50,55,60,65,70];
console.log('Array length: ' + arrayToSearch.length);      // Array length: 12
let resultArrayEven = searchForElements.map((a) => binarySearch(arrayToSearch, a));
console.log(resultArrayEven);
// [ f, t, f, t, f, t, f, t, f, t, f, t, f, f, t, f, t, f, t, f, f ,f ,f ]
arrayToSearch.push(60);
console.log('Inserted 60');                         // Inserted 60
console.log('Array length: ' + arrayToSearch.length);      // Array length: 13
let resultArrayOdd = searchForElements.map((a) => binarySearch(arrayToSearch, a));
console.log(resultArrayOdd);
// [ f, t, f, t, f, t, f, t, f, t, f, t, f, f, t, f, t, f, t, f, t, f ,f ]

// Same binary search with simplified while condition

function binarySearchTwo(array, value) {
    if (array.length === 0) return false;
    let start = 0;
    let end = array.length - 1;
    while (start <= end) {
        let middle = Math.floor((start + end) / 2);
        if (array[middle] === value) {
            return true;
        } else if (array[middle] > value) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
    }
    return false;
}

let arrayToSearchTwo = [0, 4, 10, 12, 15, 15, 24, 30, 30, 30, 40, 50];
let searchForElementsTwo = [-2,0,1,4,5,10,11,12,14,15,20,24,25,29,30,35,40,45,50,55,60,65,70];
console.log('Array length: ' + arrayToSearchTwo.length);      // Array length: 12
let resultArrayEvenTwo = searchForElementsTwo.map((a) => binarySearchTwo(arrayToSearchTwo, a));
console.log(resultArrayEvenTwo);
// [ f, t, f, t, f, t, f, t, f, t, f, t, f, f, t, f, t, f, t, f, f ,f ,f ]
arrayToSearchTwo.push(60);
console.log('Inserted 60');                         // Inserted 60
console.log('Array length: ' + arrayToSearchTwo.length);      // Array length: 13
let resultArrayOddTwo = searchForElementsTwo.map((a) => binarySearchTwo(arrayToSearchTwo, a));
console.log(resultArrayOddTwo);
// [ f, t, f, t, f, t, f, t, f, t, f, t, f, f, t, f, t, f, t, f, t, f ,f ]

function getIndexUsingBinarySearch(array, value) {
    if (array.length === 0) return -1;
    let start = 0;
    let end = array.length - 1;
    while (start <= end) {
        let middle = Math.floor((start + end)/2);
        if (array[middle] === value) {
            return middle;
        } else if (array[middle] < value) {
            start = middle + 1;
        } else {
            end = middle - 1;
        }
    }
    return -1;
}

let arrayToSearchThree = [0, 4, 10, 12, 15, 15, 24, 30, 30, 30, 40, 50];
let searchForElementsThree = [0, 10, 15, 24, 30, 40, 50, -2, 20, 45, 55]; // [0, 2, 5, 6, 8, 10, 11, -1, -1, -1, -1]
let resultArrayOfIndexes = searchForElementsThree.map((a) => getIndexUsingBinarySearch(arrayToSearchThree, a));
console.log(resultArrayOfIndexes);
