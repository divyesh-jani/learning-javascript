// Depth First Search (DFS)

class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(node, root = this.root) {
        let newNode = new TreeNode(node);
        if (!root) {
            this.root = newNode;
        } else {
            this._insertNode(root, newNode);
        }
    }

    _insertNode(rootNode, newNode) {
        if (newNode.value < rootNode.value) {
            if (!rootNode.left) {
                rootNode.left = newNode;
            } else {
                this._insertNode(rootNode.left, newNode);
            }
        } else {
            if (!rootNode.right) {
                rootNode.right = newNode;
            } else {
                this._insertNode(rootNode.right, newNode);
            }
        }
    }

    // Visit current node before any of its children
    preOrder(root = this.root) {
        if (root) {
            console.log(root.value);
            this.preOrder(root.left);
            this.preOrder(root.right);
        }
    }

    // Traverse left, read, then go right
    // Ensures data is read in ascending order
    inOrder(root = this.root) {
        if (root) {
            this.inOrder(root.left);
            console.log(root.value);
            this.inOrder(root.right);
        }
    }

    // Visit all it's children before visiting the node
    postOrder(root = this.root) {
        if (root) {
            this.postOrder(root.left);
            this.postOrder(root.right);
            console.log(root.value);
        }
    }

}

let myBST = new BinarySearchTree();
[10,20,12,8,26,15,21,5,6,9].forEach(e => myBST.insert(e));

console.log('PreOrder Traversal:')
myBST.preOrder();   // 10 8 5 6 9 20 12 15 26 21
console.log('InOrder Traversal:')
myBST.inOrder();    // 5 6 8 9 10 12 15 20 21 26
console.log('PostOrder Traversal:')
myBST.postOrder();  // 6 5 9 8 15 12 21 26 20 10
