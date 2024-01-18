// Iterate
function useForInObject(input) {
    for (i in input) {
        console.log("Key is " + i + ", Value is " + input[i])
    }
}

useForInObject({a: 1, b: 2, c: 3});

let a = { x: 5 };
console.log(a.x);       // 5
console.log(a['x']);    // 5

let b = { 'y': 5 };
console.log(b.y);       // 5
console.log(b['y']);    // 5

/* Find total value of stock portfolio with information about stock prices and holdings */
let portfolios = [{'name': 'Riddhi', stocks: {'msft': 5, 'meta': 4, 'googl': 10}}, {'name': 'Divyesh', stocks: {'aapl': 6, 'amzn': 10, 'googl': 5}}]

function getPortfolioValue(portfolio) {
    let {name, stocks} = portfolio; // Destructuring
    let stockPrices = {'aapl': 60, 'msft': 100, 'meta': 80, 'amzn': 50, 'googl': 120};
    let totalValue = 0;
    for (stock in stocks) {
        totalValue = totalValue + (stockPrices[stock] * stocks[stock]);
        console.log(stocks[stock] + ' shares of ' + stock + ' at $' + stockPrices[stock]);
    }
    console.log(name + "'s total portfolio value is $" + totalValue);
}

portfolios.forEach(a => getPortfolioValue(a)); // $2020 and $1460