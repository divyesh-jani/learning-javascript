// Given a sorted array of numbers, find n missing numbers after the first number in array
// Eg. input = [2,4,6,7], n = 2 => [3, 5]

function getNMissingNumbers(nums, n) {
    let missingNums = [];
    let lastNum = nums[0];
    let i = 1;
    while (missingNums.length < n && i < nums.length) {
        while (missingNums.length < n && nums[i] !== lastNum + 1) {
            missingNums.push(lastNum + 1);
            lastNum = lastNum + 1;
        }
        lastNum = nums[i];
        i = i + 1;
    }
    return missingNums;
}

console.log(getNMissingNumbers([2,4,6,7], 2));              // [3, 5]
console.log(getNMissingNumbers([100,104,105,106,110], 5));  // [101, 102, 103, 107, 108]
console.log(getNMissingNumbers([46,47,48,50,500], 4));      // [49, 51, 52, 53]
