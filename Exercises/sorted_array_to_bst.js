// Convert a sorted array to a BST

class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// Sorted Array to BST
function convertToBST(input) {
    if (input.length === 0) return null;
    let middleIndex = Math.floor((input.length - 1) / 2);
    let newRoot = new TreeNode(input[middleIndex]);
    newRoot.left = convertToBST(input.slice(0, middleIndex));
    newRoot.right = convertToBST(input.slice(middleIndex + 1));
    return newRoot;
}

// BST to Sorted Array
function convertToSortedArray(root) {
    let nodes = [];
    function getNodesInOrder(root) {
        if (root) {
            getNodesInOrder(root.left);
            nodes.push(root.value);
            getNodesInOrder(root.right);
        }
    }
    getNodesInOrder(root);
    return nodes;
}

console.log('----- Print Tree (by Level) created from Array -----');
printBSTByLevel(convertToBST([5,8,10,12,15,20,21]));
// 12 8 20 5 10 15 21

console.log('----- Print Array created from Tree -----');
// [ 5, 8, 10, 12, 15, 20, 21 ]
console.log(convertToSortedArray(convertToBST([5,8,10,12,15,20,21])));

// Helper functions for Testing
function printBSTByLevel(root) {
    if (!root) return;
    let visited = [root];
    while (visited.length) {
        let current = visited.shift();
        console.log(current.value);
        if (current.left) visited.push(current.left);
        if (current.right) visited.push(current.right);
    }
}
