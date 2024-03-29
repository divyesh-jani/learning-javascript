// Create a Cache class to get both LRU and MRU using Map

class MyCache {
    constructor(capacity) {
        this.cache = new Map();
        this.capacity = capacity;
    }

    get(key) {
        if (this.cache.has(key)) {
            let value = this.cache.get(key);
            this.cache.delete(key);
            this.cache.set(key, value);
            console.log('Value of ' + key + ' is ' + value);
            return;
        }
        console.log('Key ' + key + ' does not exist in cache!');
    }

    put(key, value) {
        this.cache.delete(key);
        if (this.cache.size === this.capacity) {
            this.cache.delete(this.cache.keys().next().value);
            this.cache.set(key, value);
        } else {
            this.cache.set(key, value);
        }
    }

    logLeastRecent() {
        console.log('Least recent key: ' + Array.from(this.cache)[0][0]);
    }

    logMostRecent() {
        console.log('Most recent key: ' + Array.from(this.cache)[this.cache.size - 1][0]);
    }

}

let myCache = new MyCache(3);
myCache.put('a', 1);
myCache.logLeastRecent();           // Least recent key: a
myCache.put('b', 2);
myCache.logMostRecent();            // Most recent key: b
myCache.put('c', 3);
myCache.logLeastRecent();           // Least recent key: a
myCache.get('a');                   // Value of a is 1
myCache.logLeastRecent();           // Least recent key: b
myCache.put('d', 4);                // Removing b to store d
myCache.get('a');                   // Value of a is 1
myCache.logLeastRecent();           // Least recent key: c
myCache.put('d', 40);
myCache.get('b');                   // Key b does not exist in cache!
myCache.logLeastRecent();           // Least recent key: c
myCache.get('c');                   // Value of c is 3
myCache.logLeastRecent();           // Least recent key: a
myCache.logMostRecent();            // Most recent key: c
