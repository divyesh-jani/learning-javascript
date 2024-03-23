// Find the longest common prefix among all elements of an array

function getCommonPrefix(inputArr) {
    let commonPrefix = '';
    let i = 0;
    while (i < inputArr[0].length) {
        let checkChar = inputArr[0][i];
        for (let j = 1; j < inputArr.length; j = j + 1) {
            if (inputArr[j][i] !== checkChar) {
                return commonPrefix;
            }
        }
        commonPrefix = commonPrefix + checkChar;
        i = i + 1;
    }
    return commonPrefix;
}

let a = ['philanthropy', 'phlebotomy', 'phase', 'phew'];
let b = ['mumbai', 'miami', 'boston'];
let c = ['exp-10010120', 'exp-10200120', 'exp-10020120'];
let d = ['adam', 'adam', 'adam', 'adams'];
let e = ['1a263d51', '1a15521', '1afd52254', '1a1a2220'];
let f = ['common', 'common', 'common'];

console.log(getCommonPrefix(a));    // 'ph'
console.log(getCommonPrefix(b));    // ''
console.log(getCommonPrefix(c));    // 'exp-10'
console.log(getCommonPrefix(d));    // 'adam'
console.log(getCommonPrefix(e));    // '1a'
console.log(getCommonPrefix(f));    // 'common'
