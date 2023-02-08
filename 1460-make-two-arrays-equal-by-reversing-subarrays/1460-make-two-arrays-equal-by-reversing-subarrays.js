/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
var canBeEqual = function(target, arr) {
        const targetSort=target.sort((a,b)=>a-b)
    const arrSort=arr.sort((a,b)=>a-b)
    const a = JSON.stringify(targetSort)
    const b = JSON.stringify(arrSort)
    
if(a !== b) return false
  return true
};