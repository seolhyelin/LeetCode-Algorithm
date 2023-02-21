/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
       const rowOne="qwertyuiop"
    const rowTwo="asdfghjkl"
    const rowThree="zxcvbnm"
    const arr=[]
    
 for(let i of words){
   const word=[...new Set(i.toLowerCase())]
   const wordLength=word.length
   let first=0
   let second=0
   let third=0
   
  for(let i=0;i<word.length;i++){
    if(rowOne.includes(word[i])) first ++
    if(rowTwo.includes(word[i])) second ++
    if(rowThree.includes(word[i])) third ++
  }
   
   if(wordLength == first || wordLength == second || wordLength == third){
     arr.push(i)
   }
   
 }
   return arr   
};