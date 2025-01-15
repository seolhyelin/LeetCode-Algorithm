/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var getEncryptedString = function(s, k) {
    let result = ""
    
    for (let i = 0; i < s.length; i++) {
    let newIndex = (i + k) % s.length;
   result += s[newIndex]
  }

    return result
};