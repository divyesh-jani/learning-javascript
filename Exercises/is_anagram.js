// Check if two strings are anagrams.
// string A and string B are anagrams if string B can be built by reordering letters in string A (and vice versa)

// Time complexity O(nlog(n)) Space complexity O(n)
function isAnagram(strOne, strTwo) {
    if (strOne.length !== strTwo.length) return false;
    return strOne.split('').sort().join('') === strTwo.split('').sort().join('');
}

// Time complexity O(n) Space complexity O(n)
function checkAnagram(strOne, strTwo) {
    if (strOne.length !== strTwo.length) return false;
    let strOneMap = {};
    let strTwoMap = {};
    for (let char of strOne) {
        if (!strOneMap[char]) {
            strOneMap[char] = 1;
        } else {
            strOneMap[char] = strOneMap[char] + 1;
        }
    }
    for (let char of strTwo) {
        if (!strTwoMap[char]) {
            strTwoMap[char] = 1;
        } else {
            strTwoMap[char] = strTwoMap[char] + 1;
        }
    }
    for (let char in strOneMap) {
        if (strOneMap[char] !== strTwoMap[char]) return false;
    }
    return true;
}

let inputsToTest = [
    ['danger', 'garden'],
    ['aabcd', 'abcdd'],
    ['tastyt', 'tystat'],
    ['aaaaaa', 'aaaaa'],
    ['nameless', 'salesmen']
];

console.log(inputsToTest.map((a) => isAnagram(a[0], a[1])));
// [ true, false, true, false, true ]

console.log(inputsToTest.map((a) => checkAnagram(a[0], a[1])));
// [ true, false, true, false, true ]
