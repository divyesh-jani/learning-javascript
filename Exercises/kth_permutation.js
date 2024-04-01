/*
 * Find kth permutation from the list of all permutations of given consecutive numbers
 * Eg. for n = 3, and k = 4; result should be [2,3,1]
 * Explanation: n = 3 so numbers to use: 1, 2, 3.
 * Possible permutations in sequence: [1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]
 * Result is [2,3,1] since that is 4th permutation
 */

function getKthPermutation(n, k) {
    let allNumbers = [];
    let result = [];
    let totalPermutations = 1;
    for (let i = 1; i <= n; i = i + 1) {
        allNumbers.push(i);
        totalPermutations = totalPermutations * i;
    }
    k = k - 1;
    while (result.length < n) {
        let intervalLength = totalPermutations / allNumbers.length;
        let useInterval = Math.floor(k / intervalLength);
        totalPermutations = intervalLength;
        k = k % intervalLength;
        result.push(allNumbers[useInterval]);
        allNumbers.splice(useInterval, 1);
        if (allNumbers.length === 1) {
            result.push(allNumbers.pop());
        }
    }
    return result;
}

console.log(getKthPermutation(3, 4));       // [ 2, 3, 1 ]
console.log(getKthPermutation(4, 17));      // [ 3, 4, 1, 2 ]
