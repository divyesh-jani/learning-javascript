// Queue using an array was not the most optimal solution since dequeue was O(n)
// However, if we use two arrays(stacks), we can dequeue in O(1) most of the time

class Queue {
    constructor() {
        this.storeItems = [];
        this.getItems = [];
    }

    enqueue(item) {
        this.storeItems.push(item);
    }

    dequeue() {
        if (!this.getItems.length) {
            while (this.storeItems.length) {
                this.getItems.push(this.storeItems.pop());
            }
        }
        if (this.getItems.length) {
            return this.getItems.pop();
        }
        return 'Queue is Empty!';
    }

    get size() {
        return this.storeItems.length + this.getItems.length;
    }

    peek() {
        if (this.getItems.length) {
            return this.getItems[this.getItems.length - 1];
        } else if (this.storeItems.length) {
            return this.storeItems[0];
        } else {
            return 'Queue is Empty!';
        }
    }

    printQueue() {
        let queueOrder = 'START <- ';
        for (let i = this.getItems.length - 1; i >= 0; i = i - 1) {
            queueOrder = queueOrder + this.getItems[i] + ' <- ';
        }
        for (let j = 0; j < this.storeItems.length; j = j + 1) {
            queueOrder = queueOrder + this.storeItems[j] + ' <- ';
        }
        queueOrder = queueOrder + 'END';
        console.log(queueOrder);
    }
}

let myQueue = new Queue();
console.log(myQueue.size);          // 0
myQueue.enqueue('Adam');
myQueue.enqueue('Bob');
console.log(myQueue.size);          // 2
console.log(myQueue.dequeue());     // Adam
console.log(myQueue.peek());        // Bob
console.log(myQueue.dequeue());     // Bob
console.log(myQueue.size);          // 0
console.log(myQueue.dequeue());     // Queue is Empty!
console.log(myQueue.peek());        // Queue is Empty!
myQueue.enqueue('Chris');
console.log(myQueue.peek());        // Chris
myQueue.enqueue('Dan');
console.log(myQueue.dequeue());     // Chris
myQueue.enqueue('Eliot');
console.log(myQueue.size);          // 2
console.log(myQueue.peek());        // Dan
myQueue.enqueue('Frank');
console.log(myQueue.dequeue());     // Dan
console.log(myQueue.dequeue());     // Eliot
console.log(myQueue.size);          // 1
myQueue.enqueue('Gavin');
myQueue.printQueue();               // START <- Frank <- Gavin <- END
