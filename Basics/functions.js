console.log(hoisted());     // Hoisted function.
console.log(unhoisted());   // Undefined

// Function expression
var unhoisted = function(){
    return "Unhoisted function."
}

function hoisted() {
    return "Hoisted function."
}

console.log(hoisted());     // Hoisted function.
console.log(unhoisted());   // Unhoisted function.

// IIFE: Immediately invoked function expression
let multiplyByFive = (function(a) {
    return a * 5;
});
console.log(multiplyByFive(20));        // 100

let multiplyByTen = (function(a) {
    return a * 10;
}(5));
console.log(multiplyByTen);             // 50

let multiplyByTwenty = (function(a) {
    return function(b) {
        return a * b;
    }
}(20));
console.log(multiplyByTwenty(10));      // 200

// Function arguments length property
function chechArgsLength(a, b, c) {
    // arguments.callee.length => Always 3, no matter what was passed
    // arguments.length => Depends on what was passed in function invocation
    (arguments.length !== arguments.callee.length) ? console.log('Args do not match!') : console.log('Args match!');
};
chechArgsLength(20);                       // Args do not match!
chechArgsLength(null, 5, 'a');             // Args match!
chechArgsLength(5, 10, 15, 20);            // Args do not match!
chechArgsLength();                         // Args do not match!
chechArgsLength({}, [], undefined);        // Args match!