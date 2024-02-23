// Two ways to represent relationships within a graph

/*
Adam            Dan
 *               *
 *               *
 *               *
 *               *
Bob * * * * * * Carl
 * 
 * 
 * 
 * 
Ernie
*/

// Above graph can be represented by:

let adjacencyMatrix = [
    [0, 1, 0, 0, 0],
    [1, 0, 1, 0, 1],
    [0, 1, 0, 1, 0],
    [0, 0, 1, 0, 0],
    [0, 1, 0, 0, 0]
];

let adjacencyList = {
    A: [B],
    B: [A, C, E],
    C: [B, D],
    D: [C],
    E: [B]
};

/* Advantages of adjacency list:
 * Very efficient compared to matric since we store only edges that exist.
 * Difficult to store additional data in matrix such as weight of edge.
 * Finding and inserting adjacent nodes is 0(1) compared to 0(n) in matrix.
 */
