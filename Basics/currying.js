// Currying is when a function with multiple arguments is transformed into
// a sequence of nesting functions that take one argument at a time.
// f(a,b,c) is transformed to f(a)(b)(c)
// Used to compose reusable functions

function sum(a, b, c) {
    return a + b + c;
}
console.log(sum(2, 3, 5));          // 10

// Same function can be curried as:

function curry(fn) {
    return function(a) {
        return function(b) {
            return function(c) {
                return fn(a, b, c);
            }
        }
    }
}

let curriedSum = curry(sum);
console.log(curriedSum(2)(3)(5));   // 10

// Same as
let addTwo = curriedSum(2);
let addThree = addTwo(3);
let addFive = addThree(5);
console.log(addFive);               // 10

// Infinite Currying
// Return sum of all the arguments passed
function sumInfinite(a) {
    return function(b) {
        if (b) {
            return sumInfinite(a + b);
        }
        return a;
    }
}

console.log(sumInfinite(2)());                          // 2
console.log(sumInfinite(2)(3)());                       // 5
console.log(sumInfinite(2)(3)(5)());                    // 10
console.log(sumInfinite(2)(3)(5)(10)());                // 20
console.log(sumInfinite(2)(3)(5)(10)(-50)());           // -30
console.log(sumInfinite(2)(3)(5)(10)(-50)(100)());      // 70
console.log(sumInfinite(2)(3)(5)(10)(-50)(100)(2)());   // 72
console.log(sumInfinite(2)(3)(5)(10)(-50)(100)(2)(0));  // 72

// Return product of all the arguments passed

function keepMultiplying(a) {
    return function(n) {
        if (n) {
            return keepMultiplying(a * n);
        }
        return a;
    }
}

console.log(keepMultiplying(2)());                      // 2
console.log(keepMultiplying(2)(3)());                   // 6
console.log(keepMultiplying(2)(3)(5)());                // 30
console.log(keepMultiplying(2)(3)(5)(8)());             // 240
console.log(keepMultiplying(2)(3)(5)(8)(10)(0));        // 2400
console.log(keepMultiplying(2)(3)(5)(8)(10)());         // 2400
