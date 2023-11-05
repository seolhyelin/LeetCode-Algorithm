/**
 * @param {number} n
 * @return {number}
 */
var sumOfMultiples = function(n) {
  let arr=[]
  let result=[]
  let sum =0
  for(let i=1;i<=n;i++){
    arr.push(i)
  }
  
  for(let i in arr){
   if(arr[i]%3 === 0 || arr[i]%5 === 0 ||arr[i]%7 === 0){
    result.push(arr[i])
   }
  }
  

  result.forEach((num)=>
        sum+=num)
  
  return sum
};