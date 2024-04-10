/* Given an array of numbers [arr] and a number n,
 * find if the array contains two numbers whose sum is equal to n.
 * Return the two numbers from [arr] if found.
 * Return false if two such numbers not found.
 */

function checkClassicTwoSum(inputArray, sum) {
    if (inputArray.length < 2) return false;
    let visitedMap = {};
    for (let i = 0; i < inputArray.length; i = i + 1) {
        let currentNum = inputArray[i];
        let numToFind = sum - currentNum;
        if (visitedMap[numToFind]) {
            return [currentNum, numToFind];
        } else {
            visitedMap[currentNum] = true;
        }
    }
    return false;
}

let inArray = [-10, 15, -8, 0, -5, -1, 0, 2, 4, -4, 7, 12, 50, 45, 20, 20, 25];
let sumArray = [0, -12, 1, 28, -1, 7, 48, 20, 40, 63, 62, 80, -15, -10];
let doesSumExistArray = sumArray.map((element) => checkClassicTwoSum(inArray, element));
console.log(doesSumExistArray);
// [ [0,0], [-4,-8], [2,-1], false, [-1,0], [-8,15], false, [20,0], [50,-10], false, [50,12], false, [-5,-10], [0,-10] ]

function checkClassicTwoSumReturnIndex(inputArray, sum) {
    if (inputArray.length < 2) return false;
    let visitedMap = {};
    for (let i = 0; i < inputArray.length; i = i + 1) {
        let currentNum = inputArray[i];
        let numToFind = sum - currentNum;
        if (visitedMap[numToFind] || visitedMap[numToFind] === 0) {
            return [visitedMap[numToFind], i];
        } else {
            visitedMap[currentNum] = i;
        }
    }
    return false;
}

let inArrayIndex = [-10, 15, -8, 0, 2, 4, 7, 12, 20, 10];
let sumArrayIndex = [0, 7, 9, -9, 15, 19];
let doesSumExistArrayIndex = sumArrayIndex.map((element) => checkClassicTwoSumReturnIndex(inArrayIndex, element));
console.log(doesSumExistArrayIndex);
// [ [0,9], [1,2], [4,6], false, [1,3], [1,5] ]
