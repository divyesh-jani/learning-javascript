/* Given four arrays A, B, C, and D, and a number n,
 * find if the arrays contain numbers such that
 * the sum of a number from each array is equal to n.
 * Return the total of all such possible combinations 
 * along with indices of elements from each array that sum to n.
 */

// Brute force approach, Time O(n^4) Space O(1)
function sumOFFour(arrA, arrB, arrC, arrD, target) {
    let possibleCombinations = 0;
    let combinations = [];
    for (let i = 0; i < arrA.length; i = i + 1) {
        for (let j = 0; j < arrB.length; j = j + 1) {
            for (let k = 0; k < arrC.length; k = k + 1) {
                for (let l = 0; l < arrD.length; l = l + 1) {
                    if (arrA[i] + arrB[j] + arrC[k] + arrD[l] === target) {
                        combinations.push([i, j, k, l]);
                        possibleCombinations = possibleCombinations + 1;
                    }
                }
            }
        }
    }
    return { possibleCombinations, combinations };
}

// Much better time, O(n^2) compromising on space O(n^2)
function sumOFFourOptimized(arrA, arrB, arrC, arrD, target) {
    let possibleCombinations = 0;
    let combinations = [];
    let firstTwoMap = {};
    for (let i = 0; i < arrA.length; i = i + 1) {
        for (let j = 0; j < arrB.length; j = j + 1) {
            let sum = arrA[i] + arrB[j];
            if (firstTwoMap[sum]) {
                firstTwoMap[sum][0] = firstTwoMap[sum][0] + 1;
                firstTwoMap[sum][1].push([i, j]);
            } else {
                firstTwoMap[sum] = [1, [[i, j]]];
            }
        }
    }
    for (let k = 0; k < arrC.length; k = k + 1) {
        for (let l = 0; l < arrD.length; l = l + 1) {
            let sum = arrC[k] + arrD[l];
            let difference = target - sum;
            if (firstTwoMap[difference]) {
                possibleCombinations = possibleCombinations + firstTwoMap[difference][0];
                for (let combination of firstTwoMap[difference][1]) {
                    combinations.push([...combination, k, l]);
                }
            }
        }
    }
    return { possibleCombinations, combinations };
}

let A = [0, 3, 5];
let B = [1, 2, 3, 4];
let C = [-5, 0, 5];
let D = [-8, -6, 6];
console.log(sumOFFour(A, B, C, D, 0));              // 5
console.log(sumOFFourOptimized(A, B, C, D, 0));     // 5
console.log(sumOFFour(A, B, C, D, 10));             // 3
console.log(sumOFFourOptimized(A, B, C, D, 10));    // 3
