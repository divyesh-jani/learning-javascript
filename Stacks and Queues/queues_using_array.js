// Queue is a First-In-First-Out data structure. Think queue of ticketing lines.
// The first person to get in line gets ticket first

class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(item) {
        this.items.push(item);
    }

    dequeue() {
        if (this.items.length) {
            return this.items.shift();
        }
    }

    get size() {
        return this.items.length;
    }

    peek() {
        if (this.items.length) {
            return this.items[0];
        }
    }

    printQueue() {
        let queueOrder = '';
        if (this.items.length) {
            queueOrder = 'START <- ';
        }
        for (let i = 0; i < this.items.length; i = i + 1) {
            queueOrder = queueOrder + this.items[i] + ' <- ';
            if (i === this.items.length - 1) {
                queueOrder = queueOrder + 'END';
            }
        }
        console.log(queueOrder);
    }
}

let myQueue = new Queue();
myQueue.enqueue('Adam');
myQueue.enqueue('Bob');
myQueue.enqueue('Chris');
myQueue.enqueue('Dan');
myQueue.enqueue('Eliot');
console.log(myQueue.size);          // 5
console.log(myQueue.dequeue());     // Adam
console.log(myQueue.peek());        // Bob
console.log(myQueue.dequeue());     // Bob
myQueue.enqueue('Frank');
console.log(myQueue.dequeue());     // Chris
console.log(myQueue.dequeue());     // Dan
console.log(myQueue.size);          // 2
myQueue.enqueue('Gavin');
myQueue.printQueue();               // START <- Eliot <- Frank <- Gavin <- END
