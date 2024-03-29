// Check if array is monotonic
// An array is monotonic if the values are either increasing or decreasing through the end

function isMonotonic(inputArray) {
    if (inputArray.length < 2) return true;
    let increasing = true;
    let decreasing = true;
    for (let i = 0; i < inputArray.length - 1; i = i + 1) {
        if (inputArray[i + 1] > inputArray[i]) {
            decreasing = false;
        }
        if (inputArray[i + 1] < inputArray[i]) {
            increasing = false;
        }
        if (!increasing && !decreasing) {
            return false;
        }
    }
    return true;
}

console.log(isMonotonic([1,2,2,3,4]));      // true
console.log(isMonotonic([10,5,4,2,2,1]));   // true
console.log(isMonotonic([1,1,2,5,4,6]));    // false
console.log(isMonotonic([9,8,7,5,6,4,1]));  // false
console.log(isMonotonic([5,5,5]));          // true
