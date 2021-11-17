/*
 * @lc app=leetcode.cn id=1221 lang=javascript
 *
 * [1221] 分割平衡字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function (s) {
  let matches = 0,
    balance = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "R") balance += 1;
    else if (s[i] === "L") balance -= 1;

    if (balance === 0) matches++;
  }

  return matches;
};
// @lc code=end
