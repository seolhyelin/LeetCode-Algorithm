/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function(nums) {
        let arr=[]
    let obj={}
    
    for(let i=0;i<nums.length;i++){
		obj[nums[i]]? obj[nums[i]]++ : (obj[nums[i]]=1)
    }
  console.log(obj)

  return nums.sort((a,b)=> obj[a]===obj[b]? b-a : obj[a]- obj[b])

};