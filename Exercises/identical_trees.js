// Given heads of 2 binary trees, find if the trees are identical

function areTreesIdentical(headOne, headTwo) {
    if (!headOne && !headTwo) return true;
    if (!headOne || !headTwo) return false;
    if (headOne.value !== headTwo.value) return false;
    return areTreesIdentical(headOne.left, headTwo.left) && areTreesIdentical(headOne.right, headTwo.right);
}

let f = { value: 20, left: null, right: null };
let d = { value: 20, left: null, right: null };
let e = { value: 20, left: null, right: null };
let b = { value: 15, left: d, right: f };
let c = { value: 15, left: null, right: e };
let a = { value: 10, left: b, right: c };

let l = { value: 20, left: null, right: null };
let k = { value: 20, left: null, right: null };
let j = { value: 20, left: null, right: null };
let i = { value: 15, left: k, right: l };
let h = { value: 15, left: null, right: j };
let g = { value: 10, left: i, right: h };

console.log(areTreesIdentical(a, g));       // true
h.right = null;
console.log(areTreesIdentical(a, g));       // false
console.log(areTreesIdentical(i, b));       // true
k.value = 15;
console.log(areTreesIdentical(i, b));       // false
console.log(areTreesIdentical(l, f));       // true
