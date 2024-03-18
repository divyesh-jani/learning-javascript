// Given a number n, find the nth element (not index n, but element n. eg. first element is 0) in fibonacci sequence

function getFibonacciNumber(n) {
    if (n < 3) {
        return n - 1;
    }
    return getFibonacciNumber(n - 1) + getFibonacciNumber(n - 2);
}

// Time complexity is 2 to the power n (much worse than iterative method)

console.log(getFibonacciNumber(1));     // 0
console.log(getFibonacciNumber(2));     // 1
console.log(getFibonacciNumber(4));     // 2
console.log(getFibonacciNumber(3));     // 1
console.log(getFibonacciNumber(5));     // 3
console.log(getFibonacciNumber(6));     // 5
console.log(getFibonacciNumber(8));     // 13

// Iterative method and caching results

function getFibonacci(n) {
    let fiboSequence = [0, 1];
    if (fiboSequence[n - 1]) {
        return fiboSequence[n - 1];
    }
    for (let i = 2; i < n; i = i + 1) {
        fiboSequence[i] = fiboSequence[i - 1] + fiboSequence[i - 2];
    }
    return fiboSequence[n - 1];
}

// Time complexity is n

console.log(getFibonacci(1));     // 0
console.log(getFibonacci(2));     // 1
console.log(getFibonacci(4));     // 2
console.log(getFibonacci(3));     // 1
console.log(getFibonacci(5));     // 3
console.log(getFibonacci(6));     // 5
console.log(getFibonacci(8));     // 13
