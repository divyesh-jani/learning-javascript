// Given an array of integers, determine the number of different pairs of elements within it which sum to given number

function numberOfWays(arr, sum) {
    // Better approach, to achieve O(n) time
    let hashMap = {};
    let count = 0;
    for (let i = 0; i < arr.length; i = i + 1) {
        let difference = sum - arr[i];
        if (hashMap[difference]) {
            count = count + hashMap[difference]; // Important, add all counts (not just 1)
            hashMap[difference] = hashMap[difference] + 1; // Important, add count for repeating numbers
        } else {
            hashMap[arr[i]] = 1;
        }
    }
    return count;
}

function numberOfWaysBruteForce(arr, sum) {
    // O(n2) time but gets the job done
    let count = 0;
    for (let i = 0; i < arr.length; i = i + 1) {
        for (let j = i + 1; j < arr.length; j = j + 1) {
            if (arr[i] + arr[j] === sum) count = count + 1;
        }
    }
    return count;
}

// Testing
let inputOne = [1, 2, 3, 4, 3];
let total = 6;
var expectedOne = 2;
// console.log(numberOfWays(inputOne, total));     // 2
let inputTwo = [1, 5, 3, 3, 3];
var expectedTwo = 4;
// console.log(numberOfWays(inputTwo, total));     // 4
let inputThree = [1, 3, 3, 3, 3, 5];
var expectedOne = 7;
// console.log(numberOfWays(inputThree, total));   // 7


let consolidatedInputsAndExpected = [
    [[1, 2, 3, 4, 3], 6, 2],
    [[1, 5, 3, 3, 3], 6, 4],
    [[1, 3, 3, 3, 3, 5], 6, 7]
];

// [ 2, 4, 7 ]
console.log(consolidatedInputsAndExpected.map(input => numberOfWays(input[0], input[1])));

// [ true, true, true ]
console.log(consolidatedInputsAndExpected.map(input => numberOfWaysBruteForce(input[0], input[1]) === input[2]));
