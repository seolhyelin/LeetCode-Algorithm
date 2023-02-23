/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
  const add = arr=> arr.reduce((a,b)=>a+b)
  
  let digitSum=0
  for(let i of nums){
    while(i){
      digitSum+= i%10
      i=Math.floor(i/10)
    }
  }
  
  return add(nums)-digitSum
};