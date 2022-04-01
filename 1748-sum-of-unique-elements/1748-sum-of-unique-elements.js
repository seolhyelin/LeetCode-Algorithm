/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
       let obj={};
  let result=0;
  for(let i=0; i<nums.length; i++){
    obj[nums[i]]?obj[nums[i]]++: obj[nums[i]]=1; 
  }
for(let i in obj){
 if(obj[i]==1){
   result +=Number(i)
 }
}
  return result;
};