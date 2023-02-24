/**
 * @param {string} s
 * @return {string}
 */
var greatestLetter = function(s) {
    let arr=[]
    
  for(let i=0;i<s.length;i++){
    if(s[i] === s[i].toUpperCase()){
      if(s.includes(s[i].toLowerCase()))
      {
        arr.push(s[i].toUpperCase())
      }
    }
    }
const sortArr=arr.sort((a,b)=> b.charCodeAt()-a.charCodeAt())

  return arr.length ==0 ? "":sortArr[0] 
};