// Balance a Binary Search Tree
// Can also be used to balance any other Binary Tree

class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function balanceTheBST(head) {
    let inOrderNodes = [];
    function traverseInOrder(head) {
        if (head) {
            traverseInOrder(head.left);
            inOrderNodes.push(head.value);
            traverseInOrder(head.right);
        }
    };
    traverseInOrder(head);
    function convertToBST(input) {
        if (input.length === 0) return null;
        let middleIndex = Math.floor((input.length - 1) / 2);
        let newRoot = new TreeNode(input[middleIndex]);
        newRoot.left = convertToBST(input.slice(0, middleIndex));
        newRoot.right = convertToBST(input.slice(middleIndex + 1));
        return newRoot;
    }
    return convertToBST(inOrderNodes);
}

// Testing
let g = { value: 21, left: null, right: null };
let f = { value: 28, left: null, right: null };
let e = { value: 22, left: g, right: null };
let d = { value: 25, left: e, right: f };
let c = { value: 20, left: null, right: d };
let b = { value: 15, left: null, right: c };
let a = { value: 10, left: null, right: b };

console.log('----- Before Balancing -----')
console.log('BST by Level:');
printBSTByLevel(a);
// 10 15 20 25 22 28 21
console.log(a);
/*
  10
   \
    15
     \
      20
       \
        25
       /  \
     22    28
    /
   21
*/
console.log('BST in Order:');
printBSTInOrder(a);
// 10 15 20 21 22 25 28

console.log('----- Balanced BST-----');
let newRoot = balanceTheBST(a);
console.log('BST by Level:');
printBSTByLevel(newRoot);
// 21 15 25 10 20 22 28
console.log(newRoot);
/*
         21
        /  \
      15    25
     / \    / \
   10  20  22  28
*/
console.log('BST in Order:');
printBSTInOrder(newRoot);
// 10 15 20 21 22 25 28

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
