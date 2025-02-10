/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
        let arr=[]
    let temp=[]

    for(let i=0;i<nums.length;i++){
      temp.push(nums[i])

      if(nums[i]+1 !== nums[i+1]){
        arr.push(temp)
        temp=[]
      }
    }
    let result=[]
    for(let i=0;i<arr.length;i++){
         if(arr[i].length>1){
           result.push(Math.min(...arr[i])+ "->" + Math.max(...arr[i]))
        }
      for(let j=0;j<arr[i].length;j++){
       if(arr[i].length === 1) {
          result.push(arr[i][j].toString())
        }
      }
    }
    return result
};