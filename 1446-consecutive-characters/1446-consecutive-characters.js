/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function(s) {
	let count=0;
  let max=0;
  
  for(let i=0; i<s.length;i++){
    if(s[i]==s[i+1]){
      count++;
    }else {
      count++;
      max=Math.max(max,count);
      count=0;
    }
  }
  return max
};