/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
    let count = 0

    while(nums.length > 0){
      let setNums=new Set(nums)
      if(setNums.size === nums.length){
          return count
      } 

      nums.splice(0,3)
      count ++
    } 
   return count
};