// Reverse a string using Recursion

function reverseString(inputStr) {
    if (inputStr.length <= 1) return inputStr;
    return inputStr[inputStr.length - 1] + reverseString(inputStr.slice(0, inputStr.length - 1));
}

console.log(reverseString('hello'));                // olleh
console.log(reverseString('rotator'));              // rotator
console.log(reverseString('surely this works'));    // skrow siht ylerus
console.log(reverseString('a'));                    // a
console.log(reverseString('0123456789'));           // 9876543210
