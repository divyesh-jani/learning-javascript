// Given a positive integer n, determine if the number is power of 2 or not

function isPowerOfTwo(n) {
    if (n === 1 || n === 2) {
        return true;
    }
    while (n > 1) {
        if (n % 2 !== 0) {
            return false;
        } 
        n = n / 2;
    }
    return true;
}

console.log(isPowerOfTwo(2));       // true
console.log(isPowerOfTwo(3));       // false
console.log(isPowerOfTwo(4));       // true
console.log(isPowerOfTwo(6));       // false
console.log(isPowerOfTwo(8));       // true
console.log(isPowerOfTwo(128));     // true
console.log(isPowerOfTwo(192));     // false
console.log(isPowerOfTwo(1024));    // true

// Alternate bitwise solution

function isPowerOfTwoBitwise(n) {
    if (n === 1 || n === 2) {
        return true;
    }
    return (n & (n - 1)) === 0;
}

console.log(isPowerOfTwoBitwise(2));       // true
console.log(isPowerOfTwoBitwise(3));       // false
console.log(isPowerOfTwoBitwise(4));       // true
console.log(isPowerOfTwoBitwise(6));       // false
console.log(isPowerOfTwoBitwise(8));       // true
console.log(isPowerOfTwoBitwise(128));     // true
console.log(isPowerOfTwoBitwise(192));     // false
console.log(isPowerOfTwoBitwise(1024));    // true
