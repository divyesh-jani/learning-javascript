// Given steps robot took (U -> up, D -> down, L -> left, R -> right)
// determine whether the robot came back to the starting position

function didReturnToOrigin(steps) {
    if (steps.length % 2 !== 0) return false;
    let vertical = 0;
    let horizontal = 0;
    for (let char of steps) {
        switch(char){
            case 'U':
                vertical = vertical + 1;
                break;
            case 'D':
                vertical = vertical - 1;
                break;
            case 'L':
                horizontal = horizontal - 1;
                break;
            case 'R':
                horizontal = horizontal + 1;
                break;
        }
    }
    return (vertical === 0 && horizontal === 0);
}

console.log(didReturnToOrigin('URDL'));         // true
console.log(didReturnToOrigin('URURDDL'));      // false
console.log(didReturnToOrigin('LUUURDRDLD'));   // true
console.log(didReturnToOrigin('LLLRRR'));       // true
console.log(didReturnToOrigin('UDUDUDUDU'));    // false
