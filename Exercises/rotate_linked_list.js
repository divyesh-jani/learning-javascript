// Given head of Linked List, rotate the list by k steps, where k is non-negative.
// A rotation means last node in list is pushed to the front of list.

function rotateList(head, k) {
    let oldTail;
    function getSize(head) {
        let count = 0;
        while (head) {
            count = count + 1;
            if (!head.next) {
                oldTail = head;
            }
            head = head.next;
        }
        return count;
    }
    let listSize = getSize(head);
    let actualK = k % listSize;
    if (actualK === 0) return head;
    let shifts = listSize - actualK - 1;
    let oldHead = head;
    while (shifts > 0) {
        shifts = shifts - 1;
        head = head.next;
    }
    let newTail = head;
    let newHead = newTail.next;
    newTail.next = null;
    oldTail.next = oldHead;
    return newHead;
}

// Testing
let g = { value: 'G', next: null };
let f = { value: 'F', next: g };
let e = { value: 'E', next: f };
let d = { value: 'D', next: e };
let c = { value: 'C', next: d };
let b = { value: 'B', next: c };
let a = { value: 'A', next: b };

function printList(head) {
    let chars = '';
    while (head) {
        chars = chars + head.value;
        head = head.next;
    }
    console.log(chars);
}

let newHead = rotateList(a, 10);
printList(newHead);                 // EFGABCD

printList(rotateList(newHead, 21)); // EFGABCD

newHead = rotateList(newHead, 4);
printList(newHead);                 // ABCDEFG

printList(rotateList(newHead, 75)); // CDEFGAB
