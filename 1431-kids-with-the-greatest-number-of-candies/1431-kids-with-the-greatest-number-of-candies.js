/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
      let result=[];
  const arr=candies.map(num => {return num + extraCandies});
    const max= Math.max(...candies);
  for(let i=0;i<arr.length;i++){
    if(max<=arr[i]){
      result.push(true);
    }else{
      result.push(false);
    }
  }
  return result;
};