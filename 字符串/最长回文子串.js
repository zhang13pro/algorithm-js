/**
 * @param {string} s
 * @return {string}
 * 中心扩散
 */
var longestPalindrome = function (s) {
  let strLen = s.length;
  let left = 0;
  let right = 0;
  let len = 1;
  let maxStart = 0;
  let maxLen = 0;

  for (let i = 0; i < strLen; i++) {
    left = i - 1;
    right = i + 1;
    while (left >= 0 && s.charAt(left) == s.charAt(i)) {
      len++;
      left--;
    }
    while (right < strLen && s.charAt(right) == s.charAt(i)) {
      len++;
      right++;
    }
    while (left >= 0 && right < strLen && s.charAt(right) == s.charAt(left)) {
      len = len + 2;
      left--;
      right++;
    }
    if (len > maxLen) {
      maxLen = len;
      maxStart = left;
    }
    len = 1;
  }
  return s.substring(maxStart + 1, maxStart + maxLen + 1);
};
