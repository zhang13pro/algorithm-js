/*
 * @lc app=leetcode.cn id=134 lang=javascript
 *
 * [134] 加油站
 */

// @lc code=start
/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
  let total = 0,
    currentTank = 0,
    location = 0;

  for (let i = 0; i < gas.length; i++) {
    total += gas[i] - cost[i];
    currentTank += gas[i] - cost[i];

    if (currentTank < 0) {
      location = i + 1;
      currentTank = 0;
    }
  }

  return total >= 0 ? location : -1;
};
// @lc code=end
