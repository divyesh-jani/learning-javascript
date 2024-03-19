// Given denominations of coins and the payment amount, determine the minimum number of coins needed to make the payment.
// Return -1 if exact payment cannot be made using available coins

function coinChangeRecursive(coins, amount) {
    let minCoinsNeeded = Number.MAX_SAFE_INTEGER;
    function changeRecursively(coins, amount, count) {
        if (count >= minCoinsNeeded) return;
        if (amount < 0) return;
        if (amount === 0) {
            if (count < minCoinsNeeded) minCoinsNeeded = count;
            return;
        }
        for (let coin of coins) {
            let newAmount = amount - coin;
            changeRecursively(coins, newAmount, count + 1);
        }
    }
    changeRecursively(coins, amount, 0);
    return minCoinsNeeded === Number.MAX_SAFE_INTEGER ? -1 : minCoinsNeeded;
}

console.log('----- Recursive -----');
console.log(coinChangeRecursive([1, 2, 5], 11));            // 3
console.log(coinChangeRecursive([1, 3, 4, 5], 7));          // 2
console.log(coinChangeRecursive([2, 10], 21));              // -1
console.log(coinChangeRecursive([1, 2, 4, 5, 10], 56));     // 7
console.log(coinChangeRecursive([2, 3, 5, 10, 50], 69));    // 5

function coinChangeTabulated(coins, amount) {
    let minCoinsFor = Array(amount + 1).fill(Number.MAX_SAFE_INTEGER);
    minCoinsFor[0] = 0;
    for (let i = 0; i < coins.length; i = i + 1) {
        for (let j = coins[i]; j <= amount; j = j + 1) {
            minCoinsFor[j] = Math.min(minCoinsFor[j], minCoinsFor[j - coins[i]] + 1);
        }
    }
    return minCoinsFor[amount] === Number.MAX_SAFE_INTEGER ? -1 : minCoinsFor[amount];
}

console.log('----- Tabulated -----');
console.log(coinChangeTabulated([1, 2, 5], 11));            // 3
console.log(coinChangeTabulated([1, 3, 4, 5], 7));          // 2
console.log(coinChangeTabulated([2, 10], 21));              // -1
console.log(coinChangeTabulated([1, 2, 4, 5, 10], 56));     // 7
console.log(coinChangeTabulated([2, 3, 5, 10, 50], 69));    // 5
