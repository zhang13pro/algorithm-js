/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 * 栈
 * 91/91 cases passed (60 ms)
 */
var isValid = function (s) {
  const stack = [];
  for (const item of s) {
    // debugger;
    switch (item) {
      case "(":
        stack.push(")");
        break;
      case "[":
        stack.push("]");
        break;
      case "{":
        stack.push("}");
        break;
      default:
        if (item !== stack.pop()) {
          return false;
        }
    }
  }
  return stack.length === 0;
};

/**
 * @param {string} s
 * @return {boolean}
 * 1.栈
 * String.prototype API
 * 91/91 cases passed (96 ms)
 */
// var isValid = function (s) {
//   while (s.includes("()") || s.includes("{}") || s.includes("[]")) {
//     // debugger;
//     s = s.replace("()", "");
//     s = s.replace("[]", "");
//     s = s.replace("{}", "");
//   }
//   return s === "";
// };

isValid("{[]}");
// @lc code=end
