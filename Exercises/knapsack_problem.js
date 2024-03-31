// Given set of items each with a value and a weight, determine items to include
// in collection so that total weight is less than or equal to capacity
// and total value is as large as possible

function getKnapSack(capacity, values, weights) {
    let result = new Array(values.length + 1).fill().map(() => Array(capacity + 1).fill(0));
    for (let i = 1; i <= values.length; i = i + 1) {
        for (let j = 0; j <= capacity; j = j + 1) {
            if (weights[i - 1] > j) {
                result[i][j] = result[i - 1][j];
            } else {
                result[i][j] = Math.max(result[i - 1][j], result[i - 1][j - weights[i - 1]] + values[i - 1]);
            }
        }
    }
    return result[values.length][capacity];
}

let values = [10, 20, 30, 40];
let weights = [30, 10, 40, 20];
let capacity = 40;
console.log(getKnapSack(capacity, values, weights));    // 60

values = [12, 2, 1, 4, 1];
weights = [4, 2, 1, 10, 2];
capacity = 15;
console.log(getKnapSack(capacity, values, weights));    // 17
