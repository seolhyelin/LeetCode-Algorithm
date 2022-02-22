/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
     let maj = '';
  let majCount = 0;

  for (const n of nums) {
    if (majCount === 0) {
      maj = n;
      majCount++;
    } else if (maj === n) majCount++;
    else majCount--;
  }
  return maj;
};