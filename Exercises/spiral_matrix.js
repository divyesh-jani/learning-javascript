// Given an n x m matrix, print the matrix in spiral order

function printMatrixSpiral(matrix) {
    let result = [];
    let left = 0;
    let top = 0;
    let right = matrix[0].length - 1;
    let bottom = matrix.length - 1;
    while (left <= right && top <= bottom) {
        let i = left;
        while (i <= right) {
            result.push(matrix[top][i]);
            i = i + 1;
        }
        top = top + 1;
        i = top;
        while (i <= bottom) {
            result.push(matrix[i][right])
            i = i + 1;
        }
        right = right - 1;
        i = right;
        while (i >= left) {
            result.push(matrix[bottom][i]);
            i = i - 1;
        }
        bottom = bottom - 1;
        i = bottom;
        while (i >= top) {
            result.push(matrix[i][left]);
            i = i - 1;
        }
        left = left + 1;
    }
    return result;
}

let a = [[1,2,3],[4,5,6],[7,8,9]];
console.log(printMatrixSpiral(a));
// [ 1, 2, 3, 6, 9, 8, 7, 4, 5 ]

let b = [[1,2,3,16],[4,5,6,17],[7,8,9,18],[10,11,12,19],[13,14,15,20]];
console.log(printMatrixSpiral(b));
// [ 1, 2, 3, 16, 17, 18, 19, 20, 15, 14, 13, 10, 7, 4, 5, 6, 9, 12, 11, 8 ]
