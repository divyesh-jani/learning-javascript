// Circular queue of fixed capacity

class CircularQueue {
    constructor(capacity) {
        this.items = {};
        this.capacity = capacity;
        this.front = 0;
        this.end = 0;
    }

    enqueue(item) {
        if (!this.isFull()) {
            this.items[this.end] = item;
            this.end = this.end + 1;
        } else {
            console.log(item + ' cannot be added since queue is full');
        }
    }

    dequeue() {
        if (!this.isEmpty()) {
            let itemToDequeue = this.items[this.front];
            delete this.items[this.front];
            this.front = this.front + 1;
            return itemToDequeue;
        }
    }

    isFull() {
        return this.end - this.front === this.capacity;
    }

    isEmpty() {
        return this.front === this.end;
    }

    peek() {
        return this.items[this.front];
    }

    get size() {
        return this.end - this.front;
    }

    get vacantSpots() {
        return this.capacity - this.size;
    }

    printQueue() {
        let queueOrder = '';
        queueOrder = 'START <- ';
        for (let i = this.front; i < this.front + this.capacity; i = i + 1) {
            if (this.items[i]) {
                queueOrder = queueOrder + this.items[i] + ' <- ';
            } else {
                queueOrder = queueOrder + 'EMPTY <- ';
            }
        }
        queueOrder = queueOrder + 'END';
        console.log(queueOrder);
    }
}

let myQueue = new CircularQueue(8);
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
console.log(myQueue.vacantSpots)    // 4
console.log(myQueue.dequeue());     // Chris
console.log(myQueue.dequeue());     // Dan
console.log(myQueue.size);          // 2
myQueue.enqueue('Gavin');
myQueue.printQueue();
// START <- Eliot <- Frank <- Gavin <- EMPTY <- EMPTY <- EMPTY <- EMPTY <- EMPTY <- END

let mySmallQueue = new CircularQueue(3);
mySmallQueue.enqueue('Adam');
mySmallQueue.enqueue('Bob');
mySmallQueue.enqueue('Chris');
mySmallQueue.enqueue('Dan');            // Dan cannot be added since queue is full
mySmallQueue.enqueue('Eliot');          // Eliot cannot be added since queue is full
console.log(mySmallQueue.size);         // 3
console.log(mySmallQueue.dequeue());    // Adam
console.log(mySmallQueue.peek());       // Bob
console.log(mySmallQueue.dequeue());    // Bob
mySmallQueue.enqueue('Frank');
console.log(mySmallQueue.vacantSpots);  // 1
console.log(mySmallQueue.dequeue());    // Chris
console.log(mySmallQueue.dequeue());    // Frank
console.log(mySmallQueue.size);         // 0
mySmallQueue.enqueue('Gavin');
mySmallQueue.printQueue();              // START <- Gavin <- EMPTY <- EMPTY <- END
