/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function(nums) {
        const even=[]
    const odd=[]
    const result=[]
  
    for(let i=0;i<nums.length;i++){
      if(nums[i]%2===0){
        even.push(nums[i])
      }else{
        odd.push(nums[i])
      }
    }
  
  for(let i=0;i<nums.length/2;i++){
    result.push(even[i])
    result.push(odd[i])
  }

  return result
};