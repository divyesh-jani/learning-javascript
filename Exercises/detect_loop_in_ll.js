// Given head of a linked list, determine if there is a circular loop in the list

function hasCircularLoop(head) {
    if (!head) return false;
    let fast = head;
    let slow = head;
    while(fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
        if (fast === slow) {
            return true;
        }
    }
    return false;
}

// Testing
let g = { value: 50, next: null };
let f = { value: 40, next: g };
g.next = f;
let e = { value: 30, next: f };
let d = { value: 20, next: e };
let c = { value: 10, next: d };
let b = { value: 8, next: c };
let a = { value: 5, next: b };

let s = { value: 35, next: null };
let r = { value: 25, next: s };
let q = { value: 15, next: r };
let p = { value: 5, next: q };

console.log(hasCircularLoop(a)); // true
console.log(hasCircularLoop(p)); // false

g.next = null;
console.log(hasCircularLoop(a)); // false

g.next = b;
console.log(hasCircularLoop(a)); // true

s.next = p;
console.log(hasCircularLoop(p)); // true
