/*
 * @lc app=leetcode.cn id=605 lang=javascript
 *
 * [605] 种花问题
 */

// @lc code=start
/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  let sum = 0;
  const size = flowerbed.length;
  for (var i = 0; i <= size; i++) {
    if (i < size && flowerbed[i] == 0) {
      sum++;
      if (i == 0) sum++;
      if (i == size - 1) sum++;
    } else {
      // 数学归纳
      n -= Math.trunc((sum - 1) / 2);
      if (n <= 0) return true;
      sum = 0;
    }
  }
  return false;
};
// @lc code=end
