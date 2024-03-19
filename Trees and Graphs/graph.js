// Undirected graph

class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = new Set();
        }
    }

    addEdge(fromVertex, toVertex) {
        this.addVertex(fromVertex);
        this.addVertex(toVertex);
        this.adjacencyList[fromVertex].add(toVertex);
        this.adjacencyList[toVertex].add(fromVertex);
    }

    display() {
        for (let vertex in this.adjacencyList) {
            console.log(vertex + ' : ' + [...this.adjacencyList[vertex]]);
        }
    }

    hasEdge(fromVertex, toVertex) {
        if (!this.adjacencyList[fromVertex] || !this.adjacencyList[toVertex]) {
            return false;
        }
        return this.adjacencyList[fromVertex].has(toVertex) && this.adjacencyList[toVertex].has(fromVertex);
    }

    removeVertex(vertex) {
        if (this.adjacencyList[vertex]) {
            for (let entry of this.adjacencyList[vertex]) {
                this.adjacencyList[entry].delete(vertex);
            }
            delete this.adjacencyList[vertex];
        }
    }

    removeEdge(fromVertex, toVertex) {
        if (!this.adjacencyList[fromVertex] || !this.adjacencyList[toVertex]) {
            return;
        }
        this.adjacencyList[fromVertex].delete(toVertex);
        this.adjacencyList[toVertex].delete(fromVertex);
    }
}

let myGraph = new Graph();
myGraph.addVertex('A');
myGraph.addVertex('D');
myGraph.addEdge('A', 'B');
myGraph.addEdge('A', 'C');
console.log(myGraph.hasEdge('A', 'E'));     // false
console.log(myGraph.hasEdge('A', 'C'));     // true
console.log(myGraph.hasEdge('B', 'C'));     // false
console.log('---- Display graph ----');
myGraph.display();
/*
    A : B,C
    D : 
    B : A
    C : A
*/

myGraph.removeVertex('D');
myGraph.removeVertex('B');
myGraph.removeVertex('E');
console.log('---- After removing vertices ----');
myGraph.display();
/*
    A : C
    C : A
*/
myGraph.addVertex('D');
myGraph.addEdge('B', 'A');
console.log('---- Reverting to original graph ----');
myGraph.display();
/*
    A : C,B
    C : A
    D : 
    B : A
*/

myGraph.removeEdge('A', 'D');
myGraph.removeEdge('A', 'E');
myGraph.removeEdge('A', 'C');
console.log('---- After removing edges ----');
myGraph.display();
/*
    A : B
    C : 
    D : 
    B : A
*/
