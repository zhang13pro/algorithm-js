/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const map = new Map();
  for (i = 0; i < nums.length; i++) {
    let x = target - nums[i];
    if (map.has(x)) return [i, map.get(x)];
    map.set(nums[i], i);
  }
};
