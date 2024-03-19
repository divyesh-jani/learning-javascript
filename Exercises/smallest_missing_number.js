// Given an array of numbers, find the smallest missing positive number from the array

function findSmallestMissing(arr) {
    let existsArr = Array(arr.length + 1).fill(false);
    existsArr[0] = true;
    for (let num of arr) {
        if (num > 0 && num <= arr.length) {
            existsArr[num] = true;
        }
    }
    let index = 1;
    while (index <= arr.length) {
        if (existsArr[index] === false) return index;
        index = index + 1;
    }
    return index;
}
// Time Complexity O(n); Space Complexity O(n)

console.log('----- Time O(n), Space O(n) -----');
console.log(findSmallestMissing([2,3,-7,6,1,-10]));                 // 4
console.log(findSmallestMissing([2,3,7,6,4,5,1,8,9]));              // 10
console.log(findSmallestMissing([-5,0,-10,5,6,0]));                 // 1
console.log(findSmallestMissing([1,2,3]));                          // 4
console.log(findSmallestMissing([]));                               // 1

function findSmallestMissingEfficiently(arr) {
    for (let i = 0; i < arr.length; i = i + 1) {
        while (arr[i] > 0 && arr[i] <= arr.length && arr[i] !== arr[arr[i] - 1]) {
            let source = i;
            let destination = arr[i] - 1;
            [arr[source], arr[destination]] = [arr[destination], arr[source]];
        }
    }
    for (let i = 0; i < arr.length; i = i + 1) {
        if (arr[i] !== i + 1) return (i + 1);
    }
    return (arr.length + 1);
}
// Time Complexity O(n); Space Complexity O(1)

console.log('----- Time O(n), Space O(1) -----');
console.log(findSmallestMissingEfficiently([2,3,-7,6,1,-10]));      // 4
console.log(findSmallestMissingEfficiently([2,3,7,6,4,5,1,8,9]));   // 10
console.log(findSmallestMissingEfficiently([-5,0,-10,5,6,0]));      // 1
console.log(findSmallestMissingEfficiently([1,2,3]));               // 4
console.log(findSmallestMissingEfficiently([]));                    // 1
