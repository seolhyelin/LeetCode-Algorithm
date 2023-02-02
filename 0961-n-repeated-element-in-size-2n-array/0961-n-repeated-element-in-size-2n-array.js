/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function(nums) {
      let obj={}
  
  for(let i in nums){
    obj[nums[i]]?obj[nums[i]]++:obj[nums[i]]=1
    if(obj[nums[i]]>1) return nums[i]
  }
};