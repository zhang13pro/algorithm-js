/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let lowPrice = Number.MAX_VALUE,
    profit = 0;
  for (let i = 0; i < prices.length; i++) {
    lowPrice = Math.min(lowPrice, prices[i]);
    profit = Math.max(profit, prices[i] - lowPrice);
  }
  return profit;
};
// @lc code=end
