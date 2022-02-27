/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
  const arr=new Set(nums.sort((a,b)=>b-a));
  console.log(arr);
  
  if(arr.size<3){
    return Array.from(arr)[0];
  }else{
    return Array.from(arr)[2];
  }
};