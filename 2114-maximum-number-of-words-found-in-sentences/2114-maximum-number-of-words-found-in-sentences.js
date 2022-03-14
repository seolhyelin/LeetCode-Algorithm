/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
  let max = 0;
	let sLength=0;
  
  for(let i=0;i<sentences.length;i++){
  	sLength=sentences[i].split(' ').length;
    if(sLength>max){
      max=sLength;
    }
  }
return max;
};