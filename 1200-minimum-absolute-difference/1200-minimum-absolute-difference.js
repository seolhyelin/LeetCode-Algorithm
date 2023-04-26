/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function(arr) {
        const ascend=arr.sort((a,b)=>a-b)
  const diff=[]
  const result=[]
  for(let i=0;i<arr.length-1;i++){
    diff.push(ascend[i+1]-ascend[i])
  }
  const min=Math.min(...diff)
  
  for(let i=0;i<arr.length-1;i++){
    if(ascend[i+1]-ascend[i] === min){
      result.push([ascend[i+1],ascend[i]].sort((a,b)=>a-b))
    }
  }
  
return result
};