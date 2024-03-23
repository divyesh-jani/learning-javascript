// List all permutations of elements in any given array

function getPermutationsFromArray(inputArray) {
    if (inputArray.length < 2) return inputArray;
    let allPermutations = [];
    for (let i = 0; i < inputArray.length; i = i + 1) {
        let currentElement = inputArray[i];
        let otherElements = inputArray.slice(0, i).concat(inputArray.slice(i + 1));
        let otherPermutations = getPermutationsFromArray(otherElements);
        for (let permutation of otherPermutations) {
            allPermutations.push([currentElement].concat(permutation));
        }
    }
    return allPermutations;
}

let inputArray = [10, 20, 30];
console.log(getPermutationsFromArray(inputArray));
// [[10,20,30], [10,30,20], [20,10,30], [20,30,10], [30,10,20], [30,20,10]]

let inputArrayLarger = [1, 2, 3, 5];
console.log(getPermutationsFromArray(inputArrayLarger));
// Array of 24 unique arrays
console.log(getPermutationsFromArray(inputArrayLarger).length);
// 24
