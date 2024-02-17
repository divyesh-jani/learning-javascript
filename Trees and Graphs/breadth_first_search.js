// Breadth First Search (BFS)

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

    traverseBreadthFirst(root = this.root) {
        if (!root) return 'No nodes exist in Tree';
        let listOfNodes = [root];
        while (listOfNodes.length) {
            let current = listOfNodes.shift();
            console.log(current.value);
            if (current.left) listOfNodes.push(current.left);
            if (current.right) listOfNodes.push(current.right);
        }
    }

}

let myBST = new BinarySearchTree();
[10,20,12,8,26,15,21,5,6,9].forEach(e => myBST.insert(e));

myBST.traverseBreadthFirst();   // 10 8 20 5 9 12 26 6 15 21
