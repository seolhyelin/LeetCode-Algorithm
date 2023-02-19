/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
    const arr=[...score]
arr.sort((a,b)=>b-a)

  for(let i=0;i<arr.length;i++){
if(score[i]==arr[0]){
  score[i]='Gold Medal'
}else if(score[i]==arr[1]){
  score[i]='Silver Medal'
}else if(score[i]==arr[2]){
  score[i]='Bronze Medal'
}else{
  score[i]=String(arr.indexOf(score[i])+1)
}
  }
  
  return score
};