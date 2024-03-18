// Iterate

// for-in to loop over objects
// for-in = object; for-of = array
function useForInObject(input) {
    for (i in input) {
        console.log("Key is " + i + ", Value is " + input[i])
    }
}
useForInObject({a: 10, b: 20, c: 30});

console.log(Object.keys({a: 10, b: 20, c: 30}));        // [ 'a', 'b', 'c' ]
console.log(Object.values({a: 10, b: 20, c: 30}));      // [ 10, 20, 30 ]
console.log(Object.entries({a: 10, b: 20, c: 30}));     // [ [ 'a', 10 ], [ 'b', 20 ], [ 'c', 30 ] ]

// Accessing values
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
    for (const stock in stocks) {
        totalValue = totalValue + (stockPrices[stock] * stocks[stock]);
        console.log(stocks[stock] + ' shares of ' + stock + ' at $' + stockPrices[stock]);
    }
    console.log(name + "'s total portfolio value is $" + totalValue);
}

portfolios.forEach(a => getPortfolioValue(a)); // $2020 and $1460

// Property manipulation - add all properties of b to a
let firstObj = { a: 1, d: 4 };
let secondObj = { a: 5, b: 6, c: 7 };

function addProperties(objOne, objTwo) {
    for (prop in objTwo) {
        objOne[prop] = objTwo[prop];
    }
    console.log(objOne);
}
addProperties(firstObj, secondObj); // { a: 5, d: 4, b: 6, c: 7 }

// Property manipulation - add all properties of b to a that do not exist in a. Do no override any properties in a.
let first = { a: 1, d: 4 };
let second = { a: 5, b: 6, c: 7 };
function addMissingProperties(objOne, objTwo) {
    for (prop in objTwo) {
        if (!objOne.hasOwnProperty(prop)) {
            objOne[prop] = objTwo[prop]
        }
    }
    console.log(objOne);
}
addMissingProperties(first, second); // { a: 1, d: 4, b: 6, c: 7 }

// Property manipulation - remove properties from a that do not exist in b
let firstObject = { a: 1, d: 4 };
let secondObject = { a: 5, b: 6, c: 7 };
function keepSharedProperty(objOne, objTwo) {
    for (prop in objOne) {
        if (!objTwo.hasOwnProperty(prop)) {
            delete objOne[prop];
        }
    }
    console.log(objOne);
}
keepSharedProperty(firstObject, secondObject); // { a: 1 }
