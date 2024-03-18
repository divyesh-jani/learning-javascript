// Use recursion to solve exponents
function powerWithoutRecursion(base, exponent) {
    if (exponent === 0) {
        return 1;
    } else {
        let result = base;
        while (exponent > 1) {
            result = result * base;
            exponent = exponent - 1;
        }
        return result;
    }
};

console.log(powerWithoutRecursion(0,0));        // 1
console.log(powerWithoutRecursion(0,1));        // 0
console.log(powerWithoutRecursion(1,0));        // 1
console.log(powerWithoutRecursion(1,1));        // 1
console.log(powerWithoutRecursion(2,5));        // 32
console.log(powerWithoutRecursion(6,3));        // 216
console.log(powerWithoutRecursion(4,6));        // 4096

function powerWithRecursion(base, exponent) {
    if (exponent === 0) {
        return 1;
    }
    return base * (powerWithRecursion(base, exponent - 1));
};

console.log(powerWithRecursion(0,0));           // 1
console.log(powerWithRecursion(0,1));           // 0
console.log(powerWithRecursion(1,0));           // 1
console.log(powerWithRecursion(1,1));           // 1
console.log(powerWithRecursion(2,5));           // 32
console.log(powerWithRecursion(6,3));           // 216
console.log(powerWithRecursion(4,6));           // 4096
