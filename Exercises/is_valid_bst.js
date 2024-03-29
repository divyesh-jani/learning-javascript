// Given root of a binary tree, check if this is a valid Binary Search Tree.
// A tree is BST if all children nodes to the left of any node are smaller that the value of that node
// and all children nodes to the right of that node are greater than the value of the node

function isValidBST(root) {
    function _isValid(root, min, max) {
        if (!root) return true;
        if (root.value < min || root.value > max) return false;
        return _isValid(root.left, min, root.value) && _isValid(root.right, root.value, max);
    }
    return _isValid(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
}

// Testing
let g = { value: 12, left: null, right: null };
let f = { value: 9, left: null, right: g };
let d = { value: 5, left: null, right: null };
let e = { value: 20, left: null, right: null };
let b = { value: 8, left: d, right: f };
let c = { value: 15, left: null, right: e };
let a = { value: 10, left: b, right: c };

/*
         10
        /  \
       8    15
      / \     \
     5   9     20
          \
          12
*/

console.log(isValidBST(a));                             // false;
f.right = null;
console.log(isValidBST(a));                             // true;
c.left = { value: 12, left: null, right: null };
console.log(isValidBST(a));                             // true;
c.left.left = { value: 14, left: null, right: null };
console.log(isValidBST(a));                             // false;
c.left.left = null;
c.left.right = { value: 14, left: null, right: null };
console.log(isValidBST(a));                             // true;
