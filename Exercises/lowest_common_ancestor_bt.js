// Get Lowest Common Ancestor of any 2 nodes in a Binary Tree

function getLowestCommonAncestor(root, valueOne, valueTwo) {
    pathOne = [];
    pathTwo = [];
    function findPath(root, n, path) {
        if (!root) return false;
        path.push(root.value);
        if (root.value === n) return true;
        if (findPath(root.left, n, path)) return true;
        if (findPath(root.right, n, path)) return true;
        path.pop();
        return false;
    }
    if (!findPath(root, valueOne, pathOne) || !findPath(root, valueTwo, pathTwo)) return null;
    let lastCommon;
    for (i = 0; i < pathOne.length && i < pathTwo.length; i = i + 1) {
        if (pathOne[i] === pathTwo[i]) {
            lastCommon = pathOne[i];
        } else {
            break;
        }
    }
    return lastCommon;
}

/*
         10
        /  \
       11   20
      /    /  \
     5   18    26
          \    /
           35 21
*/

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

let root = new Node(10);
root.left = new Node(11);
root.right = new Node(20);
root.left.left = new Node(5);
root.right.left = new Node(18);
root.right.right = new Node(26);
root.right.left.right = new Node(35);
root.right.right.left = new Node(21);

let input = [[10, 20], [11, 26], [35, 21], [18, 18], [20, 26], [3, 11]];
input.forEach(a => console.log('LCA of ' + a[0] + ' and ' + a[1] + ' is: ' + getLowestCommonAncestor(root, a[0], a[1])));
/*
LCA of 10 and 20 is: 10
LCA of 11 and 26 is: 10
LCA of 35 and 21 is: 20
LCA of 18 and 18 is: 18
LCA of 20 and 26 is: 20
LCA of 3 and 11 is: null
*/
