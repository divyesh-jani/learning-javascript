// Given a list of words, group words together that are anagrams

function groupAnagrams(list) {
    let wordMap = {};
    let sorted = list.map(word => word.split("").sort().join(""));
    for (let i = 0; i < sorted.length; i = i + 1) {
        if (wordMap[sorted[i]]) {
            wordMap[sorted[i]].push(list[i]);
        } else {
            wordMap[sorted[i]] = [list[i]];
        }
    }
    return Object.values(wordMap);
}
// Time Complexity: O(n*klog(k)) Space Complexity: O(n*k) : n is length of list, k is max length of word in list

function groupAnagramsBetter(list) {
    let map = new Map();
    for(let word of list) {
        let count = new Array(26).fill(0);
        for(let i = 0; i < word.length; i = i + 1) {
            const charIdx = word.charCodeAt(i) - 97;
            count[charIdx]++;
        }
        const key = count.join('#');
        if(map.has(key)) {
            map.get(key).push(word);
        } else {
            map.set(key, [word]);
        }
    }
    return Array.from(map.values());
}
// Time Complexity: O(n*k) Space Complexity: O(n*k)

// Testing
let words = [];
console.log(groupAnagramsBetter(words));    // []
console.log(groupAnagrams(words));          // []
words = [''];
console.log(groupAnagramsBetter(words));    // [ [ '' ] ]
console.log(groupAnagrams(words));          // [ [ '' ] ]
words = ['a'];
console.log(groupAnagramsBetter(words));    // [ [ 'a' ] ]
console.log(groupAnagrams(words));          // [ [ 'a' ] ]
words = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagramsBetter(words));    // [ [ 'eat', 'tea', 'ate' ], [ 'tan', 'nat' ], [ 'bat' ] ]
console.log(groupAnagrams(words));          // [ [ 'eat', 'tea', 'ate' ], [ 'tan', 'nat' ], [ 'bat' ] ]
