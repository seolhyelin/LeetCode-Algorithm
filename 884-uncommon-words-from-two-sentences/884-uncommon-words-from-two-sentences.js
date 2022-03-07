/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function(s1, s2) {
	const str1=s1.split(' ');
  const str2=s2.split(' ');
  const concat=str1.concat(str2);
  
  let obj={};
  for(let word of concat){
    obj[word] ? obj[word]++ : (obj[word]=1);
  }
    
  let result=[];
  for(let key in obj){
    if(obj[key]===1){
      result.push(key);
    }
  }
  return result;
};