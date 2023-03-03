/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function(arr, k) {
     let obj={}
  let distinctArr=[]
  
  for(let i in arr){
    obj[arr[i]] ? obj[arr[i]] ++ : obj[arr[i]]=1
  }
  
  for(let i in obj){
    if(obj[i]==1){
    distinctArr.push(i)  
    }
  }

  return distinctArr[k-1] ? distinctArr[k-1] : ""
};