/**
 * @param {string} s
 * @return {string}
 * https://leetcode-cn.com/problems/reverse-words-in-a-string-iii/
 */

// split API
var reverseWords = function (s) {
  // let arr = s.split(" ");
  let arr = s.split(/\s/g);
  let arrResult = arr.map((item) => {
    return item.split("").reverse().join("");
  });
  return arrResult.join(" ");
};

// 正则
var reverseWords = function (s) {
  // TODO 匹配特殊字符
  let arr = s.match(/.+|\w+/g);
  let arrResult = arr.map((item) => {
    return item.split("").reverse().join("");
  });
  return arrResult.join(" ");
};
