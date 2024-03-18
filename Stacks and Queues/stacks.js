// Stack is a Last-In-First-Out data structure. Think stack of books/dishes.
// You put a new book at the top of stack and access that first while removing.

class Stack {
    constructor() {
        this.items = [];
    }

    push(item) {
        this.items.push(item);
    }

    pop() {
        if (this.items.length) {
            return this.items.pop();
        }
    }

    get size() {
        return this.items.length;
    }

    peek() {
        return this.items[this.items.length - 1];
    }

    printStack() {
        for (let i = this.items.length - 1; i >= 0; i = i - 1) {
            console.log(this.items[i]);
        }
    }
}

let myStack = new Stack();
myStack.push('Adam');
myStack.push('Bob');
myStack.push('Chris');
myStack.push('Dan');
myStack.push('Eliot');
console.log(myStack.size);      // 5
console.log(myStack.pop());     // Eliot
console.log(myStack.peek());    // Dan
console.log(myStack.pop());     // Dan
myStack.push('Frank');
console.log(myStack.pop());     // Frank
console.log(myStack.pop());     // Chris
console.log(myStack.size);      // 2
myStack.push('Gavin');
myStack.printStack();           // Gavin, Bob, Adam
