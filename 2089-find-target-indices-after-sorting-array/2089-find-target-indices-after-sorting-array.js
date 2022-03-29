/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function(nums, target) {
    const sortArr=nums.sort((a,b)=>a-b); 
    let newArr=[];
    
  for(let i=0;i<sortArr.length;i++){
    if(sortArr[i]==target){
      newArr.push(i)
    }
  }
  return newArr.sort((a,b)=>a-b);
};