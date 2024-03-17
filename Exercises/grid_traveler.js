// Find total number of ways to travel a grid with dimensions m x n.
// You can only travel one step at a time, and only down or right.

function waysToTravel(m, n) {
    if (m === 0 || n === 0) return 0;
    if (m === 1 && n === 1) return 1;
    return waysToTravel(m - 1, n) + waysToTravel(m, n - 1);
}

console.log('----- Recursive -----');
console.log(waysToTravel(2,3));     // 3
console.log(waysToTravel(4,1));     // 1
console.log(waysToTravel(1,6));     // 1
console.log(waysToTravel(5,0));     // 0
console.log(waysToTravel(3,4));     // 10
console.log(waysToTravel(8,7));     // 1716
console.log(waysToTravel(15, 11));  // 1961256

function waysToTravelMemoized(m, n, memo = {}) {
    if (m + '-' + n in memo) return memo[m + '-' + n];
    if (n + '-' + m in memo) return memo[n + '-' + m];
    if (m === 0 || n === 0) return 0;
    if (m === 1 && n === 1) return 1;
    memo[m + '-' + n] = waysToTravelMemoized(m - 1, n, memo) + waysToTravelMemoized(m, n - 1, memo);
    return memo[m + '-' + n] || memo[n + '-' + m];
}

console.log('----- Memoized -----');
console.log(waysToTravelMemoized(2,3));     // 3
console.log(waysToTravelMemoized(4,1));     // 1
console.log(waysToTravelMemoized(1,6));     // 1
console.log(waysToTravelMemoized(5,0));     // 0
console.log(waysToTravelMemoized(3,4));     // 10
console.log(waysToTravelMemoized(8,7));     // 1716
console.log(waysToTravelMemoized(15, 11));  // 1961256
console.log(waysToTravelMemoized(25, 22));  // 3773655750150

function waysToTravelTabulated(m, n) {
    let resultArr = Array(m + 1).fill().map(() => Array(n + 1).fill(0));
    resultArr[1][1] = 1;
    for (let i = 1; i <= m; i = i + 1) {
        for (let j = 1; j <= n; j = j + 1) {
            resultArr[i][j] = resultArr[i][j] + resultArr[i - 1][j] + resultArr[i][j - 1];
        }
    }
    return resultArr[m][n];
}

console.log('----- Tabulated -----');
console.log(waysToTravelTabulated(2,3));    // 3
console.log(waysToTravelTabulated(4,1));    // 1
console.log(waysToTravelTabulated(1,6));    // 1
console.log(waysToTravelTabulated(5,0));    // 0
console.log(waysToTravelTabulated(3,4));    // 10
console.log(waysToTravelTabulated(8,7));    // 1716
console.log(waysToTravelTabulated(15, 11)); // 1961256
console.log(waysToTravelTabulated(25, 22)); // 3773655750150
