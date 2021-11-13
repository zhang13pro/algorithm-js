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
  let target = nums.length - 1,
    next = 0,
    curr = -1,
    ans = 0;
  // 注意循环判定条件
  for (let i = 0; next < target; i++) {
    if (i > curr) {
      ans++;
      curr = next;
    }
    next = Math.max(next, nums[i] + i);
  }
  return ans;
};
// @lc code=end
