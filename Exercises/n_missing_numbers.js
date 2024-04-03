// Given a sorted array of numbers, find n missing numbers after the first number in array
// Eg. input = [2,4,6,7], n = 2 => [3, 5]

function getNMissingNumbers(nums, n) {
    let expected = nums[0] + 1;
    let missingNums = [];
    for (let i = 1; i < nums.length; i = i + 1) {
        while (nums[i] !== expected) {
            missingNums.push(expected);
            expected = expected + 1;
            if (missingNums.length === n) {
                return missingNums;
            }
        }
        expected = expected + 1;
    }
    while (missingNums.length < n) {
        missingNums.push(expected);
        expected = expected + 1;
    }
    return missingNums;
}

console.log(getNMissingNumbers([2,4,6,7], 2));              // [3, 5]
console.log(getNMissingNumbers([100,104,105,106,110], 5));  // [101, 102, 103, 107, 108]
console.log(getNMissingNumbers([46,47,48,50,500], 4));      // [49, 51, 52, 53]
console.log(getNMissingNumbers([4,6,8], 5));                // [ 5, 7, 9, 10, 11 ]
