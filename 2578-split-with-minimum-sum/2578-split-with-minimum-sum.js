/**
 * @param {number} num
 * @return {number}
 */
var splitNum = function(num) {
let arr=[...String(num)].map(num=> +num).sort((a,b)=>a-b)
  let arr1=[]
  let arr2=[]
  
  for(let i in arr){
    if(i % 2 ===1){
      arr1.push(String(arr[i]))
    }else{
      arr2.push(String(arr[i]))
    }
  }
  const num1=+arr1.map(num=>+num).join('')
  const num2=+arr2.map(num=>+num).join('')
  
return num1+num2
  
};