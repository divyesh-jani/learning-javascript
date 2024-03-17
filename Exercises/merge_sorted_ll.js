// Given heads of two sorted linked lists, merge them into one sorted linked list

class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function mergeSortedLists(aHead, bHead) {
    let temp = new ListNode(null);
    let previous = temp;
    while (aHead || bHead) {
        if (aHead && (!bHead || aHead.value <= bHead.value)) {
            previous.next = aHead;
            previous = aHead;
            aHead = aHead.next;
        } else {
            previous.next = bHead;
            previous = bHead;
            bHead = bHead.next;
        }
    }
    previous.next = null;
    return temp.next;
}

// Testing
let g = { value: 21, next: null };
let f = { value: 20, next: g };
let e = { value: 15, next: f };
let d = { value: 12, next: e };
let c = { value: 10, next: d };
let b = { value: 8, next: c };
let a = { value: 5, next: b };

let u = { value: 100, next: null };
let t = { value: 25, next: u };
let s = { value: 20, next: t };
let r = { value: 20, next: s };
let q = { value: 16, next: r };
let p = { value: 10, next: q };

console.log(printList(mergeSortedLists(a, p)));
// [ 5, 8, 10, 10, 12, 15, 16, 20, 20, 20, 21, 25, 100 ]

function printList(head) {
    let sortedLL = [];
    while (head) {
        sortedLL.push(head.value);
        head = head.next;
    }
    return sortedLL;
}
