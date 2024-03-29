// Create an LRU and MRU cache class that can perform read and write in constant time O(1)

class CacheListNode {
    constructor (key, value) {
        this.key = key;
        this.value = value;
        this.next = null;
        this.previous = null;
    }
}

class LRUCache {
    constructor (capacity = 5) {
        this.size = 0;
        this.capacity = capacity;
        this.head = null;
        this.tail = null;
        this.cacheMap = {};
    }

    put(key, value) {
        if (this.cacheMap[key]) {
            this.remove(this.cacheMap[key]);
        } else if (this.size === this.capacity) {
            delete this.cacheMap[this.tail.key];
            console.log('Removing ' + this.tail.key + ' to store ' + key);
            this.remove(this.tail);
        }

        if (!this.head) {
            this.head = new CacheListNode(key, value);
            this.tail = this.head;
        } else {
            let node = new CacheListNode(key, value);
            node.next = this.head;
            this.head.previous = node;
            this.head = node;
        }

        this.cacheMap[key] = this.head;
        this.size = this.size + 1;
    }

    get(key) {
        if (this.cacheMap[key]) {
            let existingNode = this.cacheMap[key];
            const value = existingNode.value;
            if (this.head !== existingNode) {
                this.put(key, value);
            }
            console.log('Value of ' + key + ' is ' + value);
            return value;
        }
        console.log('Key ' + key + ' does not exist in cache!');
    }

    logLeastRecentlyUsed() {
        this.tail ? console.log('LRU key: ' + this.cacheMap[this.tail.key].key) : console.log(null);
    }

    logMostRecentlyUsed() {
        this.head ? console.log('MRU key: ' + this.cacheMap[this.head.key].key) : console.log(null);
    }

    remove(node) {
        if (this.head === node) {
            this.head = node.next;
        } else {
            node.previous.next = node.next;
        }

        if (this.tail === node) {
            this.tail = node.previous;
        } else {
            node.next.previous = node.previous;
        }
        this.size = this.size - 1;
    }

    clear() {
        this.head = null;
        this.tail = null;
        this.size = 0;
        this.cacheMap = {};
    }
}

let lruCache = new LRUCache(3);
lruCache.put('a', 1);
lruCache.put('b', 2);
lruCache.logMostRecentlyUsed();     // MRU key: b
lruCache.put('c', 3);
lruCache.logLeastRecentlyUsed();    // LRU key: a
lruCache.get('a');                  // Value of a is 1
lruCache.logLeastRecentlyUsed();    // LRU key: b
lruCache.put('d', 4);               // Removing b to store d
lruCache.get('a');                  // Value of a is 1
lruCache.logMostRecentlyUsed();     // MRU key: a
console.log('----------');
lruCache.logLeastRecentlyUsed();    // LRU key: c
lruCache.put('d', 40);
lruCache.get('b');                  // Key b does not exist in cache!
lruCache.logLeastRecentlyUsed();    // LRU key: c
lruCache.get('c');                  // Value of c is 3
lruCache.logLeastRecentlyUsed();    // LRU key: a
lruCache.logMostRecentlyUsed();     // MRU key: c
lruCache.clear();
lruCache.logMostRecentlyUsed();     // null
lruCache.logLeastRecentlyUsed();    // null
lruCache.put('e', 5);
lruCache.logMostRecentlyUsed();     // MRU key: e
lruCache.logLeastRecentlyUsed();    // LRU key: e
