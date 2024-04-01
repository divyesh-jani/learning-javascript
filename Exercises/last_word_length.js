// Find the length of the last word in the sentence

function getLastWordLength(sentence) {
    let lastWordLength = 0;
    let i = sentence.length - 1;
    while (i >= 0) {
        let currentChar = sentence[i];
        if (currentChar === ' ' && lastWordLength > 0) {
            return lastWordLength;
        }
        if (currentChar !== ' ') {
            lastWordLength = lastWordLength + 1;
        }
        i = i - 1;
    }
    return lastWordLength;
}

console.log(getLastWordLength('Last word length'));                     // 6
console.log(getLastWordLength('  I am   learning    javascript    '));  // 10
console.log(getLastWordLength('Surely this works 2'));                  // 1
console.log(getLastWordLength('asentencebutwithoutspaces'));            // 25
console.log(getLastWordLength('     '));                                // 0
