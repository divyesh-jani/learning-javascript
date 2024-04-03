/*
 * Given a number, find the number of max consecutive zeros occuring in its binary form.
 * Zeros must be between two 1s.
 * Eg. input = 4; it's binary equivalent is 100 so result should be 0
 * Eg. input = 7; result = 0 ; (7 = 111)
 * Eg. input = 11; result = 1 ; (11 = 1011)
 */

function findZeros(N) {
    if (N < 5) return 0;
    let binaryArr = convertToBinary(N);
    let maxZeros = 0;
    let i = 1;
    let currZeros = 0;
    while (i < binaryArr.length) {
        if (binaryArr[i] === 0) {
            currZeros = currZeros + 1;
        } else {
            if (currZeros > maxZeros) maxZeros = currZeros;
            currZeros = 0;
        }
        i = i + 1;
    }
    return maxZeros;
}

function convertToBinary(N) {
    let binaryArr = [];
    while (N > 1) {
        let num = N % 2;
        binaryArr.unshift(num);
        N = Math.floor(N / 2);
    }
    binaryArr.unshift(1);
    return binaryArr;
}

console.log(findZeros(0));          // 0 (0)
console.log(findZeros(2));          // 0 (10)
console.log(findZeros(5));          // 1 (101)
console.log(findZeros(9));          // 2 (1001)
console.log(findZeros(15));         // 0 (1111)
console.log(findZeros(20));         // 1 (10100)
console.log(findZeros(32));         // 0 (100000)
console.log(findZeros(165));        // 2 (10100101)
console.log(findZeros(529));        // 4 (1000010001)
console.log(findZeros(1041));       // 5 (10000010001)
