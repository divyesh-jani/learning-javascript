/*
Cipher any word such that every alphabetic character is replaced with the character 3 letters higher (wrapping around from Z to A),
and every numeric character replaced with the character 3 digits higher (wrapping around from 9 to 0).
non-alphanumeric characters remain unchanged.
Example: 
    input = Zebra-493?
    rotationFactor = 3
    output = Cheud-726?
*/


function rotationalCipher(input, rotationFactor) {
    let stringRotationFactor = rotationFactor % 26;
    let numberRotationFactor = rotationFactor % 10;
    let rotatedInputArray = [...input].map((element, index) => {
        const currentCharCode = input.charCodeAt(index);
        if (currentCharCode >= 65 && currentCharCode <= 90) {
            let transformed = currentCharCode + stringRotationFactor; // this may be greater than 90
            // if less than 90, all good
            // if greater than 90, reduce 65
            // e.g. for 65 rotate 5 -> 70 all good; for 90 rotate 5 -> 95 - problem
            // if > 90, (91 should be 65)
            // x - 90 + 64 => x - 26
            return String.fromCharCode(transformed > 90 ? transformed - 26 : transformed);
        } else if (currentCharCode >= 97 && currentCharCode <= 122) {
            let transformed = currentCharCode + stringRotationFactor;
            return String.fromCharCode(transformed > 122 ? transformed - 26 : transformed);
        } else if (currentCharCode >= 48 && currentCharCode <= 57) {
            return ((Number(element) + numberRotationFactor) % 10);
        } else {
            return element;
        }
    });
    return rotatedInputArray.join('');
}


let inputOne = "All-convoYs-9-be:Alert1.";
let rotationFactorOne = 4;
let expectedResultOne = 'Epp-gsrzsCw-3-fi:Epivx5.'
// console.log(rotationalCipher(inputOne, rotationFactorOne));     // "Epp-gsrzsCw-3-fi:Epivx5."
console.log(rotationalCipher(inputOne, rotationFactorOne) === expectedResultOne);   // true

let inputTwo = "abcdZXYzxy-999.@";
let rotationFactorTwo = 200;
let expectedResultTwo = 'stuvRPQrpq-999.@'
// console.log(rotationalCipher(inputTwo, rotationFactorTwo));     // "stuvRPQrpq-999.@"
console.log(rotationalCipher(inputTwo, rotationFactorTwo) === expectedResultTwo);   // true

let inputThree = "A&a-D#d8zYb";
let rotationFactorThree = 3;
let expectedResultThree = 'D&d-G#g1cBe'
// console.log(rotationalCipher(inputThree, rotationFactorThree));     // "D&d-G#g1cBe"
console.log(rotationalCipher(inputThree, rotationFactorThree) === expectedResultThree);   // true
