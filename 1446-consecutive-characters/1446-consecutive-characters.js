/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function(s) {
 const arr=s.split('')
	let count=0;
  let max=0;
  
  for(let i=0; i<arr.length;i++){
    if(arr[i]==arr[i+1]){
      count++;
    }else {
      count++;
      max=Math.max(max,count);
      count=0;
    }
  }
  return max
};