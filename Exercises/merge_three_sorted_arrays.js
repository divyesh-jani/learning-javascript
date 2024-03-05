// Merge 3 sorted arrays
// Time complexity O(i+j+k) where i, j, k are lengths of input arrays
// Space complexity O(i+j+k) since we're creating a new array and returning it

function mergeThreeArrays(arrOne, arrTwo, arrThree) {
    if (!arrOne.length && !arrTwo.length && !arrThree.length) return [];
    let mergedArray = [];
    let i = 0;
    let j = 0;
    let k = 0;
    let totalElements = arrOne.length + arrTwo.length + arrThree.length;
    while (mergedArray.length < totalElements) {
        let elemFromOne = i < arrOne.length ? arrOne[i] : Number.MAX_SAFE_INTEGER;
        let elemFromTwo = j < arrTwo.length ? arrTwo[j] : Number.MAX_SAFE_INTEGER;
        let elemFromThree = k < arrThree.length ? arrThree[k] : Number.MAX_SAFE_INTEGER;
        let minElem = Math.min(elemFromOne, elemFromTwo, elemFromThree);
        if (i < arrOne.length && arrOne[i] === minElem) {
            i = i + 1;
        } else if (j < arrTwo.length && arrTwo[j] === minElem) {
            j = j + 1;
        } else {
            k = k + 1;
        }
        mergedArray.push(minElem);
    }
    return mergedArray;
}

console.log(mergeThreeArrays([5,10,15,20], [4,8,12,15,20], [10,20,30,40]));
// [ 4, 5, 8, 10, 10, 12, 15, 15, 20, 20, 20, 30, 40 ]
console.log(mergeThreeArrays([], [], []));
// []
console.log(mergeThreeArrays([5,10,20], [], [10,20,30,40]));
// [ 5, 10, 10, 20, 20, 30, 40 ]
console.log(mergeThreeArrays([], [], [1,2,5,10]));
// [ 1, 2, 5, 10 ]
console.log(mergeThreeArrays([6,6,8,50,1005], [-6,0,222,500], [-3,-1,0,5,1000]));
// [ -6, -3, -1, 0, 0, 5, 6, 6, 8, 50, 222, 500, 1000, 1005 ]
