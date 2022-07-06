/**
 * @param {string} s
 * @param {character} letter
 * @return {number}
 */
var percentageLetter = function(s, letter) {
    let obj={}
    
    for(let i in s){
      obj[s[i]]? obj[s[i]]++ : (obj[s[i]]=1)
    }
  
if(obj[letter]==undefined) return 0
  
  const result = Math.floor((obj[letter]/s.length)*100)
  
  return result
};