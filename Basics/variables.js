// var, let, and const

console.log(test);      // undefined
var test = 'test';
console.log(test);      // test

console.log(test2);      // Error // let and const are hoisted but temporal dead zone, so cannot be accessed.
let test2 = 'test2';
console.log(test2);      // test

let aLet = 5;
const aConst = 5;
aLet = 10;          // aLet becomes 10
aConst = 10;        // Error, cannot be reassigned
