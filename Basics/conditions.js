function checkEven(num) {
    if (num % 2 === 0) {
        return num + " is an even number.";
    } else {
        return num + " is odd.";
    }
};

[-5,-2,0,1,8].forEach(a => console.log(checkEven(a)));

function checkGrade(grade) {
    switch (grade) {
        case 'A':
            return 'Excellent';
        case 'B':
            return 'Good';
        case 'C':
            return 'Satisfactory';
        case 'F':
            return 'Fail';
        default:
            return 'Unknown'
    }
}

['C','F','A','B','Z'].forEach(a => console.log(checkGrade(a)));


function findType(x) {
    switch(typeof x) {
        case 'number':
            return x + ' is number.';
        case 'string':
            return x + ' is string.';
        case 'boolean':
            return x + ' is boolean.';
        default:
            return x + ' is something else.';
    }
}

['test', false, 5, { 'x': 0 }, null].forEach(a => console.log(findType(a)));