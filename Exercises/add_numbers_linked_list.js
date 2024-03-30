// Add two numbers represented by linked lists

class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// Add numbers stored in default order (123 => 1 -> 2 -> 3)
// List head points to most significant place (hundred's or thousands place)
function addNumbersDefault(listA, listB) {
    
}

// Add numbers stored in reverse order (123 => 1 <- 2 <- 3)
// List head points to least significant place (unit's place)
function addNumbersReverse(listA, listB) {
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

// 5 -> 6 -> 7
let c = { value: 7, next: null };
let b = { value: 6, next: c };
let a = { value: 5, next: b };

// 8 -> 3 -> 9
let z = { value: 9, next: null };
let y = { value: 3, next: z };
let x = { value: 8, next: y };

// 9 -> 6 -> 8 -> 9
let s = { value: 9, next: null };
let r = { value: 8, next: s };
let q = { value: 6, next: r };
let p = { value: 9, next: q };

// 5
let m = { value: 5, next: null };

// 1 -> 2
let o = { value: 2, next: null };
let n = { value: 1, next: o };

function printDefault(head) {
    let num = '';
    while (head) {
        num = num + head.value;
        head = head.next;
    }
    console.log(Number(num));
}

console.log('-----Add numbers in Order-----');
printDefault(addNumbersDefault(a, x));      // 1406
printDefault(addNumbersDefault(x, p));      // 10528
printDefault(addNumbersDefault(a, a));      // 1134
printDefault(addNumbersDefault(p, m));      // 9694
printDefault(addNumbersDefault(n, p));      // 9701

function reverseList(head) {
    let current = head;
    let temp = null;
    while (current) {
        let nextNode = current.next;
        current.next = temp;
        temp = current;
        current = nextNode;
    }
    return temp;
}

// 5 <- 6 <- 7
a = reverseList(a);
// 8 <- 3 <- 9
x = reverseList(x);
// 9 <- 6 <- 8 <- 9
p = reverseList(p);
// 1 <- 2
n = reverseList(n);

function printReverse(head) {
    let num = '';
    while (head) {
        num = head.value + num;
        head = head.next;
    }
    console.log(Number(num));
}

console.log('-----Add numbers in Reverse Order-----');
printReverse(addNumbersReverse(a, x));      // 1406
printReverse(addNumbersReverse(x, p));      // 10528
printReverse(addNumbersReverse(a, a));      // 1134
printReverse(addNumbersReverse(p, m));      // 9694
printReverse(addNumbersReverse(n, p));      // 9701
