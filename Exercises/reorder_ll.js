/*
 * Given head of linked list and a number, reorder the list in such a way that
 * all nodes with value less than the given number appear before any nodes with
 * same value as number or value greater than the number.
 * Maintain the relative position of nodes on either side of the number.
 */

class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function reOrderInPlace(head, value) {
    let tempNodeLeft = new ListNode(null);
    let previousLeft = tempNodeLeft;
    let tempNodeRight = new ListNode(null);
    let previousRight = tempNodeRight;
    while (head) {
        let nextNode = head.next;
        head.next = null;
        if (head.value < value) {
            previousLeft.next = head;
            previousLeft = head;
        } else {
            previousRight.next = head;
            previousRight = head;
        }
        head = nextNode;
    }
    previousLeft.next = tempNodeRight.next;
    return tempNodeLeft.next;
}
// Does not create new list, uses same list nodes
// Time O(n), Space O(1)

// Testing
let a = new ListNode(5);
let b = new ListNode(3);
let c = new ListNode(4);
let d = new ListNode(8);
let e = new ListNode(12);
let f = new ListNode(4);
let g = new ListNode(5);
let h = new ListNode(10);
let i = new ListNode(20);
let j = new ListNode(1);
a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
f.next = g;
g.next = h;
h.next = i;
i.next = j;

function printList(head) {
    let items = [];
    while(head) {
        items.push(head.value);
        head = head.next;
    }
    return items;
}

console.log(printList(a));
// [ 5, 3, 4, 8, 12, 4, 5, 10, 20, 1 ]

console.log(printList(reOrderInPlace(a, 5)));
// [ 3, 4, 4, 1, 5, 8, 12, 5, 10, 20 ]
