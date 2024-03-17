// Merge two intersecting linked lists into one list

class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function mergeIntersectingLists(aHead, bHead) {
    let tempNewHead = new ListNode(null);
    let previous = tempNewHead;
    let tempAHead = aHead;
    let tempBHead = bHead;
    function getSize(head) {
        let size = 0;
        while (head) {
            size = size + 1;
            head = head.next;
        }
        return size;
    }
    let aSize = getSize(tempAHead);
    let bSize = getSize(tempBHead);

    if (aSize > bSize) {
        let diff = aSize - bSize;
        while (diff > 0) {
            previous.next = tempAHead;
            previous = tempAHead;
            tempAHead = tempAHead.next;
            diff = diff - 1;
        }
    } else {
        let diff = bSize - aSize;
        while (diff > 0) {
            previous.next = tempBHead;
            previous = tempBHead;
            tempBHead = tempBHead.next;
            diff = diff - 1;
        }
    }

    while (tempAHead !== tempBHead) {
        previous.next = tempAHead;
        previous = tempAHead;
        tempAHead = tempAHead.next;
        previous.next = tempBHead;
        previous = tempBHead;
        tempBHead = tempBHead.next;
    }

    if (!tempAHead || !tempBHead) {
        return ['Lists do not intersect!', tempNewHead.next];
    }
    if (tempAHead === tempBHead) {
        while (tempAHead) {
            previous.next = tempAHead;
            previous = tempAHead;
            tempAHead = tempAHead.next;
        }
    }
    previous.next = null;
    return tempNewHead.next;
}

// Testing
function printList(head) {
    let mergedList = [];
    while (head) {
        mergedList.push(head.value);
        head = head.next;
    }
    return mergedList;
}

let g = { value: 'G', next: null };
let f = { value: 'F', next: g };
let e = { value: 'E', next: f };
let d = { value: 'D', next: e };
let c = { value: 'C', next: d };
let b = { value: 'B', next: c };
let a = { value: 'A', next: b };

let s = { value: 'S', next: c };
let r = { value: 'R', next: s };
let q = { value: 'Q', next: r };
let p = { value: 'P', next: q };

console.log(printList(mergeIntersectingLists(a, p)));
// [ P, Q, A, R, B, S, C, D, E, F, G ]

g = { value: 'G', next: null };
f = { value: 'F', next: g };
e = { value: 'E', next: f };
d = { value: 'D', next: e };
c = { value: 'C', next: d };
b = { value: 'B', next: c };
a = { value: 'A', next: b };

let n = { value: 'N', next: f };
let m = { value: 'M', next: n };

console.log(printList(mergeIntersectingLists(a, m)));
// [ A, B, C, D, M, E, N, F, G ]

s = { value: 'S', next: null };
r = { value: 'R', next: s };
q = { value: 'Q', next: r };
p = { value: 'P', next: q };

n = { value: 'N', next: null };
m = { value: 'M', next: n };

let result = mergeIntersectingLists(p, m);
console.log(result[0]);
// Lists do not intersect!
console.log('Merging two non-intersecting lists:');
console.log(printList(result[1]));
// [ P, Q, R, M, S, N ]
