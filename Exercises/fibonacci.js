// Given a number n, find the first n numbers in the fibonacci sequence

function generateFibonacciSequence(n) {
    let fiboSequence = [0, 1];
    for (let i = 2; i < n; i = i + 1) {
        fiboSequence[i] = fiboSequence[i - 2] + fiboSequence[i - 1];
    }
    return fiboSequence;
}

console.log(generateFibonacciSequence(5));      // [ 0, 1, 1, 2, 3 ]
console.log(generateFibonacciSequence(2));      // [ 0, 1 ]
console.log(generateFibonacciSequence(10));     // [ 0, 1,  1,  2,  3, 5, 8, 13, 21, 34 ]
