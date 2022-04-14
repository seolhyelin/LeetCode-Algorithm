/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
      let str1=s.slice(s[0],s.length/2)
   let str2=s.slice(-s.length/2)
   let countStr1=0;
   let countStr2=0;
   let vowels=['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']

 for(let i of str1){
  if(vowels.includes(i)){
    countStr1++
  }
 }
  
  for(let i of str2){
    if(vowels.includes(i)){
      countStr2++
    }
  }
if(countStr1==countStr2){
  return true
}else{ 
return false
}  
};