// Count the number of palindromic substrings within a given string

function countPalindromicSubstrings(inputString) {
    if (inputString.length <= 1) return inputString.length;
    let count = 0;
    function checkNeighbors(left, right) {
        while(left >= 0 && right <= inputString.length && (inputString[left] === inputString[right])) {
            count = count + 1;
            left = left - 1;
            right = right + 1;
        }
    }
    for (let i = 0; i < inputString.length; i = i + 1) {
        checkNeighbors(i, i);
        checkNeighbors(i, i + 1);
    }
    return count;
}

console.log(countPalindromicSubstrings('abcde'));       // 5
console.log(countPalindromicSubstrings(''));            // 0
console.log(countPalindromicSubstrings('abba'));        // 6
console.log(countPalindromicSubstrings('303'));         // 4
console.log(countPalindromicSubstrings('aaa'));         // 6
console.log(countPalindromicSubstrings('carrier'));     // 8
console.log(countPalindromicSubstrings('batallion'));   // 11
