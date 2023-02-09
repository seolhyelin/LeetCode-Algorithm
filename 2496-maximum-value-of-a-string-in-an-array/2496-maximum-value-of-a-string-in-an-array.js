/**
 * @param {string[]} strs
 * @return {number}
 */
var maximumValue = function(strs) {
        let arr=[]
  for(let i of strs){
      if(isNaN(i)){
        arr.push(i.length)
      }else{
        arr.push(Number(i))
      }
  }
  
  return Math.max(...arr)
};