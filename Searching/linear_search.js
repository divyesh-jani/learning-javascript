// Given an array of n elements and a target t, find the index of t in the array
// Return -1 if target is not found

function linearSearch(inputArray, elementToFind) {
    for (let i = 0; i < inputArray.length; i = i + 1) {
        if (inputArray[i] === elementToFind) {
            return i;
        }
    }
    return -1;
}

console.log(linearSearch([-4, -1, 0, 2, 5, 10, 12], 5));    // 4
console.log(linearSearch([-4, -1, 0, 2, 5, 10, 12], -4));   // 0
console.log(linearSearch([-4, -1, 0, 2, 5, 10, 12], 0));    // 2
console.log(linearSearch([-4, -1, 0, 2, 5, 10, 12], 12));   // 6
console.log(linearSearch([-4, -1, 0, 2, 5, 10, 12], 6));    // -1
