/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
/**
 * Example 1:
 * Input: num = [1,2,0,0], k = 34
 * Output: [1,2,3,4]
 * Explanation: 1200 + 34 = 1234
 */
var addToArrayForm = function (num, k) {
  const res = [];
  let sum = 0;
  for (let i = num.length - 1; i >= 0; i--) {
    sum = num[i] + (k % 10);
    k = Math.floor(k / 10);

    if (sum >= 10) {
      k++;
      sum %= 10;
    }
    res.push(sum);
  }
  // 进位
  for (; k > 0; k = Math.floor(k / 10)) {
    res.push(k % 10);
  }

  res.reverse();
  return res;
};
