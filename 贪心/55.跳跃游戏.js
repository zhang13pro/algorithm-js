/*
 * @lc app=leetcode.cn id=55 lang=javascript
 *
 * [55] 跳跃游戏
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let index = 0,
    max = 0,
    target = nums.length - 1;

  while (index < nums.length) {
    max = Math.max(max, index + nums[index]);

    if (max >= target) return true;

    if (max <= index && nums[index] === 0) return false;

    index++;
  }
  return false;
};
// @lc code=end
