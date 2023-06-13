/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
        const length=nums.length
    const sortArr=[...new Set(nums)].sort((a,b)=>a-b)
    const newArr=[]
  
  if(sortArr.length === length)return []
  
  for(let i=1;i<nums.length+1;i++){
    newArr.push(i)
  }
  
  const result=newArr.filter((num)=> !sortArr.includes(num))
  return result

};