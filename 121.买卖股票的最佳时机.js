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
  let min = Number.MAX_SAFE_INTEGER;
  let max = 0;
  for (let i of prices) {
    min = Math.min(min, i);
    max = Math.max(max, i - min);
  }

  return max;
};
// @lc code=end
