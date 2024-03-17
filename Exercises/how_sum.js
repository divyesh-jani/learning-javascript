
function howSum(target, arr) {
    let allCombinations = [];
    function getCombination(target, arr, combination) {
        if (target === 0) {
            allCombinations.push(combination);
            return;
        }
        if (target < 0) return;
        for (const num of arr) {
            getCombination(target - num, arr, [...combination, num]);
        }
    }
    getCombination(target, arr, []);
    return allCombinations;
}

console.log(howSum(6, [2, 3]));     // [ [ 2, 2, 2 ], [ 3, 3 ] ]
console.log(howSum(7, [2,3]));      // [ [ 2, 2, 3 ], [ 2, 3, 2 ], [ 3, 2, 2 ] ]
console.log(howSum(7, [2,3,4,7]));  // [ [ 2, 2, 3 ], [ 2, 3, 2 ], [ 3, 2, 2 ], [ 3, 4 ], [ 4, 3 ], [ 7 ] ]
console.log(howSum(7, [2,4]));      // []
console.log(howSum(250, [7,14]));   // []

function howSumTabulated(target, arr) {
    const resultArr = new Array(target + 1).fill().map(() => []);
    resultArr[0] = [[]];
    for (const candidate of arr) {
        for (let i = candidate; i <= target; i = i + 1) {
            for (const combination of resultArr[i - candidate]) {
                resultArr[i].push([...combination, candidate]);
            }
        }
    }
    return resultArr[target];
}

console.log(howSumTabulated(6, [2, 3]));     // [ [ 2, 2, 2 ], [ 3, 3 ] ]
console.log(howSumTabulated(7, [2,3]));      // [ [ 2, 2, 3 ] ]
console.log(howSumTabulated(7, [2,3,4,7]));  // [ [ 2, 2, 3 ], [ 3, 4 ], [ 7 ] ]
console.log(howSumTabulated(7, [2,4]));      // []
console.log(howSumTabulated(300, [7,14]));   // []
