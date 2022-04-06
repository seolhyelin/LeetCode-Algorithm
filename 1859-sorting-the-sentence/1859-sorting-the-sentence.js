/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
        const arr=s.split(' ')
    let result=[]
  arr.sort((a,b)=>
    a[a.length-1]-b[b.length-1]
)

  
  for(let i of arr){
   i=i.slice(0,-1);
    result.push(i)
  }
  return result.join(' ')
};