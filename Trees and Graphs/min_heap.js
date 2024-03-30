
class MinHeap {
    constructor() {
        this.heap = [];
    }

    peek() {
        return this.heap.length ? this.heap[0] : null;
    }

    add(item) {
        this.heap.push(item);
        this._heapifyUp();
    }

    remove() {
        if (this.heap.length === 0) return null;
        let item = this.heap[0];
        this.heap[0] = this.heap[this.heap.length - 1];
        this.heap.pop();
        this._heapifyDown();
        return item;
    }

    _heapifyUp() {
        let index = this.heap.length - 1;
        while (this.hasParent(index) && this.parent(index) > this.heap[index]) {
            this._swap(this.getParentIndex(index), index);
            index = this.getParentIndex(index);
        }
    }

    _heapifyDown() {
        let index = 0;
        while (this.hasLeftChild(index)) {
            let smallerChildIndex = this.getLeftChildIndex(index);
            if (this.hasRightChild(index) && this.rightChild(index) < this.leftChild(index)) {
                smallerChildIndex = this.getRightChildIndex(index);
            }
            if (this.heap[index] >= this.heap[smallerChildIndex]) {
                this._swap(index, smallerChildIndex);
            } else {
                break;
            }
            index = smallerChildIndex;
        }
    }

    printHeap() {
        console.log(this.heap);
    }

    getLeftChildIndex(parentIndex) {
        return (2 * parentIndex) + 1;
    }

    getRightChildIndex(parentIndex) {
        return (2 * parentIndex) + 2;
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

    _swap(indexOne, indexTwo) {
        [this.heap[indexOne], this.heap[indexTwo]] = [this.heap[indexTwo], this.heap[indexOne]];
    }
}

let myMinHeap = new MinHeap();
console.log(myMinHeap.peek());      // null
myMinHeap.add(15);
myMinHeap.add(30);
console.log(myMinHeap.peek());      // 15
myMinHeap.add(10);
console.log(myMinHeap.peek());      // 10
myMinHeap.add(40);
myMinHeap.add(50);
myMinHeap.add(100);
myMinHeap.add(40);
myMinHeap.printHeap();              // [ 10, 30, 15, 40, 50, 100, 40 ]
/*
      Min Heap
         10
        /  \
      30    15
     /  \   / \
    40  50 100 40
*/
console.log(myMinHeap.peek());      // 10
console.log(myMinHeap.remove());    // 10
myMinHeap.printHeap();              // [ 15, 30, 40, 40, 50, 100 ]
/*
      Min Heap
         15
        /  \
      30    40
     /  \   /
    40  50 100
*/
