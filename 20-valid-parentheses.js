/**
 * @param {string} s
 * @return {boolean}
 * replaceAll API 竟然更慢
 */
var isValid = function (s) {
  while (s.includes("()") || s.includes("{}") || s.includes("[]")) {
    s = s.replace("()", "");
    s = s.replace("[]", "");
    s = s.replace("{}", "");
  }

  return s === "";
};
