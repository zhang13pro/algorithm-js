/*
 * @lc app=leetcode.cn id=45 lang=javascript
 *
 * [45] 跳跃游戏 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  let len = nums.length - 1,
    curr = -1,
    next = 0,
    sum = 0;

  for (let i = 0; next < len; i++) {
    if (i > curr) sum++, (curr = next);
    next = Math.max(next, nums[i] + i);
  }
  return sum;
};
// @lc code=end
