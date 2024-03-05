// Find the longest palindromic substring from within a given string

function longestPalindromicSubstring(inputString) {
    if (inputString.length === 0 || inputString.length === 1) return inputString;
    let longestString = inputString[0];
    function checkPalindrome(start, end) {
        while (start >= 0 && end < inputString.length && (inputString[start] === inputString[end])) {
            if ((end - start + 1) > longestString.length) {
                longestString = inputString.slice(start, end + 1);
            }
            start = start - 1;
            end = end + 1;
        }
    }
    for (let i = 0; i < inputString.length; i = i + 1) {
        checkPalindrome(i - 1, i + 1);
        checkPalindrome(i, i + 1);
    }
    return longestString;
}

console.log(longestPalindromicSubstring('bajaj'));          // aja
console.log(longestPalindromicSubstring('a'));              // a
console.log(longestPalindromicSubstring('cucumber'));       // cuc
console.log(longestPalindromicSubstring('bc'));             // b
console.log(longestPalindromicSubstring('indeed'));         // deed
console.log(longestPalindromicSubstring('palindrome'));     // p
console.log(longestPalindromicSubstring(''));               // 
console.log(longestPalindromicSubstring('racecar'));        // racecar
