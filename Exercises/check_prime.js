// Given a natural number n, check whether the number is prime or not

function checkPrime(n) {
    if (n === 1) {
        return false;
    }
    let sqrtOfN = Math.sqrt(n);
    for (let i = 2; i <= sqrtOfN; i = i + 1) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(checkPrime(2));     // true
console.log(checkPrime(3));     // true
console.log(checkPrime(8));     // false
console.log(checkPrime(15));    // false
console.log(checkPrime(23));    // true
console.log(checkPrime(39));    // false
console.log(checkPrime(133));   // false
