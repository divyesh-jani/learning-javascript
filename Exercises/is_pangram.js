// Check if given sentence is a pangram.
// A sentence is a pangram if it contains all 26 English alphabets (a - z)

let alphabets = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

function isPangram(sentence) {
    let pangramSet = new Set(alphabets);
    for (let char of sentence) {
        char = char.toLowerCase();
        pangramSet.delete(char);
        if (pangramSet.size === 0) {
            return true;
        }
    }
    return false;
}

console.log(isPangram('the quick brown fox jumps over the lazy dog')); // true
console.log(isPangram('qwertyuiopLKJHGfdsazxcvbnmqwerty')); // true
console.log(isPangram('q2ghrw70_werTYUIopLPJhgfdsazxcvbnm&&8;dfg')); // false
console.log(isPangram('qwertyuioplkjhgfdsaZzcvbnmqwerty')); // false
console.log(isPangram('i have no idea what this will produce butdefinitelynotapangram')); // false
console.log(isPangram('pangram')); // false
