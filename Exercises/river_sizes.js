/*
Given a grid map of 1s (water) and 0s (land), return size of all rivers.
A river flows up, down, left, and right but not diagonally.
You may assume all four edges of the grid are surrounded by land.
*/

function getRiverSizesDFS(area) {
    let rivers = [];
    let dfsCount = 0;
    function dfsRiver(x, y) {
        if (x >= 0 && y >= 0 && x < area.length && y < area[x].length && area[x][y] === 1) {
            dfsCount = dfsCount + 1;
            area[x][y] = 0;
            dfsRiver(x - 1, y);
            dfsRiver(x + 1, y);
            dfsRiver(x, y - 1);
            dfsRiver(x, y + 1);
        }
    }
    for (let i = 0; i < area.length; i = i + 1) {
        for (let j = 0; j < area[i].length; j = j + 1) {
            if (area[i][j] === 1) {
                dfsRiver(i, j);
                rivers.push(dfsCount);
                dfsCount = 0;
            }
        }
    }
    return rivers;
}

function getRiverSizesBFS(input) {
    let results = [];
    function bfsRiver(x, y) {
        input[y][x] = 0;
        let size = 1;
        [[x + 1, y], [x, y + 1], [x - 1, y], [x, y - 1]].forEach(([i, j]) => {
            if (input[j] && input[j][i]) {
                size = size + bfsRiver(i, j);
            }
        });
        return size;
    };
    input.forEach((row, y) => {
        row.forEach((cell, x) => {
            if (input[y][x] === 1) {
                results.push(bfsRiver(x, y));
            }
        });
    });
    return results;
};

// Testing
let matrixA1 = [
    [1, 0, 0, 1, 0],
    [1, 0, 1, 0, 0],
    [0, 0, 1, 0, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 0]
];

let matrixA2 = [
    [1, 0, 0, 1, 0],
    [1, 0, 1, 0, 0],
    [0, 0, 1, 0, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 0]
];

console.log(getRiverSizesDFS(matrixA1));    // [ 2, 1, 5, 2, 2 ]
console.log(getRiverSizesBFS(matrixA2));    // [ 2, 1, 5, 2, 2 ]

let matrixB1 = [
    [1, 0, 0],
    [1, 0, 1],
    [0, 0, 1],
    [1, 0, 1]
];

let matrixB2 = [
    [1, 0, 0],
    [1, 0, 1],
    [0, 0, 1],
    [1, 0, 1]
];

console.log(getRiverSizesDFS(matrixB1));    // [ 2, 3, 1 ]
console.log(getRiverSizesBFS(matrixB2));    // [ 2, 3, 1 ]

let matrixC1 = [
    [1],
    [1, 0, 1, 0, 0],
    [0, 0, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1]
];

let matrixC2 = [
    [1],
    [1, 0, 1, 0, 0],
    [0, 0, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1]
];

console.log(getRiverSizesDFS(matrixC1));    // [ 2, 5, 2, 1 ]
console.log(getRiverSizesBFS(matrixC2));    // [ 2, 5, 2, 1 ]
