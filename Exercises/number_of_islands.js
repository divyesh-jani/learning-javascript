/*
Given an i x j 2-dimentional grid map of 1s (land) and 0s (water), return the number of islands.
An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically.
You may assume all four edges of the grid are surrounded by water.
*/

function numberOfIslandsDFS(grid) {
    let totalIslands = 0;
    function searchDepthFirst(i, j) {
        if (i >= 0 && j >= 0 && i < grid.length && j < grid[i].length && grid[i][j] === 1) {
            grid[i][j] = 0;
            searchDepthFirst(i + 1, j);
            searchDepthFirst(i, j + 1);
            searchDepthFirst(i - 1, j);
            searchDepthFirst(i, j - 1);
        }
    };
    for (let i = 0; i < grid.length; i = i + 1) {
        for (let j = 0; j < grid[i].length; j = j + 1) {
            if (grid[i][j] === 1) {
                totalIslands = totalIslands + 1;
                searchDepthFirst(i, j);
            }
        }
    }
    return totalIslands;
}

function numberOfIslandsBFS(grid) {
    let totalIslands = 0;
    function searchBreadthFirst(i, j) {
        let queue = [[i, j]];
        while (queue.length) {
            const [x, y] = queue.pop();
            grid[x][y] = 0;
            const arr = [
                [x + 1, y],
                [x, y + 1],
                [x - 1, y],
                [x, y - 1],
            ];
            for (let i = 0; i < arr.length; i = i + 1) {
                if (arr[i][0] >= 0 && arr[i][0] < grid.length && arr[i][1] >= 0 &&
                    arr[i][1] < grid[0].length && grid[arr[i][0]][arr[i][1]] === 1) {
                    queue.push([arr[i][0], arr[i][1]]);
                }
            }
        }
    };
    for (let i = 0; i < grid.length; i = i + 1) {
        for (let j = 0; j < grid[i].length; j = j + 1) {
            if (grid[i][j] === 1) {
                totalIslands = totalIslands + 1;
                searchBreadthFirst(i, j);
            }
        }
    }
    return totalIslands;
}

// Testing
console.log('----- Using DFS -----');
let gridA = [
    [1, 1, 1, 1, 0],
    [1, 1, 0, 1, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0]
];
console.log(numberOfIslandsDFS(gridA));        // 1

let gridB = [
    [1, 1, 0, 0, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 1, 1]
];
console.log(numberOfIslandsDFS(gridB));        // 3

let gridC = [
    [0, 1, 0, 0, 0, 1, 1, 1, 0, 1],
    [1, 1, 0, 0, 0, 1, 0, 0, 0, 1],
    [0, 0, 1, 0, 0, 1, 0, 1, 0, 1],
    [0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
    [1, 1, 0, 1, 0, 0, 1, 0, 0, 0],
    [0, 1, 0, 1, 1, 1, 1, 0, 1, 1]
];
console.log(numberOfIslandsDFS(gridC));        // 7

console.log('----- Using BFS -----');
let gridD = [
    [1, 1, 1, 1, 0],
    [1, 1, 0, 1, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0]
];
console.log(numberOfIslandsBFS(gridD));        // 1

let gridE = [
    [1, 1, 0, 0, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 1, 1]
];
console.log(numberOfIslandsBFS(gridE));        // 3

let gridF = [
    [0, 1, 0, 0, 0, 1, 1, 1, 0, 1],
    [1, 1, 0, 0, 0, 1, 0, 0, 0, 1],
    [0, 0, 1, 0, 0, 1, 0, 1, 0, 1],
    [0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
    [1, 1, 0, 1, 0, 0, 1, 0, 0, 0],
    [0, 1, 0, 1, 1, 1, 1, 0, 1, 1]
];
console.log(numberOfIslandsBFS(gridF));        // 7
