/**
 * @param {number[]} nums
 * @return {number}
 */
var findTheArrayConcVal = function(nums) {
   let arr=[]
    const stringNums=nums.map(item=> String(item))
  
  while(stringNums.length>1){
    const first=stringNums.shift()
    const last=stringNums.pop()  
    arr.push(first+last)
    }
  
    if(stringNums.length===1){
      arr.push(...stringNums)
    }
const result=arr.map(nums=> +nums)
return result.reduce((a,b)=> a+b)
};