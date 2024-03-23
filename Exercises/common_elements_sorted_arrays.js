// Given two sorted, distinct arrays, return the common elements in those arrays

function getCommonElements(arrayOne, arrayTwo) {
    let commonElements = [];
    let i = 0;
    let j = 0;
    while ((i + j) < (arrayOne.length + arrayTwo.length)) {
        let arrayOneElement = arrayOne[i];
        let arrayTwoelement = arrayTwo[j];
        if (arrayOneElement === arrayTwoelement) {
            commonElements.push(arrayTwoelement);
            i = i + 1;
            j = j + 1; // because we're dealing with arrays with distinct values
        } else if (arrayOneElement < arrayTwoelement) {
            i = i + 1;
        } else {
            j = j + 1;
        }
        if (i === arrayOne.length || j === arrayTwo.length) {
            return commonElements;
        }
    }
    return commonElements;
}

let A = [2,5,10,20,50,88,101,150];
let B = [1,3,5,15,50];
let C = [0,5,15];
let D = [-10,-7,0,1,10,11,19,60];

console.log(getCommonElements(A, B));                   // [ 5, 50 ]
console.log(getCommonElements(C, D));                   // [ 0 ]
console.log(getCommonElements(A, D));                   // [ 10 ]
console.log(getCommonElements(C, B));                   // [ 5, 15 ]
console.log(getCommonElements(A, [0, 25, 100, 500]));   // [ ]
