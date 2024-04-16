
function useWhile(input) {
    while (input <= 10) {
        console.log(input);
        input = input + 1;
    }
}

useWhile(1);

function useDoWhile(input) {
    // Always executed at least once
    do {
        console.log(input);
        input = input + 1;
    } while (input <= 10);
}

useDoWhile(1);

function useFor(input) {
    for (let i = input; i <= 10; i = i + 1) {
        console.log(i);
    }
}

useFor(1);

function useForInArray(input) {
    for (i in input) {
        console.log("Index is " + i + ", Value is " + input[i]);
    }
}

useForInArray([1,2,3,4,5]);

function useForOfArray(input) {
    for (i of input) {
        console.log("Value is " + i);
    }
}

useForOfArray([1,2,3,4,5]);

function useForInObject(input) {
    for (i in input) {
        console.log("Key is " + i + ", Value is " + input[i])
    }
}

useForInObject({a: 1, b: 2, c: 3});

// Create chessboard
function createChessboard(sides) {
    let alternateChar = '#';
    let chessBoard = '';
    for (let i = 0; i < sides; i = i + 1) {
        if (i % 2 === 0) {
            for (let j = 0; j < sides; j = j + 1) {
                if (j % 2 === 0) {
                    chessBoard = chessBoard + alternateChar;
                } else {
                    chessBoard = chessBoard + ' ';
                }
            }
        } else {
            for (let j = 0; j < sides; j = j + 1) {
                if (j % 2 === 0) {
                    chessBoard = chessBoard + ' ';
                } else {
                    chessBoard = chessBoard + alternateChar;
                }
            }
        }
        chessBoard = chessBoard + '\n';
    }
    return chessBoard;
};
console.log(createChessboard(8));
