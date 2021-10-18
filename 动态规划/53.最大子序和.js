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

var maxSubArray = function (nums) {
  let pre = 0, // 保存遍历过程中较大值
    max = nums[0]; // 保存最大值
  nums.forEach((x) => {
    pre = Math.max(pre + x, x);
    max = Math.max(pre, max);
  });
  return max;
};
