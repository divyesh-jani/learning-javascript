// Check if a word or letter is a subset of another word
// Meaning, check if larger word contains everything to form the smaller word

// function to check if larger contains letters to form smaller
function isSubset(larger, smaller) {
    if (smaller.length > larger.length) return false;
    if (smaller.length === 0) return true;
    let largerElementArray = larger.split('');
    let smallerElementArray = smaller.split('');
    let largerMap = {};
    let smallerMap = {};
    largerElementArray.forEach(element => {
        if (largerMap[element]) {
            largerMap[element] = largerMap[element] + 1;
        } else {
            largerMap[element] = 1;
        }
    });
    // same operation as forming above largerMap, just using a different way
    for (element of smallerElementArray) {
        if (smallerMap[element]) {
            smallerMap[element] = smallerMap[element] + 1;
        } else {
            smallerMap[element] = 1;
        }
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
