// Given heads of two linked lists, find their intersection node.
// If two lists do not intersect, return null

function findIntersectingNode(aHead, bHead) {
    if (!aHead || !bHead) return null;
    function getSize(head) {
        let size = 0;
        while(head) {
            size = size + 1;
            head = head.next;
        }
        return size;
    }
    let aSize = getSize(aHead);
    let bSize = getSize(bHead);

    let tempAHead = aHead;
    let tempBHead = bHead;
    if (aSize > bSize) {
        let sizeDiff = aSize - bSize;
        while (sizeDiff > 0) {
            tempAHead = tempAHead.next;
            sizeDiff = sizeDiff - 1;
        }
    } else {
        let sizeDiff = bSize - aSize;
        while (sizeDiff > 0) {
            tempBHead = tempBHead.next;
            sizeDiff = sizeDiff - 1;
        }
    }
    while (tempAHead && tempBHead) {
        if (tempAHead === tempBHead) return tempAHead;
        tempAHead = tempAHead.next;
        tempBHead = tempBHead.next;
    }
    return null;
}

// Testing
let g = { value: 50, next: null };
let f = { value: 40, next: g };
let e = { value: 30, next: f };
let d = { value: 20, next: e };
let c = { value: 10, next: d };
let b = { value: 8, next: c };
let a = { value: 5, next: b };

let s = { value: 35, next: c };
let r = { value: 25, next: s };
let q = { value: 15, next: r };
let p = { value: 5, next: q };

let t = { value: 45, next: null };

console.log(findIntersectingNode(a, p)); // value: 10

r.next = e;
console.log(findIntersectingNode(a, p)); // value: 30

r.next = s;
s.next = t;
console.log(findIntersectingNode(a, p)); // null

c.value = 12;
s.next = c;
console.log(findIntersectingNode(a, p)); // value: 12
