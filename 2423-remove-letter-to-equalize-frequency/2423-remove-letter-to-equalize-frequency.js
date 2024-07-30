/**
 * @param {string} word
 * @return {boolean}
 */
var equalFrequency = function(word) {
  let obj={}

    for(let i=0; i<word.length; i++){
        if(obj[word[i]]){
            obj[word[i]]++
        }else {
          obj[word[i]]=1  
        }
    }
  
  let arr=Object.values(obj)
  
  for(let i=0;i<arr.length;i++){
  let newArr=[...arr]
  newArr[i]--;
        newArr=newArr.filter((val)=> val>0)

    let allSame=newArr.every((val)=>val === newArr[0])
    
    if(allSame){
      return true
    }
  }
    return false
};