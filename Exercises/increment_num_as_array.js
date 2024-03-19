// Given a number represented as array, increment 1 to it
// Eg. Input: [1, 2, 3], Expected Output: [1, 2, 4]

function incrementOne(numArray) {
    for (let i = numArray.length - 1; i >= 0; i = i - 1) {
        if (numArray[i] !== 9) {
            numArray[i] = numArray[i] + 1;
            return numArray;
        } else {
            numArray[i] = 0;
            if (i === 0) {
                numArray.unshift(1);
                return numArray;
            }
        }
    }
}

console.log(incrementOne([1,2,4]));         // [ 1, 2, 5 ]
console.log(incrementOne([0,5,2,7]));       // [ 0, 5, 2, 8 ]
console.log(incrementOne([5,9,9]));         // [ 6, 0, 0 ]
console.log(incrementOne([9,9,9,9,9]));     // [ 1, 0, 0, 0, 0, 0 ]
console.log(incrementOne([8,5,2,9]));       // [ 8, 5, 3, 0 ]
