// Iterating over string variables
// All three will print the same output, converting string into array of characters

let arr = 'test';
console.log(arr.length);    // 4

console.log('for of loop')
for (let char of arr) {
    console.log(char);
}

console.log('for loop')
for (i = 0; i < arr.length; i = i + 1) {
    console.log(arr.charAt(i));
}

console.log('for in loop')
for (let char in arr) {
    console.log(arr[char]);
}
