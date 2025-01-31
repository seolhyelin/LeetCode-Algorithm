/**
 * @param {number[]} nums
 * @return {number[]}
 */

var constructTransformedArray = function(nums) {
  let result=[]

  for(let i=0; i<nums.length; i++){
    let index = (i + nums[i] + nums.length ) % nums.length
     if (index < 0) index += nums.length; 
    result[i] = nums[index]
  }
 return result
};