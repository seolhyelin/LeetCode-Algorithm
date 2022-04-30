/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
if(num.toString().length==1) return num;
  
  let sum=0;
  for(let i of num.toString()){
    sum+=Number(i)
  }
    return addDigits(sum)
  
};