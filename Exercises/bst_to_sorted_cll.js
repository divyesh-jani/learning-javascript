// Convert a BST to sorted Circular Linked List

class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// BST to Sorted Circular Linked List
function convertToSortedCLL(head) {
    let tempNode = new TreeNode(null);
    let previous = tempNode;
    function inOrder(current) {
        if (current) {
            inOrder(current.left);
            previous.right = current;
            current.left = previous;
            previous = current;
            inOrder(current.right);
        }
    }
    inOrder(head);
    tempNode.right.left = previous;
    previous.right = tempNode.right;
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

console.log('----- Print Sorted CLL -----');
printList(convertToSortedCLL(a));
/*
root left right
    5 20 8
    8 5 8
    8 8 9
    9 8 10
    10 9 15
    15 10 20
    20 15 5
    5 20 8
    8 5 8
    8 8 9
*/

// Helper functions for Testing
function printList(root) {
    console.log('root', 'left', 'right');
    let i = 0;
    while (root && i < 10) {
        console.log(root.value, root.left ? root.left.value : 'null', root.right ? root.right.value : null);
        root = root.right;
        i = i + 1;
    }
}
