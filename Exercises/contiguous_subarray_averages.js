// Given an array, find the average of all contiguous subarrays of size k in it.

function getAveragesOfSubarrays(inputArray, k) {
    let averagesList = [];
    let start = 0;
    let sum = 0;
    for (let i = 0; i < inputArray.length; i = i + 1) {
        sum = sum + inputArray[i];
        if (i >= k) {
            sum = sum - inputArray[start];
            start = start + 1;
        }
        if (i >= k - 1) {
            averagesList.push(sum / k);
        }
    }
    return averagesList;
}

let inputArray = [1, 3, 2, 6, -1, 4, 1, 8, 2, 5, 0];
console.log(getAveragesOfSubarrays(inputArray, 5));
// [ 2.2, 2.8, 2.4, 3.6, 2.8, 4, 3.2 ]

// A variation of the above exercise is asking for the maximum average in a subarray of length k

function getMaxAveragesOfSubarrays(inputArray, k) {
    let maxAverage;
    let start = 0;
    let sum = 0;
    for (let i = 0; i < inputArray.length; i = i + 1) {
        sum = sum + inputArray[i];
        if (i >= k) {
            sum = sum - inputArray[start];
            start = start + 1;
        }
        if (i >= k - 1) {
            maxAverage = !maxAverage || (sum / k) > maxAverage ? sum / k : maxAverage;
        }
    }
    return maxAverage;
}

console.log(getMaxAveragesOfSubarrays(inputArray, 5));      // 4
