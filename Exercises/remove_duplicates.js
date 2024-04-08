// remove duplicates from array that is NOT sorted

function removeDuplicatesUsingSet(inputArray) {
    let uniqueSet = new Set();
    for (let element of inputArray) {
        uniqueSet.add(element);
    }
    return [...uniqueSet];
};

function removeDuplicatesUsingHashMap(inputArray) {
    let uniqueSet = {};
    for (let element of inputArray) {
        uniqueSet[element] = true;
    }
    // return Object.keys(uniqueSet); // We can do this but .keys return keys as string: [ '1', '2', '3', '4', '5', '6' ]
    // so we can iterate over object, get keys, and convert to number if needed
    let uniqueInputs = [];
    for (let key in uniqueSet) {
        uniqueInputs.push(Number(key));
    }
    return uniqueInputs;
    
};

let inputArray = [1, 2, 3, 2, 2, 5, 6, 4, 4];
console.log(removeDuplicatesUsingSet(inputArray));                      // [ 1, 2, 3, 5, 6, 4 ]
console.log(removeDuplicatesUsingHashMap(inputArray));                  // [ 1, 2, 3, 4, 5, 6 ]


// Remove duplicates from SORTED ARRAY

function removeDuplicatesFromSortedArray(sortedInput) {
    let sortedArray = [];
    for (let element of sortedInput) {
        if (!sortedArray.length || sortedArray[sortedArray.length - 1] !== element) {
            sortedArray.push(element);
        }
    }
    return sortedArray;
}

function removeDuplicatesFromSortedArrayUsingFilter(sortedInput) {
    return sortedInput.filter((element, index, array) => element !== array[index - 1]);
}

function removeDuplicatesInPlace(sortedInput) {
    let startIndex = 0;
    let endIndex = 1;
    while (endIndex < sortedInput.length) {
        if (sortedInput[endIndex] !== sortedInput[startIndex]) {
            startIndex = startIndex + 1;
            sortedInput[startIndex] = sortedInput[endIndex];
            endIndex = endIndex + 1;
        } else {
            endIndex = endIndex + 1;
        }
    }
    return sortedInput.slice(0, startIndex + 1);
}

let sortedInput = [1,2,2,2,3,4,4,5,6];
console.log(removeDuplicatesFromSortedArray(sortedInput));              // [ 1, 2, 3, 4, 5, 6 ]
console.log(removeDuplicatesFromSortedArrayUsingFilter(sortedInput));   // [ 1, 2, 3, 4, 5, 6 ]
console.log(removeDuplicatesInPlace(sortedInput));                      // [ 1, 2, 3, 4, 5, 6 ]
