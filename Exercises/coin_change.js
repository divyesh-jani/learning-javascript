// Given denominations of coins and the payment amount, determine the minimum number of coins needed to make the payment.
// Return -1 if exact payment cannot be made using available coins

function coinChange(coins, amount) {
    let minCoinsFor = Array(amount + 1).fill(Infinity);
    minCoinsFor[0] = 0;
    for (let i = 0; i < coins.length; i = i + 1) {
        for (let j = coins[i]; j <= amount; j = j + 1) {
            minCoinsFor[j] = Math.min(minCoinsFor[j], minCoinsFor[j - coins[i]] + 1);
        }
    }
    return minCoinsFor[amount] === Infinity ? -1 : minCoinsFor[amount];
}

console.log(coinChange([1, 2, 5], 11));             // 3
console.log(coinChange([1, 3, 4, 5], 7));           // 2
console.log(coinChange([2, 10], 21));               // -1
console.log(coinChange([1, 2, 4, 5, 10], 56));      // 7
console.log(coinChange([2, 3, 5, 10, 50], 69));     // 5
