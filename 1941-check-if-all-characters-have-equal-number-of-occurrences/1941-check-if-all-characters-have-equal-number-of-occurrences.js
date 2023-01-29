/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function(s) {
        const obj={}
    const arr=[]
    for(let i of s){
      if(obj[i]){
        obj[i]++
      }else{
        obj[i] = 1
      }
    }
  
  for(let i in obj){
arr.push(obj[i])
  }
  
const setArr=new Set(arr).size
return setArr===1? true: false
};