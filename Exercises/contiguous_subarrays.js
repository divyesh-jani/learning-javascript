/*
Given an array of n integers, determine the number of contiguous subarrays that fulfill the following conditions:
The value at index i must be the maximum element in the contiguous subarrays, and
These contiguous subarrays must either start from or end on index i.
Return array of same length indicating contiguous subarrays at each index
Example
Input = [3, 4, 1, 6, 2]
Output = [1, 3, 1, 5, 1]

Explanation:
For index 0 - [3] is the only contiguous subarray that starts (or ends) at index 0 with the maximum value in the subarray being 3.
For index 1 - [4], [3, 4], [4, 1]
For index 2 - [1]
For index 3 - [6], [6, 2], [1, 6], [4, 1, 6], [3, 4, 1, 6]
For index 4 - [2]
*/

function countSubArrays(inputArray) {
    if (!inputArray || inputArray.length === 0) return [];
    let finalArray = [];
    for (let i = 0; i < inputArray.length; i = i + 1) {
        let numberOfSubArrays = 1;
        let arrayLength = inputArray.length;
        let j = i + 1;
        while (j < arrayLength) {
            if (inputArray[i] > inputArray[j] ) {
                numberOfSubArrays = numberOfSubArrays + 1;
                j = j + 1;
            } else {
                break;
            }
        }
        j = i - 1;
        while (j >= 0) {
            if (inputArray[j] < inputArray[i]) {
                numberOfSubArrays = numberOfSubArrays + 1;
                j = j - 1;
            } else {
                break;
            }
        }
        finalArray.push(numberOfSubArrays);
    }
    return finalArray;
}


let A = [3, 4, 1, 6, 2];
console.log(countSubArrays(A));
// [ 1, 3, 1, 5, 1 ];

let B = [2, 4, 7, 1, 5, 3];
console.log(countSubArrays(B));
// [ 1, 2, 6, 1, 3, 1 ];
