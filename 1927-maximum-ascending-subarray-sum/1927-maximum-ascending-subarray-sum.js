/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAscendingSum = function(nums) {
  let result=[]
  let tempArr=[nums[0]]

  for(let i=1;i<nums.length;i++){
     if(nums[i]> nums[i-1]){
      tempArr.push(nums[i])
     }else {
      if(tempArr.length>=1){
      result.push([...tempArr])
      }
      tempArr = [nums[i]]
     }
  }

  result.push([...tempArr])
return Math.max(...result.map(arr=> arr.reduce((a,b)=> a+b,0)))
};