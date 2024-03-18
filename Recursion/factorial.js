// Not using recursion
function factorialLoop(x) {
    let input = x;
    if (typeof(x) !== 'number' || (x % 1) !== 0 || x < 0 ) {
        console.log("Enter a positive integer!");
    } else {
        let result = 1;
        while (x > 1) {
            result = result * x;
            x = x - 1;
        }
        console.log('Factorial of ' + input + ' is: ' + result);
    }
}

[5,0,-3,'a',true,3.6,10.0,0.1,8].forEach(a => factorialLoop(a));

// Using recursion
function factorialRecursion(x) {
    if (typeof(x) !== 'number' || (x % 1) !== 0 || x < 0 ) {
        return "Enter a positive integer!";
    } else if (x === 0 || x === 1) {
        return 1;
    } else {
        let result = x * factorialRecursion(x - 1);
        return result;
    }
}

[5,0,-3,'a',true,3.6,10.0,0.1,8].forEach(a => console.log('Factorial of ' + a + ' is: ' + factorialRecursion(a)));
