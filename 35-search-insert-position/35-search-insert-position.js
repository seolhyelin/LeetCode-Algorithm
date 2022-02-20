/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
        for(let i=0; i<nums.length; i++){
      if(target==nums[i] || target<nums[i]){
        return i;
      }else if(target>nums[i] && (target<nums[i+1] || nums[i+1]==undefined)){
         return i+1;
      }
    }
};