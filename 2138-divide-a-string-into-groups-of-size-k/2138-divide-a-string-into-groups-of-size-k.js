/**
 * @param {string} s
 * @param {number} k
 * @param {character} fill
 * @return {string[]}
 */
var divideString = function(s, k, fill) {
        let arr=[]
    for(let i=0;i<s.length;i=i+k){
      if(s.substr(i,k).length === k){
      arr.push(s.substr(i,k))
      }else{
        arr.push(s.substr(i,k).padEnd(k,fill))
      }
    }

  
  return arr
};