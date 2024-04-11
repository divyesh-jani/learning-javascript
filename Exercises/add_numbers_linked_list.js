// Add two numbers represented by linked lists

class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// Add numbers stored in reverse order (123 => 1 <- 2 <- 3)
// List head points to least significant place (unit's place)
function addNumbers(listA, listB) {
    if (!listA && !listB) return null;
    let carryOver = 0;
    let tempNode = new ListNode(null);
    let previousNode = tempNode;
    while (listA || listB || carryOver) {
        let valueA = listA ? listA.value : 0;
        let valueB = listB ? listB.value : 0;
        let sum = carryOver + valueA + valueB;
        if (sum > 9) {
            sum = sum - 10;
            carryOver = 1;
        } else {
            carryOver = 0;
        }
        let newNode = new ListNode(sum);
        previousNode.next = newNode;
        previousNode = newNode;
        listA = listA ? listA.next : null;
        listB = listB ? listB.next : null;
    }
    return tempNode.next;
}

// 5 <- 6 <- 7
let c = { value: 5, next: null };
let b = { value: 6, next: c };
let a = { value: 7, next: b };

// 8 <- 3 <- 9
let z = { value: 8, next: null };
let y = { value: 3, next: z };
let x = { value: 9, next: y };

// 9 <- 6 <- 8 <- 9
let s = { value: 9, next: null };
let r = { value: 6, next: s };
let q = { value: 8, next: r };
let p = { value: 9, next: q };

// 5
let m = { value: 5, next: null };

// 1 <- 2
let o = { value: 1, next: null };
let n = { value: 2, next: o };

function printList(head) {
    let num = '';
    while (head) {
        num = head.value + num;
        head = head.next;
    }
    console.log(Number(num));
}

printList(addNumbers(a, x));      // 1406
printList(addNumbers(x, p));      // 10528
printList(addNumbers(a, a));      // 1134
printList(addNumbers(p, m));      // 9694
printList(addNumbers(n, p));      // 9701
