// Given an integer n, find the factorial of that number

function getFactorial(n) {
    if (n < 2) {
        return 1;
    }
    let result = 1;
    for (let i = n; i > 1; i = i - 1) {
        result = result * i;
    }
    return result;
}

console.log(getFactorial(4));   // 24
console.log(getFactorial(1));   // 1
console.log(getFactorial(2));   // 2
console.log(getFactorial(5));   // 120
console.log(getFactorial(8));   // 40320
