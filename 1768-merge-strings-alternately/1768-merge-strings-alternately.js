/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    const sWord1=word1.split('')
    const sWord2=word2.split('')
    let result=[];
    console.log(sWord1)
  	console.log(sWord2)
  for(let i=0; i<(sWord1+sWord2).length;i++){
    result.push(sWord1[i])
		result.push(sWord2[i])  
  }
  return result.join('')
};