// A binary tree is symmetric if the right side of root is a mirror image of left side of root
// both in terms of number of nodes (and children), their positions, and values.

function isTreeSymmetric(treeHead) {
    if (!treeHead) return true;                     // head is null => tree is symmetric
    function _compareTreeSides(left, right) {
        if (!left && !right) return true;                   // No children on both nodes => tree is symmetric
        if (!left || !right) return false;                  // one of left or right exists and other doesn't => tree NOT symmetric
        if (left.value !== right.value) return false;       // left and right value not same => tree NOT symmetric
        // tree is symmetric only if both sides of tree are symmetric
        return _compareTreeSides(left.left, right.right) && _compareTreeSides(left.right, right.left);
    }
    return _compareTreeSides(treeHead.left, treeHead.right); // => both exist so compare
}

let f = { value: 20, left: null, right: null };
let d = { value: 20, left: null, right: null };
let e = { value: 20, left: null, right: null };
let b = { value: 15, left: d, right: f };
let c = { value: 15, left: null, right: e };
let a = { value: 10, left: b, right: c };

console.log(isTreeSymmetric(null));     // true
console.log(isTreeSymmetric(f));        // true
console.log(isTreeSymmetric(e));        // true
console.log(isTreeSymmetric(d));        // true
console.log(isTreeSymmetric(c));        // false
console.log(isTreeSymmetric(b));        // true
console.log(isTreeSymmetric(a));        // false
