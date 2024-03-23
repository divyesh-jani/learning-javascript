/*
 * Given a number, find the number of max consecutive zeros occuring in its binary form.
 * Zeros must be between two 1s.
 * Eg. input = 4; it's binary equivalent is 100 so result should be 0
 * Eg. input = 7; result = 0 ; (7 = 111)
 * Eg. input = 11; result = 1 ; (11 = 1011)
 */

function convertToBinary(N) {
    let binaryArr = [];
    while (N > 1) {
        let num = N % 2;
        binaryArr.unshift(num);
        N = Math.floor(N / 2);
    }
    binaryArr.unshift(1);
    return findZeros(binaryArr);
}

function findZeros(arr) {
    let maxZeros = 0;
    let i = 1;
    let currZeros = 0;
    while (i < arr.length) {
        if (arr[i] === 0) {
            currZeros = currZeros + 1;
        } else {
            if (currZeros > maxZeros) maxZeros = currZeros;
            currZeros = 0;
        }
        i = i + 1;
    }
    return maxZeros;
}

console.log(convertToBinary(9));        // 2 (1001)
console.log(convertToBinary(15));       // 0 (1111)
console.log(convertToBinary(20));       // 1 (10100)
console.log(convertToBinary(32));       // 0 (100000)
console.log(convertToBinary(165));      // 2 (10100101)
console.log(convertToBinary(529));      // 4 (1000010001)
console.log(convertToBinary(1041));     // 5 (10000010001)
