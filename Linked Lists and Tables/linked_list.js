
class Node {
    constructor(item) {
        this.value = item;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    getSize() {
        return this.size;
    }

    isEmpty() {
        return this.size === 0;
    }

    prepend(value) {
        let newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.size = this.size + 1;
    }
    append(value) {
        let newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
        } else {
            let traversePointer = this.head;
            while (traversePointer.next) {
                traversePointer = traversePointer.next;
            }
            traversePointer.next = newNode;
        }
        this.size = this.size + 1;
    }

    insert(value, index) {
        if (index === 0) return this.prepend(value);
        if (index === this.size) return this.append(value);
        if (index < 0 || index > this.size) return 'Cannot insert element outside of list range';
        let prevNode = this._findNodeAtIndex(index - 1);
        let nextNode = prevNode.next;
        let newNode = new Node(value);
        this._insertNodeBetween(newNode, prevNode, nextNode);
    }

    removeByIndex(index) {
        if (index < 0 || index >= this.size) return 'Cannot remove element not in list';
        if (index === 0) {
            this.head = this.head.next;
        } else if (index === this.size) {
            let prevNode = this._findNodeAtIndex(index - 1);
            prevNode.next = null;
        } else {
            let prevNode = this._findNodeAtIndex(index - 1);
            let currentNodeToDelete = prevNode.next;
            prevNode.next = currentNodeToDelete.next;
        }
        this.size = this.size - 1;
    }

    removeByValue(value) {
        let indexToRemove = this._findNodeIndexByValue(value);
        return this.removeByIndex(indexToRemove);
    }

    has(value) {
        return this._findNodeIndexByValue(value) === -1 ? false : true; 
    }

    printList() {
        let traversePointer = this.head;
        let listToPrint = '';
        while(traversePointer) {
            listToPrint = listToPrint + traversePointer.value + ' -> ';
            traversePointer = traversePointer.next;
        }
        listToPrint = listToPrint + 'null';
        console.log(listToPrint);
    }

    reverse() {
        let currentNode = this.head;
        let previousNode = null;
        while (currentNode) {
            let nextNode = currentNode.next;
            currentNode.next = previousNode;
            previousNode = currentNode;
            currentNode = nextNode;
        }
        this.head = previousNode;
    }

    printMiddleNode(head = this.head) {
        if (!head) return null;
        let fast = head;
        let slow = head;
        while (fast && fast.next) {
            fast = fast.next.next;
            slow = slow.next;
        }
        console.log(slow.value);
    }

    _findNodeAtIndex(index) {
        let traversePointer = this.head;
        for (let i = 0; i < index; i = i + 1) {
            traversePointer = traversePointer.next;
        }
        return traversePointer;
    }

    _findNodeIndexByValue(value) {
        let traversePointer = this.head;
        for (let i = 0; i < this.size; i = i + 1) {
            if (traversePointer.value === value) {
                return i;
            }
            traversePointer = traversePointer.next;
        }
        return -1;
    }

    _insertNodeBetween(newNode, previousNode, afterNode) {
        newNode.next = afterNode;
        previousNode.next = newNode;
        this.size = this.size + 1;
    }

}

// Testing
console.log('---Append and Prepend operations---');
let myLinkedList = new LinkedList();
myLinkedList.printList();                   // null
console.log(myLinkedList.isEmpty());        // true
myLinkedList.prepend('Adam');
console.log(myLinkedList.isEmpty());        // false
myLinkedList.prepend('Ben');
console.log(myLinkedList.getSize());        // 2
myLinkedList.printList();                   // Ben -> Adam -> null
myLinkedList.printMiddleNode();             // Adam
myLinkedList.append('Chris');
myLinkedList.prepend('Dan');
myLinkedList.append('Emily');
myLinkedList.printList();                   // Dan -> Ben -> Adam -> Chris -> Emily -> null
console.log(myLinkedList.getSize());        // 5
myLinkedList.printMiddleNode();             // Adam

console.log('---Insert operations---');
myLinkedList.insert('Frank', 3);
myLinkedList.printList();                       // Dan -> Ben -> Adam -> Frank -> Chris -> Emily -> null
myLinkedList.insert('Gus', 0);
myLinkedList.printList();                       // Gus -> Dan -> Ben -> Adam -> Frank -> Chris -> Emily -> null
myLinkedList.insert('Hank', 7);
myLinkedList.printList();                       // Gus -> Dan -> Ben -> Adam -> Frank -> Chris -> Emily -> Hank -> null
myLinkedList.printMiddleNode();                 // Frank
console.log(myLinkedList.insert('Ivan', 9));    // Cannot insert element outside of list range
myLinkedList.insert('John', 1);
myLinkedList.printList();                       // Gus -> John -> Dan -> Ben -> Adam -> Frank -> Chris -> Emily -> Hank -> null
console.log(myLinkedList.getSize());            // 9
myLinkedList.printMiddleNode();                 // Adam

console.log('---Remove by Index---');
myLinkedList.removeByIndex(5);
myLinkedList.printList();                       // Gus -> John -> Dan -> Ben -> Adam -> Chris -> Emily -> Hank -> null
myLinkedList.removeByIndex(0);
myLinkedList.printList();                       // John -> Dan -> Ben -> Adam -> Chris -> Emily -> Hank -> null
myLinkedList.removeByIndex(6);
myLinkedList.printList();                       // John -> Dan -> Ben -> Adam -> Chris -> Emily -> null
console.log(myLinkedList.removeByIndex(6));     // Cannot remove element not in list
myLinkedList.removeByIndex(1);
myLinkedList.printList();                       // John -> Ben -> Adam -> Chris -> Emily -> null
console.log(myLinkedList.getSize());            // 5
myLinkedList.printMiddleNode();                 // Adam

console.log('---Remove by Value---');
myLinkedList.removeByValue('Adam');
myLinkedList.printList();                       // John -> Ben -> Chris -> Emily -> null
myLinkedList.printMiddleNode();                 // Chris
myLinkedList.removeByValue('John');
myLinkedList.printList();                       // Ben -> Chris -> Emily -> null
console.log(myLinkedList.removeByValue('Adam'));// Cannot remove element not in list
myLinkedList.removeByValue('Emily');
myLinkedList.printList();                       // Ben -> Chris -> null
console.log(myLinkedList.getSize());            // 2

console.log('---Search by Value---');
console.log(myLinkedList.has('Ben'));           // true
console.log(myLinkedList.has('Adam'));          // false
console.log(myLinkedList.has('Chris'));         // true

console.log('---Reverse---');
myLinkedList.insert('Kane', 0);
myLinkedList.insert('Larry', 3);
myLinkedList.printList();                       // Kane -> Ben -> Chris -> Larry -> null
myLinkedList.printMiddleNode();                 // Chris
myLinkedList.reverse();
myLinkedList.printList();                       // Larry -> Chris -> Ben -> Kane -> null
myLinkedList.printMiddleNode();                 // Ben
myLinkedList.insert('Mark', 1);
myLinkedList.reverse();
myLinkedList.printList();                       // Kane -> Ben -> Chris -> Mark -> Larry -> null
myLinkedList.removeByIndex(1);
myLinkedList.reverse();
myLinkedList.printList();                       // Larry -> Mark -> Chris -> Kane -> null
console.log(myLinkedList.getSize());            // 4
