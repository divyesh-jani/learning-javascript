// Determine if given string can be a made into a palindrome by removing exactly one character

function canBePalindrome(str) {
    let start = 0;
    let end = str.length - 1;
    let changed = false;
    while (start <= end) {
        if (str[start] === str[end]) {
            start = start + 1;
            end = end - 1;
        } else {
            if (changed) {
                return false;
            }
            if (str[start] === str[end - 1]) {
                end = end - 1;
            } else if (str[end] === str[start + 1]) {
                start = start + 1;
            } else {
                return false;
            }
            start = start + 1;
            end = end - 1;
            changed = true;
        }
    }
    return true;
}

console.log(canBePalindrome('ksayak'));  // true
console.log(canBePalindrome('racecars')); // true
console.log(canBePalindrome('adam')); // true
console.log(canBePalindrome('kpayakp')); // false
console.log(canBePalindrome('toot')); // true
console.log(canBePalindrome('toeot')); // true
console.log(canBePalindrome('tootem')); // false
