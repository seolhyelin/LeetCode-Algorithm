/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
        let arrSlice1=nums.slice(0,n);
  	let arrSlice2=nums.slice(-n);

  const result=[];
  for(let i=0;i<n;i++){
    result.push(arrSlice1[i]);
    result.push(arrSlice2[i]);
  }
  return result;
};