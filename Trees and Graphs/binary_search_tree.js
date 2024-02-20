
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

    has(value) {
        if (this.isEmpty()) return false;
        let rootNode = this.root;
        while(rootNode) {
            if (rootNode.value === value) return true;
            if (rootNode.value < value) {
                rootNode = rootNode.right;
            } else {
                rootNode = rootNode.left;
            }
        }
        return false;
    }
    
    getMinValue() {
        let rootNode = this.root;
        while(rootNode.left !== null) {
            rootNode = rootNode.left;
        }
        return rootNode.value;
    }

    getMaxValue() {
        let rootNode = this.root;
        while(rootNode.right !== null) {
            rootNode = rootNode.right;
        }
        return rootNode.value;
    }

    getMaxTreeDepth(root = this.root) {
        if (root === null) return 0;
        return 1 + Math.max(this.getMaxTreeDepth(root.left), this.getMaxTreeDepth(root.right));
    }

    getMinTreeDepth(root = this.root) {
        if (root === null) return 0;
        if (root.left && root.right) {
            return 1 + Math.min(this.getMinTreeDepth(root.left), this.getMinTreeDepth(root.right));
        } else if (root.left) {
            return 1 + this.getMinTreeDepth(root.left);
        } else {
            return 1 + this.getMinTreeDepth(root.right);
        }
    }

}

let myBST = new BinarySearchTree();
console.log(myBST.isEmpty());       // true

myBST.insert(10);
console.log(myBST.isEmpty());       // false

myBST.insert(20);
myBST.insert(12);
myBST.insert(8);
myBST.insert(26);
myBST.insert(15);
myBST.insert(21);
myBST.insert(5);

console.log(myBST.has(1));      // false
console.log(myBST.has(5));      // true
console.log(myBST.has(6));      // false
console.log(myBST.has(8));      // true
console.log(myBST.has(10));     // true
console.log(myBST.has(11));     // false
console.log(myBST.has(12));     // true
console.log(myBST.has(15));     // true
console.log(myBST.has(18));     // false
console.log(myBST.has(19));     // false
console.log(myBST.has(20));     // true
console.log(myBST.has(21));     // true
console.log(myBST.has(22));     // false
console.log(myBST.has(26));     // true
console.log(myBST.has(30));     // false

console.log('Total elements found : ', [1,5,6,8,10,11,12,15,18,19,20,21,22,26,30].reduce((a, e) => myBST.has(e) ?  a + 1 : a, 0));

console.log(myBST.getMinValue());       // 5
console.log(myBST.getMaxValue());       // 26
console.log(myBST.getMaxTreeDepth());   // 4
console.log(myBST.getMinTreeDepth());   // 3