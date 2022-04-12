/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
let sum=0;
for(let i in s){
  if(s[i]=='A')sum++
}
  if(sum>=2 || s.includes('LLL')){
    return false;
  }else{ return true}

};