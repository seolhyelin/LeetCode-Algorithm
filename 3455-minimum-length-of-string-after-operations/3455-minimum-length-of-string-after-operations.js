/**
 * @param {string} s
 * @return {number}
 */
var minimumLength = function(s) {
      const sortArray=[...s].sort().join("")
  let obj={}
  
  for(let i=0;i<s.length;i++){
    obj[s[i]]= obj[s[i]] ? obj[s[i]]+1 : 1 
  }
  let sum=0
  let valuesObj=Object.values(obj)
  
  for(let i=0; i<valuesObj.length; i++){
    if(valuesObj[i] % 2 === 0){
    sum += 2
  }else if(valuesObj[i] % 2 === 1){
    sum += 1
  }
   else{
    sum += valuesObj[i]
  } 
  }
return sum 
};