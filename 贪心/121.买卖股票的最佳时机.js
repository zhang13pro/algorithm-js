/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 * @Version 2.0
 * @Date November 11,2021
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let max = 0,
    min = Number.MAX_VALUE;
  for (const money of prices) {
    min = Math.min(min, money);
    max = Math.max(max, money - min);
  }
  return max;
};
// @lc code=end
