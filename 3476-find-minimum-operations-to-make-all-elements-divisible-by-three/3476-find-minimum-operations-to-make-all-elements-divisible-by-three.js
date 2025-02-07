/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
        let sum=0
    for(let i in nums){
      if((nums[i] + 1) % 3 ===0 || (nums[i] -1) % 3 ===0){
        sum += 1
      }
    }

    return sum
};