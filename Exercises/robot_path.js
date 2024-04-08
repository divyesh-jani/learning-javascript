/*
Village Imaginary consists of 11 houses with 14 roads between them.
Develop mail delivering algorithm.

Farm * * * * * Mark * * * Pat * * * Alice * * * Carl
 *               *                    *
 *               *                    *
 *               *                    *
 *               *                    *
Gavin * *  Sam * * * * * Tom * * * * Bob
 *                         *
 *                         *
 *                         *
 *                         *
 *                         *
Ernie * * * * * Dan * * *  *

*/

const roads = [
    'Alice-Bob',
    'Alice-Carl',
    'Alice-Pat',
    'Bob-Tom',
    'Dan-Ernie',
    'Dan-Tom',
    'Ernie-Gavin',
    'Gavin-Sam',
    'Gavin-Farm',
    'Farm-Mark',
    'Mark-Pat',
    'Mark-Sam',
    'Mark-Tom',
    'Sam-Tom'
];

function buildGraph(roads) {
    let graph = {};
    function addEdge(from, to) {
        if (graph[from]) {
            graph[from].push(to);
        } else {
            graph[from] = [to];
        }
    }
    for (let [from, to] of roads.map(road => road.split('-'))) {
        addEdge(from, to);
        addEdge(to, from);
    }
    /* same as above for loop
    for (let i of roads.map(road => road.split('-'))) {
        addEdge(i[0], i[1]);
        addEdge(i[1], i[0]);
    }
    */
    return graph;
}

console.log(buildGraph(roads));
