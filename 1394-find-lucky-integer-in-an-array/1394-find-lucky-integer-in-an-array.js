/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
     let obj={};
    let max=-1;
    for(let i=0; i<arr.length;i++){
      obj[arr[i]] ? obj[arr[i]]++ : (obj[arr[i]]=1)
    }
  console.log(obj)

  for(let i in obj){
    if(Number(i)==obj[i] && max<obj[i]){
    max=obj[i]
  }
  }
    

return max
    
};