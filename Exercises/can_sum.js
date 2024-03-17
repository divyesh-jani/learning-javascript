
function canSum(target, arr) {
    if (target === 0) return true;
    if (target < 0) return false;
    for (let amount of arr) {
        let remainingTarget = target - amount;
        if (canSum(remainingTarget, arr)) return true;
    }
    return false;
}

console.log('----- Recursive -----');
console.log(canSum(7, [2,3,4,7]));      // true
console.log(canSum(7, [2,3,4]));        // true
console.log(canSum(16, [2,3,4,7]));     // true
console.log(canSum(7, [2,3]));          // true
console.log(canSum(7, [2,4]));          // false
console.log(canSum(250, [7,14]))        // false

function canSumMemoized(target, arr, memo = {}) {
    if (target in memo) return memo[target];
    if (target === 0) return true;
    if (target < 0) return false;
    for (let amount of arr) {
        let remainingTarget = target - amount;
        if (canSumMemoized(remainingTarget, arr, memo)) {
            memo[target] = true;
            return memo[target];
        }
    }
    memo[target] = false;
    return memo[target];
}

console.log('----- Memoized -----');
console.log(canSumMemoized(7, [2,3,4,7]));   // true
console.log(canSumMemoized(7, [2,3,4]));     // true
console.log(canSumMemoized(16, [2,3,4,7]));  // true
console.log(canSumMemoized(7, [2,3]));       // true
console.log(canSumMemoized(7, [2,4]));       // false
console.log(canSumMemoized(355, [7,14]))     // false

function canSumTabulate(target, nums) {
    let resultArr = Array(target + 1).fill(false);
    resultArr[0] = true;
    for (let i = 0; i <= target; i = i + 1) {
        if (resultArr[i]) {
            for (let j = 0; j < nums.length; j = j + 1) {
                let nextIndex = i + nums[j];
                resultArr[nextIndex] = true;
            }
        }
    }
    return resultArr[target];
}

console.log('----- Tabulated txn -----');
console.log(canSumTabulate(7, [2,3,4,7]));  // true
console.log(canSumTabulate(7, [2,3,4]));    // true
console.log(canSumTabulate(16, [2,3,4,7])); // true
console.log(canSumTabulate(7, [2,3]));      // true
console.log(canSumTabulate(7, [2,4]));      // false
console.log(canSumTabulate(355, [7,14]))    // false

function canSumTabulateMM(target, nums) {
    let resultArr = Array(target + 1).fill(false);
    resultArr[0] = true;
    for (let num of nums) {
        for (let j = num; j <= target; j = j + 1) {
            resultArr[j] = resultArr[j] || resultArr[j - num];
        }
    }
    return resultArr[target];
}

console.log('----- Tabulated nxt -----');
console.log(canSumTabulateMM(7, [2,3,4,7]));    // true
console.log(canSumTabulateMM(7, [2,3,4]));      // true
console.log(canSumTabulateMM(16, [2,3,4,7]));   // true
console.log(canSumTabulateMM(7, [2,3]));        // true
console.log(canSumTabulateMM(7, [2,4]));        // false
console.log(canSumTabulateMM(355, [7,14]))      // false
