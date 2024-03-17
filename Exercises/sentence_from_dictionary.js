// Find if a valid sentence can be formed using the string provided

let dictionary = new Set();
dictionary.add('i');
dictionary.add('love');
dictionary.add('face');
dictionary.add('book');
dictionary.add('books');
dictionary.add('facebook');
dictionary.add('am');
dictionary.add('test');
dictionary.add('on');
dictionary.add('in');
dictionary.add('is');
dictionary.add('ebook');
dictionary.add('at');

function canFormSentence(str) {
    if (str.length === 0) return true;
    for (let i = 0; i < str.length; i = i + 1) {
        let currLetters = str.slice(0, i + 1);
        if (dictionary.has(currLetters)) {
            if (canFormSentence(str.slice(i + 1))) return true;
        }
    }
    return false;
}

console.log('----- Recursive -----');
console.log(canFormSentence('ilovefacebook'));          // true
console.log(canFormSentence('iamtest'));                // true
console.log(canFormSentence('iinis'));                  // true
console.log(canFormSentence('iisbooksebook'));          // true
console.log(canFormSentence('iknownothing'));           // false
console.log(canFormSentence('iamtesting'));             // false
console.log(canFormSentence('itestfacbook'));           // false
console.log(canFormSentence('itinisxestfacbookitinisxitinisxfaceebooksbookface'));  // false

function canFormSentenceMemoized(str, memo = {}) {
    if (str in memo) return memo[str];
    if (str.length === 0) return true;
    
    for (let i = 0; i < str.length; i = i + 1) {
        const myChars = str.slice(0, i + 1);
        if (dictionary.has(myChars)) {
            if (canFormSentenceMemoized(str.slice(i + 1), memo)){
                memo[str] = true;
                return true;
            }
        }
    }
    memo[str] = false;
    return false;
}

console.log('----- Memoized -----');
console.log(canFormSentenceMemoized('ilovefacebook'));      // true
console.log(canFormSentenceMemoized('iamtest'));            // true
console.log(canFormSentenceMemoized('iinis'));              // true
console.log(canFormSentenceMemoized('iisbooksebook'));      // true
console.log(canFormSentenceMemoized('iknownothing'));       // false
console.log(canFormSentenceMemoized('iamtesting'));         // false
console.log(canFormSentenceMemoized('itestfacbook'));       // false
console.log(canFormSentenceMemoized('itinisxestfacbookitinisxitinisxfaceebooksbookface'));  // false

function canFormSentenceTabulated(str) {
    let resultArr = Array(str.length + 1).fill(false);
    resultArr[0] = true;
    for (let i = 0; i <= str.length; i = i + 1) {
        for (let j = 0; j < i; j = j + 1) {
            if (resultArr[j] && dictionary.has(str.substring(j, i))) {
                resultArr[i] = true;
                break;
            }
        }
    }
    return resultArr[str.length];
}

console.log('----- Tabulated -----');
console.log(canFormSentenceTabulated('ilovefacebook'));     // true
console.log(canFormSentenceTabulated('iamtest'));           // true
console.log(canFormSentenceTabulated('iinis'));             // true
console.log(canFormSentenceTabulated('iisbooksebook'));     // true
console.log(canFormSentenceTabulated('iknownothing'));      // false
console.log(canFormSentenceTabulated('iamtesting'));        // false
console.log(canFormSentenceTabulated('itestfacbook'));      // false
console.log(canFormSentenceTabulated('itinisxestfacbookitinisxitinisxfaceebooksbookface')); // false
