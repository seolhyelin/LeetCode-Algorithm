/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function(s) {
  let letters=s.replaceAll(/[a-z]/gi,"∞")
  
  s=s.replace(/[^a-z]/gi,"").split("").reverse().join("")
  
  for(let i in s){
    letters=letters.replace("∞",s[i])
  }
  
return letters
};