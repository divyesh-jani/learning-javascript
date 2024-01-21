// Check if given string is a palindrome; return bool

function checkPalindrome(inputString) {
    return inputString.toUpperCase() === inputString.toUpperCase().split('').reverse().join('');
    // if not checking for case
    // return inputString === inputString.split('').reverse().join('');
}

console.log(checkPalindrome('abcd'));   // false
console.log(checkPalindrome('aA'));     // true
console.log(checkPalindrome('1220'));   // false
console.log(checkPalindrome('7887'));   // true
console.log(checkPalindrome('Davad'));  // true

// another method without using split reverse join

function isPalindrome(inputString) {
    let i = 0;
    let j = inputString.length - 1;
    let normalizedString = inputString.toUpperCase();
    while (i < j) {
        if (normalizedString.charAt(i) !== normalizedString.charAt(j)) { // or normalizedString[i] !== normalizedString[j]
            return false;
        }
        i = i + 1;
        j = j - 1;
    }
    return true;
}

console.log(isPalindrome('abcd'));   // false
console.log(isPalindrome('aA'));     // true
console.log(isPalindrome('1220'));   // false
console.log(isPalindrome('7887'));   // true
console.log(isPalindrome('Davad'));  // true
