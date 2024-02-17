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

    isEmpty() {
        return this.root === null;
    }

    insert(node) {
        let newNode = new TreeNode(node);
        if (this.isEmpty()) {
            this.root = newNode;
        } else {
            this._insertNode(this.root, newNode);
        }
    }

    _insertNode(rootNode, newNode) {
        if (newNode.value < rootNode.value) {
            if (rootNode.left === null) {
                rootNode.left = newNode;
            } else {
                this._insertNode(rootNode.left, newNode);
            }
        } else {
            if (rootNode.right === null) {
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
    // Ensures data is read in acending order
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

myBST.preOrder();   // 10 8 5 6 9 20 12 15 26 21
myBST.inOrder();    // 5 6 8 9 10 12 15 20 21 26
myBST.postOrder();  // 6 5 9 8 15 12 21 26 20 10
