/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
      const included=[]
  const noExisted=[]
  
  for(let i=0;i<arr2.length; i++){
    for(let j=0;j<arr1.length; j++){
    if(arr2[i]== arr1[j]){
     included.push(arr2[i])
    }
    }
  }
  for(let i=0;i<arr1.length;i++){
    if(!included.includes(arr1[i])){
      noExisted.push(arr1[i])
    }
  }
  
  noExisted.sort((a,b)=>a-b)
  return included.concat(noExisted)
};