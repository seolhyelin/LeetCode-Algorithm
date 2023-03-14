/**
 * @param {number} n
 * @return {number}
 */
var countTriples = function(n) {
    const arr=[]
let count=0

for(let i=1;i<=n;i++){
  arr.push(i*i)
}
      
  for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr.length;j++){
      if(arr.includes(arr[i]+arr[j])){
        count ++
      }
    }
  }
  
return count     
};