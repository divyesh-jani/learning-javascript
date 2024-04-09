// Convert a sorted Linked List to a BST
// Same function can be used to convert a Linked List to Balanced Binary Tree

class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// Sorted Linked List to BST
function convertToBST(head) {
    function sortedListToBSTRecursive(nodes) {
        if (nodes <= 0) return null;
        let left = sortedListToBSTRecursive(Math.floor(nodes / 2));
        let root = new TreeNode(head.value);
        root.left = left;
        head = head.next;
        root.right = sortedListToBSTRecursive(nodes - Math.floor(nodes / 2) - 1);
        return root;
    }

    function countNodes(head) {
        let count = 0;
        let temp = head;
        while (temp !== null) {
            count = count + 1;
            temp = temp.next;
        }
        return count;
    }
    let nodeCount = countNodes(head);
    return sortedListToBSTRecursive(nodeCount);
}
// Time Complexity O(n)

let g = { value: 21, next: null };
let f = { value: 20, next: g };
let e = { value: 15, next: f };
let d = { value: 12, next: e };
let c = { value: 10, next: d };
let b = { value: 8, next: c };
let a = { value: 5, next: b };

console.log('----- Print Tree (by Level) created from Sorted LL -----');
printBSTByLevel(convertToBST(a));
// 12, 8, 20, 5, 10, 15, 21

console.log('----- Print Tree created from Sorted LL In Order -----');
printBSTInOrder((convertToBST(a)));
// 5, 8, 10, 12, 15, 20, 21

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

function printBSTInOrder(root) {
    if (root) {
        printBSTInOrder(root.left);
        console.log(root.value);
        printBSTInOrder(root.right);
    }
}

let w = { value: 1000, next: null };
let v = { value: 25, next: w };
let u = { value: 100, next: v };
let t = { value: 40, next: u };
let s = { value: 20, next: t };
let r = { value: 50, next: s };
let q = { value: 75, next: r };
let p = { value: 10, next: q };

console.log('----- Print Tree (by Level) created from LL -----');
printBSTByLevel(convertToBST(p));
// 40, 50, 25, 75, 20, 100, 1000, 10

console.log('----- Print Tree created from LL In Order -----');
printBSTInOrder((convertToBST(p)));
// 10, 75, 50, 20, 40, 100, 25, 1000
