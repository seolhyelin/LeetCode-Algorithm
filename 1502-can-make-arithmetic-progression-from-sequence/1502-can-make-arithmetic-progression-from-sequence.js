/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function(arr) {
        const ascend=arr.sort((a,b)=>a-b)


  for(let i=0;i<arr.length-2;i++){
    if(Math.abs(ascend[i]-ascend[i+1])!==Math.abs(ascend[i+1]-ascend[i+2])) return false
  }
  
  return true
};