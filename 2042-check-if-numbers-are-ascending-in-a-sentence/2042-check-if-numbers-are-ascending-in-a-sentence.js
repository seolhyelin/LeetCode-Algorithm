/**
 * @param {string} s
 * @return {boolean}
 */
var areNumbersAscending = function(s) {
  let arr=s.split(' ')
  let toNum=arr.map(Number).filter((x)=>x)
  console.log(toNum)
  
  
 for(let i=0;i<toNum.length;i++){
   if(toNum[i]>=toNum[i+1]) return false
 }
  
  return true
};