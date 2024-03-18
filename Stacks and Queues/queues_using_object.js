// Queue using an array was not the most optimal solution since dequeue was O(n)
// Using objects, we can achieve both enqueue and dequeue in O(1)

class Queue {
    constructor() {
        this.items = {};
        this.startOfQueue = 0;
        this.endOfQueue = 0;
    }

    enqueue(item) {
        this.items[this.endOfQueue] = item;
        this.endOfQueue = this.endOfQueue + 1;
    }

    dequeue() {
        if (this.endOfQueue > this.startOfQueue) {
            let deQueuedItem = this.items[this.startOfQueue];
            delete this.items[this.startOfQueue];
            this.startOfQueue = this.startOfQueue + 1;
            return deQueuedItem;
        }
    }

    get size() {
        return this.endOfQueue - this.startOfQueue;
    }

    peek() {
        if (this.endOfQueue > this.startOfQueue) {
            return this.items[this.startOfQueue];
        }
    }

    printQueue() {
        let queueOrder = '';
        if (this.endOfQueue > this.startOfQueue) {
            queueOrder = 'START <- ';
        }
        for (let key in this.items) {
            queueOrder = queueOrder + this.items[key] + ' <- ';
        }
        if (this.endOfQueue > this.startOfQueue) {
            queueOrder = queueOrder + 'END';
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
