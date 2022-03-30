/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function(s, k) {
      const arr=s.split(' ');
  const result=[];
  
  for(let i=0;i<k;i++){
    result.push(arr[i])
  }
 return result.join(" ")
};