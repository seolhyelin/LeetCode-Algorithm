/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function(words) {
      const firstWord=[...words[0]]
  let arr=[]
  
    for(let i in firstWord){
if(words.every(a=>a.includes(firstWord[i]))){
  arr.push(firstWord[i])
  words=words.map(word=>word.replace(firstWord[i],""))
}
}
return arr
    
};