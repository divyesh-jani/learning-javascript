// Given root of two binary trees, check if they are isomorphic
// Two trees are isomorphic if one of them can be obtained from other by a series of swaps of left and right children of any number of nodes.
// Any number of nodes at any level can have their children swapped.
// Two empty trees are isomorphic.

function areTreesIsomorphic(rootOne, rootTwo) {
    if (!rootOne && !rootTwo) return true;
    if (!rootOne || !rootTwo) return false;
    if (rootOne.value !== rootTwo.value) return false;
    return (
        (areTreesIsomorphic(rootOne.left, rootTwo.left)
        && areTreesIsomorphic(rootOne.right, rootTwo.right))
        || (areTreesIsomorphic(rootOne.left, rootTwo.right)
        && areTreesIsomorphic(rootOne.right, rootTwo.left))
    )
}

// Testing
class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

/*
         1
        /  \
       2    3
     / \    /
    4   5  6
       / \
      7   8
*/
let root1 = new TreeNode(1);
root1.left = new TreeNode(2);
root1.right = new TreeNode(3);
root1.left.left = new TreeNode(4);
root1.left.right = new TreeNode(5);
root1.right.left = new TreeNode(6);
root1.left.right.left = new TreeNode(7);
root1.left.right.right = new TreeNode(8);

/*
      1
     /  \
    3     2
    \    / \
     6  4   5
           / \
          8   7
*/
let root2 = new TreeNode(1);
root2.left = new TreeNode(3);
root2.right = new TreeNode(2);
root2.right.left = new TreeNode(4);
root2.right.right = new TreeNode(5);
root2.left.right = new TreeNode(6);
root2.right.right.left = new TreeNode(8);
root2.right.right.right = new TreeNode(7);

console.log(areTreesIsomorphic(root1, root2));      // true
root2.right.right.left = null;
console.log(areTreesIsomorphic(root1, root2));      // false
root2.right.right.left = new TreeNode(7);
console.log(areTreesIsomorphic(root1, root2));      // false
root2.right.right.value = 6;
console.log(areTreesIsomorphic(root1, root2));      // false
root2.right.right.left = new TreeNode(8);
root2.right.right.value = 5;
console.log(areTreesIsomorphic(root1, root2));      // true
