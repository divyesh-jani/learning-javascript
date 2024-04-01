// Given two strings, find the longest common substring

function longestCommonSubstring(strOne, strTwo) {
    let commonSubString = '';
    for (let i = 0; i < strOne.length; i = i + 1) {
        for (let j = 0; j < strTwo.length; j = j + 1) {
            let matchingString = '';
            let x = i;
            let y = j;
            while ((x < strOne.length) && (y < strTwo.length) && (strOne.charAt(x) === strTwo.charAt(y))) {
                matchingString = matchingString + strOne.charAt(x);
                x = x + 1;
                y = y + 1;
                // runs every time there is a match
                if (matchingString.length > commonSubString.length) commonSubString = matchingString;
                // console.log('Inside', i, j, matchingString, commonSubString);
            }
            // Runs n x m times
            // if (matchingString.length > commonSubString.length) commonSubString = matchingString;
            // console.log('Outside', i, j, matchingString, commonSubString);
        }
    }
    return commonSubString;
}

let strA = 'zabcdcdeab';
let strB = 'abcdeabzdc';
console.log(longestCommonSubstring(strA, strB));    // cdeab

console.log(longestCommonSubstring('dddabcaafdgss', 'bbbabcdeffffdgsfff'));    // fdgs
