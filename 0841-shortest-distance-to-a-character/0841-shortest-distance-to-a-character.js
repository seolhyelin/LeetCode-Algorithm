/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function(s, c) {
      let arr = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === c) arr.push(i);
  }
  
  let distanceArr=[]
  for(let i=0;i<s.length; i++){
    let num=Math.abs(arr[0]-i)
    for(let j=0;j<arr.length;j++){
      num = Math.min(num, Math.abs(arr[j]-i))
    }
    distanceArr.push(num)
  }

  return distanceArr
};