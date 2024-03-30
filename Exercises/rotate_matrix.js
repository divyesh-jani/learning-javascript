// Rotate matrix by 90 degrees without using extra space

function rotateMatrixClockwise(matrix) {
    let size = matrix.length - 1;
    for (let row = 0; row < size / 2; row = row + 1) {
        for (let col = row; col < size - row; col = col + 1) {
            let temp = matrix[row][col];
            matrix[row][col] = matrix[size - col][row];
            matrix[size - col][row] = matrix[size - row][size - col];
            matrix[size - row][size - col] = matrix[col][size - row];
            matrix[col][size - row] = temp;
        }
    }
    return matrix;
}

function rotateMatrixCounterClockwise(matrix) {
    let size = matrix.length - 1;
    for (let row = 0; row < size / 2; row = row + 1) {
        for (let col = row; col < size - row; col = col + 1) {
            let temp = matrix[row][col];
            matrix[row][col] = matrix[col][size - row];
            matrix[col][size - row] = matrix[size - row][size - col];
            matrix[size - row][size - col] = matrix[size - col][row];
            matrix[size - col][row] = temp;
        }
    }
    return matrix;
}

// Testing
function printMatrix(matrix) {
    let data = [];
    for (let row of matrix) {
        for (let value of row) {
            data.push(value);
        }
    }
    console.log(data);
}

let a = [[1,2,3],[4,5,6],[7,8,9]];
printMatrix(rotateMatrixClockwise(a));
/*
1   2   3       7   4   1
4   5   6   =>  8   5   2
7   8   9       9   6   3
*/

let b = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]];
printMatrix(rotateMatrixClockwise(b));
/*
1   2   3   4       13  9   5   1
5   6   7   8   =>  14  10  6   2
9   10  11  12      15  11  7   3
13  14  15  16      16  12  8   4
*/

let c = [[1,2,3],[4,5,6],[7,8,9]];
printMatrix(rotateMatrixCounterClockwise(c));
/*
1   2   3       3   6   9
4   5   6   =>  2   5   8
7   8   9       1   4   7
*/

let d = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]];
printMatrix(rotateMatrixCounterClockwise(d));
/*
1   2   3   4       4   8   12  16
5   6   7   8   =>  3   7   11  15
9   10  11  12      2   6   10  14
13  14  15  16      1   5   9   13
*/
