// Given a string containing paranthesis '{','}','[',']','(',')' determine if the string is valid

function areParanthesisValid(str) {
    if (str.length % 2 === 1) return false;
    let unresolvedStack = [];
    let matchMap = { ']': '[', '}': '{', ')': '('};
    for (let char of str) {
        if (!matchMap[char]) {
            unresolvedStack.push(char);
        }
        else {
            if (matchMap[char] !== unresolvedStack.pop()) return false;
        }
    }
    return unresolvedStack.length ? false: true;
};

console.log(['()', '()[]{}', '(]', '([)]', '{[]}', '[({}))', '[[[]]'].map(str => areParanthesisValid(str)));
// [ true, true, false, false, true, false, false ]
