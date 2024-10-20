
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

    isEmpty(root = this.root) {
        return root === null;
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

    has(value, rootNode = this.root) {
        if (!rootNode) return false;
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

    getMinValue(root = this.root) {
        if (!root) return null;
        while(root.left) {
            root = root.left;
        }
        return root.value;
    }

    getMaxValue(root = this.root) {
        if (!root) return null;
        while(root.right) {
            root = root.right;
        }
        return root.value;
    }

    getMaxTreeDepth(root = this.root) {
        if (!root) return 0;
        return 1 + Math.max(this.getMaxTreeDepth(root.left), this.getMaxTreeDepth(root.right));
    }

    getMinTreeDepth(root = this.root) {
        if (!root) return 0;
        if (root.left && root.right) {
            return 1 + Math.min(this.getMinTreeDepth(root.left), this.getMinTreeDepth(root.right));
        } else if (root.left) {
            return 1 + this.getMinTreeDepth(root.left);
        } else {
            return 1 + this.getMinTreeDepth(root.right);
        }
    }

    printTreeByLevel(root = this.root) {
        if (!root) return [];
        let nodesByLevel = [];
        let nodesToTraverse = [root];
        while (nodesToTraverse.length) {
            let levelArr = [];
            let nodesAtLevel = nodesToTraverse.length;
            for (let i = 0; i < nodesAtLevel; i = i + 1) {
                let node = nodesToTraverse.shift();
                levelArr.push(node.value);
                if (node.left) nodesToTraverse.push(node.left);
                if (node.right) nodesToTraverse.push(node.right);
            }
            nodesByLevel.push(levelArr);
        }
        return nodesByLevel;
    }

    printTreeWithLevel(root = this.root) {
        if (!root) return [];
        let nodesByLevel = {};
        let nodesToTraverse = [root];
        let level = 0;
        while (nodesToTraverse.length) {
            let levelArr = [];
            let nodesAtLevel = nodesToTraverse.length;
            for (let i = 0; i < nodesAtLevel; i = i + 1) {
                let node = nodesToTraverse.shift();
                levelArr.push(node.value);
                if (node.left) nodesToTraverse.push(node.left);
                if (node.right) nodesToTraverse.push(node.right);
            }
            level = level + 1;
            let levelKey = 'level_' + level;
            nodesByLevel[levelKey] = levelArr;
        }
        return nodesByLevel;
    }

    getPathsFromRootToLeaf(root = this.root) {
        let allPaths = [];
        let currentPath = '';
        function getPathsRecursively(node, path) {
            if (!node) return allPaths;
            if (path === '') {
                path = node.value;
            } else {
                path = path + ' -> ' + node.value;
            }
            if (!node.left && !node.right) {
                allPaths.push(path);
            } else {
                getPathsRecursively(node.left, path);
                getPathsRecursively(node.right, path);
            }
        }
        getPathsRecursively(root, currentPath);
        return allPaths;
    }

    doesPathSumExist(sum, root = this.root) {
        if (!root) return false;
        if (!root.left && !root.right) {
            return root.value === sum ? true : false;
        } else {
            let newSum = sum - root.value;
            return this.doesPathSumExist(newSum, root.left) || this.doesPathSumExist(newSum, root.right);
        }
    }

    getAllPathSums(root = this.root) {
        let allSums = [];
        function getPathSums(node, sum = 0) {
            if (!node) return allSums;
            if (!node.left && !node.right) {
                allSums.push(sum + node.value);
            } else {
                getPathSums(node.left, sum + node.value);
                getPathSums(node.right, sum + node.value);
            }
        }
        getPathSums(root);
        return allSums;
    }

    delete(value, root = this.root) {
        this.root = this._deleteNode(root, value);
    }

    _deleteNode(root, value) {
        if(!root) return root;
        if (value < root.value) {
            root.left = this._deleteNode(root.left, value);
        } else if (value > root.value) {
            root.right = this._deleteNode(root.right, value);
        } else {
            if (!root.left && !root.right) return null;
            if (!root.left) return root.right;
            if (!root.right) return root.left;
            // Calculate or get min value of right subtree using getMinValue
            // root.value = this.getMinValue(root.right);
            let subTreeRoot = root.right;
            while(subTreeRoot.left) {
                subTreeRoot = subTreeRoot.left;
            }
            root.value = subTreeRoot.value;
            root.right = this._deleteNode(root.right, root.value);
        }
        return root;
    }

}

let myBST = new BinarySearchTree();
console.log(myBST.isEmpty());                   // true
console.log(myBST.getPathsFromRootToLeaf());    // []
console.log(myBST.doesPathSumExist(10));        // false;
myBST.insert(10);
console.log(myBST.isEmpty());                   // false
console.log(myBST.getPathsFromRootToLeaf());    // [ 10 ]
console.log(myBST.doesPathSumExist(10));        // true;
[20,12,8,26,15,21,5].forEach(node => myBST.insert(node));
/*
        myBST
         10
        /  \
       8    20
      /    /  \
     5   12    26
          \    /
          15  21
*/

console.log([1,5,6,8,10,11,12,15,18,19,20,21,22,26,30].map(node => myBST.has(node)));
// [ f, true, f, true, true, f, true, true, f, f, true, true, f, true, f ]

console.log('Total elements found : ', [1,5,6,8,10,11,12,15,18,19,20,21,22,26,30].reduce((a, e) => myBST.has(e) ?  a + 1 : a, 0));
// Total Elements found : 8

console.log(myBST.getMinValue());       // 5
console.log(myBST.getMaxValue());       // 26
console.log(myBST.getMaxTreeDepth());   // 4
console.log(myBST.getMinTreeDepth());   // 3
console.log(myBST.printTreeByLevel());
/*
[
    [ 10 ],
    [ 8, 20 ],
    [ 5, 12, 26 ],
    [ 15, 21 ]
]
*/
console.log(myBST.printTreeWithLevel());
/*
{
    level_1: [ 10 ],
    level_2: [ 8, 20 ],
    level_3: [ 5, 12, 26 ],
    level_4: [ 15, 21 ]
}
*/
console.log(myBST.getPathsFromRootToLeaf());
/*
[
    '10 -> 8 -> 5',
    '10 -> 20 -> 12 -> 15',
    '10 -> 20 -> 26 -> 21'
]
*/
console.log([5,10,12,18,21,22,23,30,32,40,56,57,60,70,77].map(a => myBST.doesPathSumExist(a)));
// [ f, f, f, f, f, f, true, f, f, f, f, true, f, f, true ]
console.log(myBST.getAllPathSums());
// [ 23, 57, 77 ]

myBST.delete(20);
/*
        myBST
         10
        /  \
       8    21
      /    /  \
     5   12    26
          \
           15
*/
console.log(myBST.printTreeByLevel());
// [ [ 10 ], [ 8, 21 ], [ 5, 12, 26 ], [ 15 ] ]

myBST.delete(15);
/*
        myBST
         10
        /  \
       8    21
      /    /  \
     5   12    26
*/
console.log(myBST.printTreeByLevel());
// [ [ 10 ], [ 8, 21 ], [ 5, 12, 26 ] ]

myBST.delete(21);
/*
        myBST
         10
        /  \
       8    26
      /    /
     5   12
*/
console.log(myBST.printTreeByLevel());
// [ [ 10 ], [ 8, 26 ], [ 5, 12 ] ]
