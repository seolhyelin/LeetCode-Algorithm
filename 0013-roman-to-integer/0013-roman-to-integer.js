/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
 const obj = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
  };

  let sum = 0;

  for (let i = 0; i < s.length; i++) {
    if (i < s.length - 1 && obj[s[i]] < obj[s[i + 1]]) {
      // 현재 값이 다음 값보다 작으면 두 문자를 묶어서 처리
      sum += obj[s[i + 1]] - obj[s[i]];
      i++; // 두 문자를 처리했으니 한 칸 건너뜀
    } else {
      // 그렇지 않으면 현재 값만 더함
      sum += obj[s[i]];
    }
  }

  return sum;
};