/**
 * @param {number} n
 * @return {number}
 */
var smallestEvenMultiple = function(n) {
        let arr=[]
    for(let i=n; i<=n*2;i++){
      if(i%2 ===0 && i%n===0){
        arr.push(i)
      }
    }
  return Math.min(...arr)
};