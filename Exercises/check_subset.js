// Check if a word or letter is a subset of another word
// Meaning, check if larger word contains everything to form the smaller word

function isSubset(larger, smaller) {
    if (smaller.length > larger.length) return false;
    if (smaller.length === 0) return true;
    let largerMap = {};
    let smallerMap = {};
    for (let char of smaller) {
        smallerMap[char] = (smallerMap[char] || 0) + 1;
    }
    for (let char of larger) {
        largerMap[char] = (largerMap[char] || 0) + 1;
    }
    for (key in smallerMap) {
        if (!largerMap[key]) return false;
        if (smallerMap[key] > largerMap[key]) return false;
    }
    return true;
};

console.log(isSubset('vaccination', 'vacation'));           // true
console.log(isSubset('vaccination', 'vocation'));           // false
console.log(isSubset('cat', 'act'));                        // true
console.log(isSubset('test', 'testing'));                   // false
console.log(isSubset('faraday', 'ray'));                    // true
console.log(isSubset('faraday', ''));                       // true
console.log(isSubset('faraday', 'what'));                   // false
