/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function(nums) {
      let arr=[]
    for(let i=0;i<nums.length;i++){
      for(let j=0;j<nums.length-1;j++){
        if(nums[i] === -nums[j]){
          arr.push(nums[i])
        }
      }
    }
    return arr.length === 0 ? -1 : Math.abs(Math.max(...arr))
    
    };