
class TrieNode {
    constructor(value) {
        this.value = value;
        this.isEndOfWord = false;
        this.children = {};
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode(null);
    }

    add(word, root = this.root) {
        for (let char of word) {
            if (!root.children[char]) {
                root.children[char] = new TrieNode(char);
            }
            root = root.children[char];
        }
        root.isEndOfWord = true;
    }

    search(word, root = this.root) {
        for (let char of word) {
            if (!root.children[char]) {
                return false;
            }
            root = root.children[char];
        }
        return root.isEndOfWord;
    }

    suggest(prefix, root = this.root) {
        for (let char of prefix) {
            if (root.children[char]) {
                root = root.children[char];
            } else {
                return [];
            }
        }
        return this._getWordsFromNode(root);
    }

    listAllWords(root = this.root) {
        return this._getWordsFromNode(root);
    }

    _getWordsFromNode(node) {
        let allWords = [];
        function getAll(node, currChars) {
            if (node && node.isEndOfWord) {
                allWords.push(currChars);
                return;
            }
            for (let key in node.children) {
                let newChars = currChars + key;
                getAll(node.children[key], newChars);
            }
        }
        getAll(node, '');
        return allWords;
    }
}

let wordTrie = new Trie();
wordTrie.add('TEST');
wordTrie.add('TRAVEL');
wordTrie.add('WEST');
wordTrie.add('HOME');
wordTrie.add('LIGHT');
wordTrie.add('WAIT');
wordTrie.add('LINE');
wordTrie.add('TOUR');
wordTrie.add('TOWER');
wordTrie.add('HIRE');
wordTrie.add('WATER');
wordTrie.add('APPLE');
wordTrie.add('BETTER');
wordTrie.add('HOUR');
wordTrie.add('MINUTE');
wordTrie.add('SECOND');
console.log('----- List all words -----');
console.log(wordTrie.listAllWords());
/*
[
    'TEST', 'TRAVEL', 'TOUR', 'TOWER', 'WEST', 'WAIT',
    'WATER', 'HOME', 'HOUR', 'HIRE', 'LIGHT', 'LINE',
    'APPLE', 'BETTER', 'MINUTE', 'SECOND'
]
*/
console.log('----- Search -----');
console.log(wordTrie.search('TESTING'));    // false
console.log(wordTrie.search('TEST'));       // true
console.log(wordTrie.search('TOW'));        // false
console.log(wordTrie.search('WEST'));       // true
console.log(wordTrie.search('APP'));        // false
console.log(wordTrie.search('LINER'));      // false
console.log(wordTrie.search('FIRST'));      // false
console.log(wordTrie.search('SECOND'));     // true
console.log('----- Suggest -----');
console.log(wordTrie.suggest('W'));         // [ 'EST', 'AIT', 'ATER' ]
console.log(wordTrie.suggest('TO'));        // [ 'UR', 'WER' ]
console.log(wordTrie.suggest('TI'));        // []
console.log(wordTrie.suggest('BET'));       // [ 'TER' ]
console.log(wordTrie.suggest('L'));         // [ 'IGHT', 'INE' ]
console.log(wordTrie.suggest(''));
/*
[
  'TEST',   'TRAVEL', 'TOUR',
  'TOWER',  'WEST',   'WAIT',
  'WATER',  'HOME',   'HOUR',
  'HIRE',   'LIGHT',  'LINE',
  'APPLE',  'BETTER', 'MINUTE',
  'SECOND'
]
*/
