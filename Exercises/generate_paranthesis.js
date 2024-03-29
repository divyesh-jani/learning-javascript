// Given a positive n pairs of paranthesis, write a function to generate all combinations of valid paranthesis.
// Examples
// n = 1
// [ '()' ]
// n = 3
// [ '((()))', '(()())', '(())()', '()(())', '()()()' ]

function generateParanthesis(n) {
    let allPossibleCombinations = [];
    function generateACombination(combination = '', openCount = 0, closeCount = 0) {
        if (combination.length === (n * 2)) {
            allPossibleCombinations.push(combination);
            return;
        }
        if (openCount < n) {
            generateACombination(combination + '(', openCount + 1, closeCount);
        }
        if (closeCount < openCount) {
            generateACombination(combination + ')', openCount, closeCount + 1);
        }
    }
    generateACombination('', 0, 0);
    return allPossibleCombinations;
}

[2,1,3,4].forEach(n => console.log(generateParanthesis(n)));


// If we need a helper function created outside to reuse in other recursive cases:

function generateValidParanthesis(n) {
    let allPossibleCombinations = _generateCombinations('', 0, 0, [], n);
    return allPossibleCombinations;
}

function _generateCombinations(combination = '', openCount = 0, closeCount = 0, allCombinations = [], n) {
    if (combination.length === (n * 2)) {
        allCombinations.push(combination);
        return;
    }
    if (openCount < n) {
        _generateCombinations(combination + '(', openCount + 1, closeCount, allCombinations, n);
    }
    if (closeCount < openCount) {
        _generateCombinations(combination + ')', openCount, closeCount + 1, allCombinations, n);
    }
    return allCombinations;
}

[2,1,3,4].forEach(n => console.log(generateValidParanthesis(n)));
