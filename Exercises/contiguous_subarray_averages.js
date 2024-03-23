// Given an array, find the average of all contiguous subarrays of size k in it.

function getAveragesOfSubarrays(inputArray, k) {
    let startIndex = 0;
    let endIndex = k - 1;
    let sum = 0;
    let averagesList = [];
    while (endIndex < inputArray.length) {
        let start = startIndex;
        if (start !== 0) {
            sum = sum - inputArray[start - 1] + inputArray[endIndex];
        } else {
            while (start <= endIndex) {
                sum = sum + inputArray[start];
                start = start + 1;
            }
        }
        averagesList.push(sum / k);
        startIndex = startIndex + 1;
        endIndex = endIndex + 1;
    };
    return averagesList;
}

let inputArray = [1, 3, 2, 6, -1, 4, 1, 8, 2, 5, 0];
console.log(getAveragesOfSubarrays(inputArray, 5));
// [ 2.2, 2.8, 2.4, 3.6, 2.8, 4, 3.2 ]

// A variation of the above exercise is asking for the maximum average in a subarray of length k

function getMaxAveragesOfSubarrays(inputArray, k) {
    let startIndex = 0;
    let endIndex = k - 1;
    let sum = 0;
    let maxAverage;
    while (endIndex < inputArray.length) {
        let start = startIndex;
        if (start !== 0) {
            sum = sum - inputArray[start - 1] + inputArray[endIndex];
        } else {
            while (start <= endIndex) {
                sum = sum + inputArray[start];
                start = start + 1;
            }
        }
        maxAverage = !maxAverage ? (sum / k) : Math.max(maxAverage, (sum / k));
        startIndex = startIndex + 1;
        endIndex = endIndex + 1;
    };
    return maxAverage;
}

console.log(getMaxAveragesOfSubarrays(inputArray, 5));      // 4
