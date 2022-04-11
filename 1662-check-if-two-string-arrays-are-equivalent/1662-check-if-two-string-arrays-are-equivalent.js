/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function(word1, word2) {
let wordJoin1=word1.join('')
let wordJoin2=word2.join('')
  
  if(wordJoin1==wordJoin2){
    return true
  }else{
    return false
  }
  
};