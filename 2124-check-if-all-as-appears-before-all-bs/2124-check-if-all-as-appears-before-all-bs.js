/**
 * @param {string} s
 * @return {boolean}
 */
var checkString = function(s) {
      if(!s.includes('a') || !s.includes('b')) return true

  let aArr=[]
  for(let i in s){
    if(s[i] === 'a'){
      aArr.push(+i)
    }
  }
  return aArr[aArr.length-1] < s.indexOf('b') ? true :false
};