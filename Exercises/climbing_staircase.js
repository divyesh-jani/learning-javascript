// Given the staircase of n steps, count the number of distinct ways to climb to the top
// You can only climb one or two steps at a time

function waysToClimbStaircase(n) {
    if (n < 3) return n;
    return (waysToClimbStaircase(n - 1) + waysToClimbStaircase(n - 2));
}

console.log(waysToClimbStaircase(1));       // 1
console.log(waysToClimbStaircase(2));       // 2
console.log(waysToClimbStaircase(3));       // 3
console.log(waysToClimbStaircase(5));       // 8
console.log(waysToClimbStaircase(12));      // 233
console.log(waysToClimbStaircase(10));      // 89
console.log(waysToClimbStaircase(8));       // 34


// Iterative solution and caching

// Given the staircase of n steps, count the number of distinct ways to climb to the top
// You can only climb one or two steps at a time

function waysToClimbStaircaseTwo(n) {
    let waysToClimb = [1, 2];
    for (let i = 2; i < n; i = i + 1) {
        waysToClimb[i] = waysToClimb[i - 1] + waysToClimb[i - 2];
    }
    return waysToClimb[n - 1];
}

console.log(waysToClimbStaircaseTwo(1));       // 1
console.log(waysToClimbStaircaseTwo(2));       // 2
console.log(waysToClimbStaircaseTwo(3));       // 3
console.log(waysToClimbStaircaseTwo(5));       // 8
console.log(waysToClimbStaircaseTwo(12));      // 233
console.log(waysToClimbStaircaseTwo(10));      // 89
console.log(waysToClimbStaircaseTwo(8));       // 34
