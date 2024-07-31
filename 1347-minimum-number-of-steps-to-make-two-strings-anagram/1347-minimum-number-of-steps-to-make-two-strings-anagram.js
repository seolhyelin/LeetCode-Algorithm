/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function(s, t) {
   const sCount=new Array(26).fill(0)
const tCount=new Array(26).fill(0)

for(let i=0;i<s.length;i++){
  sCount[s.charCodeAt(i)-97] ++;
  tCount[t.charCodeAt(i)-97] ++;
}
  let step=0;
  for(let i=0;i<26;i++){
    if(sCount[i]>tCount[i]){
      step += sCount[i]-tCount[i]
    }
  }
  
  return step 
};