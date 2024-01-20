// Accesses local variable
let scope = "global scope";
function checkScope() {
    let scope = "local scope";
    function f() { return scope; }
    return f();
}
console.log(checkScope());          // local scope

// Still accesses local variable even when called later
let scopeTwo = "global scope";
function checkScopeTwo() {
    let scopeTwo = "local scope";
    function f() { return scopeTwo; }
    return f;
}
console.log(checkScopeTwo()());     // local scope

// Counter using closure
function counter() {
    let n = 0;
    return {
        count: function() { return n = n + 1 },
        reset: function() { n = 0 }
    };
};

let c = counter(), d = counter();
console.log(c.count());             // 1
console.log(d.count());             // 1
console.log(c.reset());             // undefined
console.log(c.count());             // 1
console.log(d.count());             // 2
console.log(c.count());             // 2
console.log(d.count());             // 3

// Sample closure function
function multiplier(a) {
    return (x) => x * a;
};
let double = multiplier(2);
console.log(double);                // returns anonymous function
console.log(double(10));            // 20