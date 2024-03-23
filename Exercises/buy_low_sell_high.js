// Given an array of daily stock prices, pick a day to buy and another to sell such that you maximize profit.
// Stock price is not 0 on any day and you cannot buy and sell on same day.
// Return an array containing day to buy, day to sell, and profit (0 index is 1st day)

function tradeStock(dailyPrices) {
    let buySellDayProfit = [0, 0, 0];
    let buyDay = 0;
    let maxProfit = 0;
    for (let dayIndex = 1; dayIndex < dailyPrices.length; dayIndex = dayIndex + 1) {
        // check what profit can be made by selling on this day
        let buyPrice = dailyPrices[buyDay];
        let sellingPrice = dailyPrices[dayIndex];
        let profit = sellingPrice - buyPrice;
        // if profit is more than previos max profit, update result and maxprofit for future comparison
        if (profit > maxProfit) {
            maxProfit = profit;
            buySellDayProfit = [buyDay + 1, dayIndex + 1, profit]
        }
        // if price on this day is lower than previous buy price, update buy day to today for future profit calculations
        if (buyPrice > dailyPrices[dayIndex]) {
            buyDay = dayIndex;
        }
    }
    return buySellDayProfit;
}

let pricesOne = [7, 1, 5, 3, 6, 4];
console.log(tradeStock(pricesOne));     // [ 2, 5, 5 ]

let pricesTwo = [7, 5, 3, 6, 4, 5, 3, 9, 9, 1];
console.log(tradeStock(pricesTwo));     // [ 3, 8, 6 ]

let pricesThree = [7, 5, 2];
console.log(tradeStock(pricesThree));   // [ 0, 0, 0 ]

let pricesFour = [7, 5, 2, 9];
console.log(tradeStock(pricesFour));    // [ 3, 4, 7 ]
