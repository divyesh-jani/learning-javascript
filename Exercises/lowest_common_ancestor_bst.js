// Get Lowest Common Ancestor of any 2 nodes in a BST

function getLowestCommonAncestor(root, valueOne, valueTwo) {
    if (!nodeExists(valueOne, root) || !nodeExists(valueTwo, root)) return null;
    while (root) {
        if (root.value > valueOne && root.value > valueTwo) {
            root = root.left;
        } else if (root.value < valueOne && root.value < valueTwo) {
            root = root.right;
        } else {
            break;
        }
    }
    return root;
}
// Time Complexity: O(h), Space Complexity O(1)

function nodeExists(value, rootNode) {
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

/*
         10
        /  \
       8    20
      /    /  \
     5   12    26
          \    /
          15  21
*/

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

let root = new Node(10);
root.left = new Node(8);
root.right = new Node(20);
root.left.left = new Node(5);
root.right.left = new Node(12);
root.right.right = new Node(26);
root.right.left.right = new Node(15);
root.right.right.left = new Node(21);

let input = [[10, 20], [12, 26], [15, 21], [8, 8], [20, 26], [21, 21]];
input.forEach(a => console.log('LCA of ' + a[0] + ' and ' + a[1] + ' is: ' + getLowestCommonAncestor(root, a[0], a[1]).value));
/*
LCA of 10 and 20 is: 10
LCA of 12 and 26 is: 20
LCA of 15 and 21 is: 20
LCA of 8 and 8 is: 8
LCA of 20 and 26 is: 20
LCA of 21 and 21 is: 21
*/

console.log(getLowestCommonAncestor(root, 3, 11));
// null
