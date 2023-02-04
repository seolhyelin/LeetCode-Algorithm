/**
 * @param {string} firstWord
 * @param {string} secondWord
 * @param {string} targetWord
 * @return {boolean}
 */
var isSumEqual = function(firstWord, secondWord, targetWord) {
      let str=''
  let obj={}
  for(let i=97;i<=122;i++){
    str+=String.fromCharCode(i)
  }
for(let i=0;i<str.length;i++){
  obj[str[i]]=String(i)
}
  let firstSum=''
  for(let i in firstWord){
    firstSum += obj[firstWord[i]]
  }
    let secondSum=''
  for(let i in secondWord){
    secondSum += obj[secondWord[i]]
  }
    let targetSum=''
  for(let i in targetWord){
    targetSum += obj[targetWord[i]]
  }
  
 const sumToNum=Number(firstSum)+Number(secondSum)
  return sumToNum == Number(targetSum) ? true : false
};