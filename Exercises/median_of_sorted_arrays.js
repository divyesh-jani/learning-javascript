// Given two sorted arrays, find the median of those two arrays
// Median is the value in the middle of the array
// If there are two values in the middle, the median is the mean of those values

// Time Complexity O(log(n)) since we use binary search
function getMedianQuick(arrayOne, arrayTwo) {
    if (!arrayOne.length && !arrayTwo.length) return '';
    if (arrayOne.length > arrayTwo.length) return getMedianQuick(arrayTwo, arrayOne);
    const arrayOneLength = arrayOne.length;
    const arrayTwoLength = arrayTwo.length;
    let left = 0;
    let right = arrayOneLength;
    while(left <= right) {
        let oneMaxLeftIndex = Math.floor((left + right) / 2);
        let twoMaxLeftIndex = Math.floor((arrayOneLength + arrayTwoLength + 1) / 2 - oneMaxLeftIndex);
        let oneMaxLeftValue = oneMaxLeftIndex > 0 ? arrayOne[oneMaxLeftIndex - 1] : Number.MIN_SAFE_INTEGER;
        let oneMinRightValue = oneMaxLeftIndex < arrayOneLength ? arrayOne[oneMaxLeftIndex] : Number.MAX_SAFE_INTEGER;
        let twoMaxLeftValue = twoMaxLeftIndex > 0 ? arrayTwo[twoMaxLeftIndex - 1] : Number.MIN_SAFE_INTEGER;
        let twoMinRightValue = twoMaxLeftIndex < arrayTwoLength ? arrayTwo[twoMaxLeftIndex] : Number.MAX_SAFE_INTEGER;
        if(oneMaxLeftValue <= twoMinRightValue && twoMaxLeftValue <= oneMinRightValue) {
            if((arrayOneLength + arrayTwoLength) % 2 === 1) return Math.max(oneMaxLeftValue, twoMaxLeftValue);
            return ((Math.max(oneMaxLeftValue, twoMaxLeftValue) + Math.min(oneMinRightValue, twoMinRightValue)) / 2);
        } else if(oneMaxLeftValue > twoMinRightValue) {
            right = oneMaxLeftIndex - 1;
        } else {
            left = oneMaxLeftIndex + 1;
        }
    }
}

// Time Complexity O(n + m), though we only look at about (n + m)/2 elements
function getMedian(arrayOne, arrayTwo) {
    if (!arrayOne.length && !arrayTwo.length) return '';
    let mergedArray = [];
    let totalElements = arrayOne.length + arrayTwo.length;
    let requiredIndex = Math.floor(totalElements / 2);
    let i = 0;
    let j = 0;
    while (mergedArray.length <= requiredIndex) {
        if ((i < arrayOne.length) && (j >= arrayTwo.length || arrayOne[i] < arrayTwo[j])) {
            mergedArray.push(arrayOne[i]);
            i = i + 1;
        } else {
            mergedArray.push(arrayTwo[j])
            j = j + 1;
        }
    }
    if (totalElements % 2 === 0) {
        return ((mergedArray[mergedArray.length - 1] + mergedArray[mergedArray.length - 2]) / 2);
    }
    return mergedArray[mergedArray.length - 1];
}

console.log(getMedianQuick([5,10,12,15,20,30],[1,2,5,8,13,20,25,40]));  // 12.5
console.log(getMedian([5,10,12,15,20,30],[1,2,5,8,13,20,25,40]));       // 12.5
console.log(getMedianQuick([],[]));                                     // 
console.log(getMedian([],[]));                                          // 
console.log(getMedianQuick([5],[10,20,30,40,50]));                      // 25
console.log(getMedian([5],[10,20,30,40,50]));                           // 25
console.log(getMedianQuick([10,20,30,40,50,60],[5]));                   // 30
console.log(getMedian([10,20,30,40,50,60],[5]));                        // 30
console.log(getMedianQuick([-9,-8,-8,-1,0,0,5,6,10],[-5,0,1,2,3,5]));   // 0
console.log(getMedian([-9,-8,-8,-1,0,0,5,6,10],[-5,0,1,2,3,5]));        // 0
console.log(getMedianQuick([-1,0,1],[500,5000,50000,100000]));          // 500
console.log(getMedian([-1,0,1],[500,5000,50000,100000]));               // 500
