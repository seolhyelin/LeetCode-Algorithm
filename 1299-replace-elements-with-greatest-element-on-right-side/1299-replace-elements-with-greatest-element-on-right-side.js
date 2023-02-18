/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
        let result=[]
    let spreadArr=[...arr]
  for(let i=0;i<arr.length;i++){
    spreadArr.shift()
result.push(Math.max(...spreadArr))
  }    
  
  result[arr.length-1]=-1
  return result
};