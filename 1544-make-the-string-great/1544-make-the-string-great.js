/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function(s) {
 for (let i = 0; i < s.length - 1; i++) {
    if (Math.abs(s[i].charCodeAt() - s[i + 1].charCodeAt()) === 32) {
      s = s.replace(s[i] + s[i + 1], "");
      i === 0 ? i-- : (i = i - 2);
    }
  }
  return s;
};