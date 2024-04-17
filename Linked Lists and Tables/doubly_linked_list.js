
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.previous = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
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
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.previous = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.size = this.size + 1;
    }

    append(value) {
        let newNode = new Node(value);
        if (!this.tail) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.previous = this.tail;
            this.tail = newNode;
        }
        this.size = this.size + 1;
    }

    insert(value, index) {
        if (index < 0 || index > this.size) return 'Cannot insert outside the range of List!';
        let newNode = new Node(value);
        if (index === 0) {
            this.prepend(value);
        } else if (index === this.size) {
            this.append(value);
        } else {
            let nodeAtIndex = this._findAtIndex(index);
            let previousNode = nodeAtIndex.previous;
            newNode.previous = previousNode;
            newNode.next = nodeAtIndex;
            previousNode.next = newNode;
            nodeAtIndex.previous = newNode;
            this.size = this.size + 1;
        }
    }

    removeByIndex(index) {
        if (index < 0 || index >= this.size) return 'Cannot remove outside the range of List!';
        let removedValue;
        if (index === 0) {
            removedValue = this.head.value;
            this.head = this.head.next;
            this.head.previous = null;
        } else if (index === this.size - 1) {
            removedValue = this.tail.value;
            this.tail = this.tail.previous;
            this.tail.next = null;
        } else {
            let nodeAtIndex = this._findAtIndex(index);
            removedValue = nodeAtIndex.value;
            let previousNode = nodeAtIndex.previous;
            let nextNode = nodeAtIndex.next;
            previousNode.next = nextNode;
            nextNode.previous = previousNode;
        }
        this.size = this.size - 1;
        return 'Removed: ' + removedValue;
    }

    removeByValue(value) {
        let indexToRemove = this._getIndexByValue(value);
        if (indexToRemove === -1) {
            return 'Cannot remove because ' + value + ' does not exist!';
        } else {
            this.removeByIndex(indexToRemove);
            return 'Removed: ' + value;
        }
    }

    has(value) {
        let currentNode = this.head;
        while (currentNode) {
            if (currentNode.value === value) {
                return true;
            }
            currentNode = currentNode.next;
        }
        return false;
    }

    printFromStart() {
        let currentNode = this.head;
        let list = 'Start ->';
        while (currentNode) {
            list = list + ' ' + currentNode.value + ' ->';
            currentNode = currentNode.next;
        }
        list = list + ' End';
        return list;
    }

    printFromEnd() {
        let currentNode = this.tail;
        let list = 'End ->';
        while (currentNode) {
            list = list + ' ' + currentNode.value + ' ->';
            currentNode = currentNode.previous;
        }
        list = list + ' Start';
        return list;
    }

    reverseUsingHead() {
        let currentNode = this.head;
        this.tail = currentNode;
        let setNext = null;
        while (currentNode) {
            let nextNode = currentNode.next;
            currentNode.previous = nextNode;
            currentNode.next = setNext;
            setNext = currentNode;
            currentNode = nextNode;
        }
        this.head = setNext;
    }

    reverseUsingTail() {
        let currentNode = this.tail;
        this.head = currentNode;
        let setPrevious = null;
        while (currentNode) {
            let previousNode = currentNode.previous;
            currentNode.next = previousNode;
            currentNode.previous = setPrevious;
            setPrevious = currentNode;
            currentNode = previousNode;
        }
        this.tail = setPrevious;
    }

    _findAtIndex(index) {
        let currentNode = this.head;
        let currentIndex = 0;
        while (currentIndex !== index) {
            currentNode = currentNode.next;
            currentIndex = currentIndex + 1;
        }
        return currentNode;
    }

    _getIndexByValue(value) {
        let index = 0;
        let currentNode = this.head;
        while (currentNode) {
            if (currentNode.value === value) {
                return index;
            }
            currentNode = currentNode.next;
            index = index + 1;
        }
        return -1;
    }
}

// Testing
let myDLL = new DoublyLinkedList();
console.log(myDLL.isEmpty());           // true
myDLL.prepend('A');
myDLL.append('B');
myDLL.append('C');
myDLL.prepend('D');
console.log(myDLL.getSize());           // 4
myDLL.append('E');
myDLL.append('F');
myDLL.append('G');
myDLL.prepend('H');
console.log(myDLL.isEmpty());           // false
myDLL.append('I');
myDLL.prepend('J');
myDLL.prepend('K');
console.log(myDLL.getSize());           // 11
console.log('---Printing from Start---');
console.log(myDLL.printFromStart());    // Start -> K -> J -> H -> D -> A -> B -> C -> E -> F -> G -> I -> End
console.log('---Printing from End---');
console.log(myDLL.printFromEnd());      // End -> I -> G -> F -> E -> C -> B -> A -> D -> H -> J -> K -> Start
myDLL.reverseUsingHead();
console.log('---Printing after Reversing List from Start---');
console.log(myDLL.printFromStart());    // Start -> I -> G -> F -> E -> C -> B -> A -> D -> H -> J -> K -> End
myDLL.reverseUsingTail();
console.log('---Printing after Reversing List from Tail---');
console.log(myDLL.printFromStart());    // Start -> K -> J -> H -> D -> A -> B -> C -> E -> F -> G -> I -> End
console.log(myDLL.removeByIndex(0));    // Removed: K
console.log(myDLL.removeByIndex(9));    // Removed: I
console.log(myDLL.removeByIndex(9));    // Cannot remove outside the range of List!
console.log(myDLL.removeByIndex(7));    // Removed: F
console.log('---Printing after Removing by Index---');
console.log(myDLL.printFromStart());    // Start -> J -> H -> D -> A -> B -> C -> E -> G -> End
console.log(myDLL.removeByValue('G'));  // Removed: G
console.log(myDLL.removeByValue('J'));  // Removed: J
console.log(myDLL.removeByValue('I'));  // Cannot remove because I does not exist!
console.log(myDLL.removeByValue('B'));  // Removed: B
console.log('---Printing after Removing by Value---');
console.log(myDLL.printFromStart());    // Start -> H -> D -> A -> C -> E -> End
console.log(myDLL.getSize());           // 5
console.log(myDLL.has('E'));            // true
console.log(myDLL.has('D'));            // true
console.log(myDLL.has('B'));            // false
console.log(myDLL.has('H'));            // true
myDLL.insert('B', 5);
myDLL.insert('G', 0);
myDLL.insert('J', 8);
myDLL.insert('K', 3);
myDLL.insert('L', 6);
console.log(myDLL.printFromStart());    // Start -> G -> H -> D -> K -> A -> C -> L -> E -> B -> End
console.log(myDLL.has('B'));            // true
console.log(myDLL.has('J'));            // false
console.log(myDLL.getSize());           // 9
myDLL.reverseUsingTail();
console.log('---Printing after Reversing List from Tail---');
console.log(myDLL.printFromStart());    // Start -> B -> E -> L -> C -> A -> K -> D -> H -> G -> End
myDLL.reverseUsingHead();
console.log('---Printing after Reversing List from Start---');
console.log(myDLL.printFromStart());    // Start -> G -> H -> D -> K -> A -> C -> L -> E -> B -> End
