// Convert a BST to sorted Linked List

class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// Sorted Linked List to BST
function convertToSortedLL(head) {
    let tempNode = new TreeNode(null);
    let previous = tempNode;
    function inOrder(current) {
        if (current) {
            inOrder(current.left);
            previous.left = null;
            previous.right = current;
            previous = current;
            inOrder(current.right);
        }
    }
    inOrder(head);
    previous.left = null;
    previous.right = null;
    return tempNode.right;
}
// Time Complexity O(n); Space Complexity is O(h) where is h is height of tree

let g = { value: 8, left: null, right: null }
let f = { value: 9, left: g, right: null };
let d = { value: 5, left: null, right: null };
let e = { value: 20, left: null, right: null };
let b = { value: 8, left: d, right: f };
let c = { value: 15, left: null, right: e };
let a = { value: 10, left: b, right: c };

console.log('----- Print Sorted LL -----');
printList(convertToSortedLL(a));
// 5 8 8 9 10 15 20

// Helper functions for Testing
function printList(root) {
    while (root) {
        console.log(root.value);
        root = root.right;
    }
}
