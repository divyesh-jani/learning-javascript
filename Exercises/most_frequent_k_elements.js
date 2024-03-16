
function getTopKElements(inputArr, k) {
    let freqMap = {};
    for (let item of inputArr) {
        freqMap[item] = (freqMap[item] || 0) + 1;
    }
    let allEntries = Object.entries(freqMap);
    allEntries.sort((a, b) => b[1] - a[1]);
    let resultArr = [];
    for (let i = 0; i < k; i = i + 1) {
        resultArr.push(allEntries[i][0]);
    }
    return resultArr;
}

function getTopKBuckets(inputArr, k) {
    let freqMap = {};
    for (let item of inputArr) {
        freqMap[item] = (freqMap[item] || 0) + 1;
    }

    let buckets = [];
    for (let key in freqMap) {
        let freq = freqMap[key];
        buckets[freq] ? buckets[freq].push(key) : buckets[freq] = [key];
    }

    let resultArr = [];
    for (let i = buckets.length - 1; i >= 0; i = i - 1) {
        if (buckets[i]) resultArr.push(...buckets[i]);
        if (resultArr.length >= k) break;
    }
    return resultArr;
}

console.log('----- Top Elements -----');
console.log(getTopKElements([1, 1, 1, 2, 2, 3, 3, 3], 2)); // [1, 3]
console.log(getTopKElements([1, 1, 2, 3, 3, 2, 4, 1], 2)); // [1, 2]

console.log('----- Top Buckets -----');
console.log(getTopKBuckets([1, 1, 1, 2, 2, 3, 3, 3], 2)); // [1, 3]
console.log(getTopKBuckets([1, 1, 2, 3, 3, 2, 4, 1], 2)); // [1, 2, 3]
