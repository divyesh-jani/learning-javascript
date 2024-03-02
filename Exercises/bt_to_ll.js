// Convert a Binary Tree to Linked List

class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function convertTreePreOrderToLinkedList(root) {
    let cachedRoot = root;
    while (root){
        if(root.left){
            let current = root.left;
            while (current.right){
                current = current.right;
            }
            current.right = root.right;
            root.right = root.left;
            root.left = null;
        }
        root = root.right;
    }
    return cachedRoot;
}
// convertTreePreOrderToLinkedList: Morris Traversal, Time Complexity: O(n), Space Complexity O(1)

function reversePostOrderToGetPreOrder(head) {
    let previous = null;
    function reversePostOrder(current) {
        if (current) {
            reversePostOrder(current.right);
            reversePostOrder(current.left);
            current.right = previous;
            current.left = null;
            previous = current;
        }
    }
    reversePostOrder(head);
    return previous;
}
// reversePostOrderToGetPreOrder: Time Complexity: O(n), Space Complexity O(h) where h is height of tree since we use Recursion

function convertTreeInOrder(head) {
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

function convertTreePostOrder(head) {
    let tempNode = new TreeNode(null);
    let previous = tempNode;
    function postOrder(current) {
        if (current) {
            postOrder(current.left);
            postOrder(current.right);
            previous.left = null;
            previous.right = current;
            previous = current;
        }
    }
    postOrder(head);
    previous.left = null;
    previous.right = null;
    return tempNode.right;
}

let g = { value: 12, left: null, right: null };
let f = { value: 9, left: null, right: g };
let d = { value: 5, left: null, right: null };
let e = { value: 20, left: null, right: null };
let b = { value: 8, left: d, right: f };
let c = { value: 15, left: null, right: e };
let a = { value: 10, left: b, right: c };

function printList(listHead) {
    let list = 'Start ->';
    while (listHead) {
        list = list + ' ' + listHead.value + ' ->';
        listHead = listHead.right;
    }
    list = list + ' End';
    console.log(list);
}

/*
         10
        /  \
       8    15
      / \     \
     5   9     20
          \
          12
*/

// Once tree is converted to LL, all lefts are null and thus converting again will break links between nodes
// So run any one traversal conversion at a time

printList(convertTreePreOrderToLinkedList(a));
// Start -> 10 -> 8 -> 5 -> 9 -> 12 -> 15 -> 20 -> End

// printList(reversePostOrderToGetPreOrder(a));
// Start -> 10 -> 8 -> 5 -> 9 -> 12 -> 15 -> 20 -> End

// printList(convertTreeInOrder(a));
// Start -> 5 -> 8 -> 9 -> 12 -> 10 -> 15 -> 20 -> End

// printList(convertTreePostOrder(a));
// Start -> 5 -> 12 -> 9 -> 8 -> 20 -> 15 -> 10 -> End
