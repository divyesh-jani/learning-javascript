// Given a binary tree, determine if it is height-balanced
// A tree is height balanced if left and right subtrees
// of every node have height difference of at most 1.

function isBinaryTreeBalanced(root) {
    if (!root) return true;
    function getHeightDiff(root) {
        if (!root) return 0;
        let leftHeight = getHeightDiff(root.left);
        let rightHeight = getHeightDiff(root.right);
        if (leftHeight === -1 || rightHeight === -1 || Math.abs(leftHeight - rightHeight) > 1) return -1;
        return 1 + Math.max(leftHeight, rightHeight);
    };
	if (getHeightDiff(root) === -1)  return false;
	return true;
}
// Time complexity: O(n), Space Complexity: O(h)

let h = { value: 'H', left: null, right: null };
let g = { value: 'G', left: null, right: null };
let f = { value: 'F', left: null, right: g };
let e = { value: 'E', left: null, right: null };
let d = { value: 'D', left: null, right: null };
let c = { value: 'C', left: h, right: e };
let b = { value: 'B', left: d, right: f };
let a = { value: 'A', left: b, right: c };

/*
         A
        /  \
       B    C
      / \   / \
     D   F H   E
          \
           G
*/

console.log(isBinaryTreeBalanced(a));   // true
c.left = null;
console.log(isBinaryTreeBalanced(a));   // true
c.right = null;
console.log(isBinaryTreeBalanced(a));   // false
f.right = null;
console.log(isBinaryTreeBalanced(a));   // true
f.right = g;
c.left = h;
console.log(isBinaryTreeBalanced(a));   // true
b.left = null;
console.log(isBinaryTreeBalanced(a));   // false
console.log('---Empty Tree and Single Node Tree---');
console.log(isBinaryTreeBalanced(null));    // true
console.log(isBinaryTreeBalanced(e));       // true
