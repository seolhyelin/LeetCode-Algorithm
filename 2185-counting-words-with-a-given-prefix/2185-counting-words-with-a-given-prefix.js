/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
var prefixCount = function(words, pref) {
  let arr=[]
  
  for(let i of words){
if(i.startsWith(pref)){
  arr.push(i)
}
  }

return arr.length
};