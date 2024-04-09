// Given two strings s and t, find the shortest substring of s that contains all characters of t.
// Return empty string if such a substring does not exist

function getShortestSubstring(s, t) {
    let tMap = {};
    for (let char of t) {
        tMap[char] = (tMap[char] || 0) + 1;
    }
    let left = 0;
    let right = 0;
    let minWindow = '';
    let minWindowLength;
    let charsFound = 0;
    while (right < s.length) {
        const rightChar = s[right];
        if (tMap[rightChar] > 0) {
            charsFound = charsFound + 1;
        }
        tMap[rightChar] = (tMap[rightChar] || 0) - 1;
        right = right + 1;
        while (charsFound === t.length) {
            if (!minWindowLength || right - left < minWindowLength) {
                minWindowLength = right - left;
                minWindow = s.slice(left, right);
            }
            const leftChar = s[left];
            tMap[leftChar] = tMap[leftChar] + 1;
            if (tMap[leftChar] > 0) {
                charsFound = charsFound - 1;
            }
            left = left + 1;
        }
    }
    return minWindow;
}

let s = 'adcfebeceabebadfcdfcbead';
let t = 'abca';
console.log(getShortestSubstring(s, t));    // ceabeba

console.log(getShortestSubstring('acebabacbae', 'abc'));    // bac
