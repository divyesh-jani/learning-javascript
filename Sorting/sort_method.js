/* sort() : returns original array, now sorted
 * The default sort order is ascending, built upon converting the elements into strings
 * then comparing their sequences of UTF-16 code units values.
 * Numbers < Uppercase < Lowercase ; sortedListExample: [13, 2, Base, add]
 */

console.log(['subtract', 'add', 'divide', 'multiply', 'exponent'].sort());
// Result:  [ 'add', 'divide', 'exponent', 'multiply', 'subtract' ]

console.log(['subtract', 'add', 'Divide', 'Multiply', 'exponent'].sort());
// Result:  [ 'Divide', 'Multiply', 'add', 'exponent', 'subtract' ]

console.log(['2', '1', 'Divide', 'Multiply', 'exponent'].sort());
// Result:  [ '1', '2', 'Divide', 'Multiply', 'exponent' ]

console.log([3, '5', 11, 7, 90, '80', 225].sort());
// Result:  [ 11, 225, 3, '5', 7, '80', 90 ]

console.log([3, 5, 11, 7, 90, 80, 225].sort());
// Result:  [ 11, 225, 3, 5, 7, 80, 90 ]

/* sort(compareFn) : returns original array, now sorted
 * compareFn: function that defines sort order.
 * The return value should be a number whose sign indicates the relative order of the two elements:
 * negative if a is less than b (no change needed, keep a before b), positive if a is greater than b (push a after b)
 * and zero if they are equal. NaN is treated as 0.
 */

console.log([3, 20, 5, 11, 7, 90, 80, 225, 100].sort((a, b) => {
    if (a < b) return -1;       // any negative number is acceptable, negative means keep left
    if (a > b) return 1;        // any positive number is acceptable, positive means move to right
    return 0;                   // this means a == b
}));
// Result: [ 3, 5, 7, 11, 20, 80, 90, 100, 225 ]

// Since any positive difference means move a to right, this numeric comparison can be simplified as:
console.log([3, 20, 5, 11, 7, 90, 80, 225, 100].sort((a, b) => a - b));
// Result: [ 3, 5, 7, 11, 20, 80, 90, 100, 225 ]

// Reverse sort
console.log([3, 20, 5, 11, 7, 90, 80, 225, 100].sort((a, b) => b - a));
// Result: [ 225, 100, 90, 80, 20, 11, 7, 5, 3 ]

// Empty values will end up last, just before undefined values if sorting in ascending order
console.log([, undefined, -55, -5].sort());         // [-5, -55, undefined, empty]

// Sorting Objects
let someFamily = [{ name: 'Tom', commits: 60},
    { name: 'adam', commits: 80},
    { name: 'BOB', commits: 50},
    { name: 'Pat', commits: 60},
    { name: 'saM,', commits: 70}
];

let compareByCommits = (a, b) => a.commits - b.commits;

function compareByName(a, b) {
    a = a.name.toUpperCase();   // or let x = a.name.toUpperCase();
    b = b.name.toUpperCase();   // or let y = b.name.toUpperCase();
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
}

console.log(someFamily.sort(compareByCommits));     // 50 BOB, 60 Tom, 60 Pat, 70 saM, 80 adam
console.log(someFamily.sort(compareByName));        // adam 80, BOB 50, Pat 60, saM 70, Tom 60
