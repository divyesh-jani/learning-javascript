/* 
 * Given two non-empty arrays of integers, determine whether the second array
 * is a subsequence of the first one. A subsequence of an array is a set of numbers
 * that aren’t necessarily adjacent in the array but that are in the same order
 * as they appear in the array.
 */

function isValidSubsequence(array, sequence) {
    if (sequence.length > array.length) return false;
    let i = 0;
    let lookingFor = sequence[i];
    for (let num of array) {
        if (num === lookingFor) {
            i = i + 1;
            if (i >= sequence.length) {
                return true;
            }
            lookingFor = sequence[i];
        }
    }
    return false;
}

// Testing
let array = [5, 1, 22, 25, 6, -1, 8, 10, 12];
let sequence = [1, 6, 10];
console.log(isValidSubsequence(array, sequence));   // true

array = [1, 2, 3, 4, 5];
sequence = [2, 5];
console.log(isValidSubsequence(array, sequence));   // true

array = [1, 1, 0, 2, 1];
sequence = [1, 0, 1, 2];
console.log(isValidSubsequence(array, sequence));   // false

array = [1, 1, 0, 2, 1];
sequence = [1, 0, 2, 1];
console.log(isValidSubsequence(array, sequence));   // true

array = [1, 2, 3, 4, 5];
sequence = [2, 4, 6];
console.log(isValidSubsequence(array, sequence));   // false
