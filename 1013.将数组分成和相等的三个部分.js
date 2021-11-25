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
  let sum = arr.reduce((total, x) => total + x);
  if (sum % 3) return false;

  const oneThird = sum / 3;
  let p1 = 0,
    p2 = arr.length - 1,
    sum1 = 0,
    sum2 = sum,
    sum3 = 0;

  while (sum1 !== oneThird) {
    sum1 += arr[p1];
    sum2 -= arr[p1];
    p1++;
  }

  // TODO 算了 我果然很拉
  return sum1 === sum2 && sum2 === sum3;
};
// @lc code=end
