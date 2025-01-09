/**
 * @param {string} s
 * @return {number}
 */
var countZeros= function(s){
  let count = 0
  for(let i of s){
    if(i === "0") count ++
  }

  return count
}

var countOnes= function(s){
  let count = 0
  for(let i of s){
    if(i === "1") count ++
  }

  return count
}

var maxScore = function(s) {
    let arr=[]

    for(let i=1;i<s.length;i++){
      let left=""
      let right=""
      left = s.slice(0,i) 
      right= s.slice(i) 
      arr.push([left,right])
    }
let sumArr=[]
for(let i=0;i<arr.length;i++){
 let left=arr[i][0]
 let right=arr[i][1]

sumArr.push(countZeros(left)+countOnes(right))
}

return Math.max(...sumArr)
};