/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
      let arr=[];
  for(let i=0; i<heights.length;i++){
    arr.push(heights[i])
  }
  
  const sortArr=heights.sort((a,b)=>a-b);
  	let count=0;

  for(let i=0; i<arr.length;i++){
    if(arr[i]!==sortArr[i]){
      count++;
    }
  }
    return count
};