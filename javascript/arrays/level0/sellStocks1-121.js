/*
You are given an array prices where prices[i] is the price of a given stock on the ith day.
You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

Examples
Example 1:
Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6 – 1 = 5.

Example 2:
Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.
*/

function maxProfit (prices) {
    let minPrice = Infinity
    let maxProfit = 0
    for (let price of prices) {
        if (price < minPrice) {
            minPrice = price
        } else {
            let profit = price - minPrice;
            maxProfit = Math.max(maxProfit, profit)
        }
    }
    return maxProfit
}

const t1 = maxProfit([7, 1, 5, 3, 6, 4])
const t2 = maxProfit([7, 6, 4, 3, 1])
console.log(t1);
console.log(t2);
