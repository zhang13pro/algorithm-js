/*
 * @lc app=leetcode.cn id=763 lang=javascript
 *
 * [763] 划分字母区间
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function (s) {
  const last = new Array(26);
  const partitions = [];
  let anchor = 0;
  let end = 0;

  //   存储最后出现位置
  for (let i = 0; i < s.length; i++) {
    //   小写字母a的 UTF-16 编码单元 === 97
    last[s.charCodeAt(i) - "a".charCodeAt()] = i;
  }

  for (let i = 0; i < s.length; i++) {
    end = Math.max(end, last[s.charCodeAt(i) - "a".charCodeAt()]);
    if (i === end) {
      partitions.push(i - anchor + 1);
      anchor = i + 1;
    }
  }
  return partitions;
};
// @lc code=end
