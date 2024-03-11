// Type coersion
console.log(10 + '2');       // 102
console.log('10' + '2');     // 102
console.log('10' + 2);       // 102
console.log(10 + 2);         // 12
console.log(10 - '2');       // 8
console.log('10' - '2');     // 8
console.log('10' - '2');     // 8
console.log(10 - 2);         // 8
console.log(10 * '2');       // 20
console.log('10' * '2');     // 20
console.log('10' * '2');     // 20
console.log(10 * 2);         // 20
console.log(10 / '2');       // 5
console.log('10' / '2');     // 5
console.log('10' / '2');     // 5
console.log(10 / 2);         // 5

console.log(10 + true);         // 11
console.log(10 + false);        // 10
console.log(10 + null);         // 10
console.log(10 + undefined);    // NaN
console.log('10' + true);       // 10true
console.log('10' + false);      // 10false
console.log('10' + null);       // 10null
console.log('10' + undefined);  // 10undefined
console.log(10 - true);         // 9
console.log(10 - false);        // 10
console.log(10 - null);         // 10
console.log(10 - undefined);    // NaN

// Type conversion
// Convert to Number
console.log(Number(true));          // 1
console.log(Number(false));         // 0
console.log(Number(''));            // 0
console.log(Number('test'));        // NaN
console.log(Number('36.52'));       // 36.52
console.log(Number('25'));          // 25
console.log(parseInt('36.52'));     // 36
console.log(parseInt('25'));        // 25
console.log(parseFloat('36.52'));   // 36.52
console.log(parseFloat('25'));      // 25
console.log(Number('a25'));         // NaN
console.log(parseInt('a36.52'));    // NaN
console.log(parseFloat('a36.52'));  // NaN
console.log(Number('25a'));         // NaN
console.log(parseInt('36.52a'));    // 36
console.log(parseFloat('36.52a'));  // 36.52
console.log(parseFloat('36a.52'));  // 36
console.log(parseFloat('36.a52'));  // 36

// Convert to String
console.log(String(1));             // 1
console.log(String(true));          // true
console.log(String(false));         // false
console.log(String([]));            // 
console.log(String({}));            // [object object]
console.log(String(52.36));         // 52.36
console.log(String('test'));        // test

// Convert to Bool
console.log(Boolean(1));            // true
console.log(Boolean('test'));       // true
console.log(Boolean(' '));          // true
console.log(Boolean([]));           // true
console.log(Boolean({}));           // true
console.log(Boolean(0));            // false
console.log(Boolean(''));           // false
console.log(Boolean(undefined));    // false
console.log(Boolean(null));         // false
console.log(Boolean(NaN));          // false
