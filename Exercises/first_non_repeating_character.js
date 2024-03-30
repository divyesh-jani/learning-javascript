// Given a string str consisting of only lowercase letters, find the first non-repeating character in it.
// E.g. Input: 'tomato' => Output: 'm'

function getFirstNonRepeating(str) {
    if (str.length === 0) return '';
    let freqArr = [];
    let freqMap = {};
    for (let char of str) {
        if (freqMap[char] || freqMap[char] === 0) {
            let index = freqMap[char];
            freqArr[index][0] = freqArr[index][0] + 1;
        } else {
            freqMap[char] = freqArr.length;
            freqArr.push([1, char]);
        }
    }
    for (let [freq, char] of freqArr) {
        if (freq === 1) {
            return char;
        }
    }
    return '';
}
// Time Complexity O(n), Space Complexity O(1) // freqArr and freqMap will have at most 26 entries

console.log('-----Using Freq Map and Array-----');
console.log(getFirstNonRepeating('tomato'));        // m
console.log(getFirstNonRepeating('mama'));          // ''
console.log(getFirstNonRepeating('interview'));     // n
console.log(getFirstNonRepeating('totally'));       // o
console.log(getFirstNonRepeating('kayak'));         // y

// If we don't want to use additional array, we can get by using just the freqMap
// and iterating over str again and check frequencies, though this may sacrifice
// some time in case several characters are repeating
function getFirstUsingOnlyFreqMap(str) {
    if (str.length === 0) return '';
    let freqMap = {};
    for (let char of str) {
        if (freqMap[char]) {
            freqMap[char] = freqMap[char] + 1;
        } else {
            freqMap[char] = 1;
        }
    }
    for (let char of str) {
        if (freqMap[char] === 1) {
            return char;
        }
    }
    return '';
}

console.log('-----Using Freq Map alone-----');
console.log(getFirstUsingOnlyFreqMap('tomato'));        // m
console.log(getFirstUsingOnlyFreqMap('mama'));          // ''
console.log(getFirstUsingOnlyFreqMap('interview'));     // n
console.log(getFirstUsingOnlyFreqMap('totally'));       // o
console.log(getFirstUsingOnlyFreqMap('kayak'));         // y
