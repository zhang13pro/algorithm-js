/**
 * @param {number[]} nums
 * @return {number}
 * Time: O(n) Space: O(1)
 */
var maxSubArray = function (nums) {
  let max = nums[0];
  let sum = 0;
  for (num of nums) {
    if (sum > 0) {
      sum += num;
    } else {
      sum = num;
    }
    max = Math.max(sum, max);
  }
  return max;
};
