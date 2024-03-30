
class MaxHeap {
    constructor() {
        this.heap = [];
    }

    peek() {
        return this.heap.length ? this.heap[0] : null;
    }

    remove() {
        if (this.heap.length === 0) return null;
        let item = this.heap[0];
        this.heap[0] = this.heap[this.heap.length - 1];
        this.heap.pop();
        this.heapifyDown();
        return item;
    }

    add(item) {
        this.heap.push(item);
        this.heapifyUp();
    }

    heapifyUp() {
        let index = this.heap.length - 1;
        while (this.hasParent(index) && this.parent(index) < this.heap[index]) {
            this._swap(this.getParentIndex(index), index);
            index = this.getParentIndex(index);
        }
    }

    heapifyDown() {
        let index = 0;
        while (this.hasLeftChild(index)) {
            let largerChildIndex = this.getLeftChildIndex(index);
            if (this.hasRightChild(index) && this.rightChild(index) > this.leftChild(index)) {
                largerChildIndex = this.getRightChildIndex(index);
            }
            if (this.heap[index] <= this.heap[largerChildIndex]) {
                this._swap(index, largerChildIndex);
            } else {
                break;
            }
            index = largerChildIndex;
        }
    }

    printHeap() {
        console.log(this.heap);
    }

    _swap(indexOne, indexTwo) {
        [this.heap[indexOne], this.heap[indexTwo]] = [this.heap[indexTwo], this.heap[indexOne]];
    }

    getLeftChildIndex(parentIndex) {
        return 2 * parentIndex + 1;
    }

    getRightChildIndex(parentIndex) {
        return 2 * parentIndex + 2;
    }

    getParentIndex(childIndex) {
        return Math.floor((childIndex - 1) / 2);
    }

    hasLeftChild(index) {
        return this.getLeftChildIndex(index) < this.heap.length;
    }

    hasRightChild(index) {
        return this.getRightChildIndex(index) < this.heap.length;
    }

    hasParent(index) {
        return this.getParentIndex(index) >= 0;
    }

    leftChild(index) {
        return this.heap[this.getLeftChildIndex(index)];
    }

    rightChild(index) {
        return this.heap[this.getRightChildIndex(index)];
    }

    parent(index) {
        return this.heap[this.getParentIndex(index)];
    }

}

let myMaxHeap = new MaxHeap();
console.log(myMaxHeap.peek());      // null
myMaxHeap.add(30);
myMaxHeap.add(10);
console.log(myMaxHeap.peek());      // 30
myMaxHeap.add(40);
console.log(myMaxHeap.peek());      // 40
myMaxHeap.add(15);
myMaxHeap.add(50);
myMaxHeap.add(100);
myMaxHeap.add(40);
myMaxHeap.printHeap();              // [ 100, 40, 50, 10, 15, 30, 40 ]
/*
      Max Heap
         100
        /   \
      40     50
     /  \   /  \
    10  15 30   40
*/
console.log(myMaxHeap.peek());      // 100
console.log(myMaxHeap.remove());    // 100
myMaxHeap.printHeap();              // [ 50, 40, 40, 10, 15, 30 ]
/*
      Max Heap
         50
        /  \
      40    40
     /  \   /
    10  15 30
*/
