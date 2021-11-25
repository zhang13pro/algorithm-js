/*
 * @lc app=leetcode.cn id=1013 lang=javascript
 *
 * [1013] 将数组分成和相等的三个部分
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {boolean}
 */

var canThreePartsEqualSum = function (arr) {
  // 前缀和
  let preSum = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    preSum.push(preSum[i - 1] + arr[i]);
  }
  let single = preSum[preSum.length - 1] / 3;
  let part1 = preSum.indexOf(single);
  let part2 = preSum.indexOf(single * 2, part1 + 1);

  return part2 > part1 && part1 > -1 && part2 < preSum.length - 1;
};

// @lc code=end
