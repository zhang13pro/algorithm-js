/*
 * @lc app=leetcode.cn id=2022 lang=javascript
 *
 * [2022] 将一维数组转变成二维数组
 */

// @lc code=start
/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
var construct2DArray = function (original, m, n) {
  if (original.length !== m * n) return [];
  let result = [];
  for (var i = 0; i < original.length; i += n) {
    result.push(original.slice(i, i + n));
  }

  return result;
};
// @lc code=end
