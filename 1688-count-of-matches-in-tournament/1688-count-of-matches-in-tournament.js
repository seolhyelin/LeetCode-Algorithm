/**
 * @param {number} n
 * @return {number}
 */
var numberOfMatches = function(n) {
   let result=0;
  let remain=n;
  
  while(remain>1){
     if(remain%2==0){
   result += remain/2;
   remain= remain/2;
 }else{
     result += (remain-1)/2;
     remain=(remain-1)/2+1;
 }
  }
     return result
};